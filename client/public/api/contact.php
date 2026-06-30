<?php
/**
 * Secure Contact Form Backend using PHPMailer
 * Place this in public/api/contact.php
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Set headers for CORS and JSON response
header("Access-Control-Allow-Origin: *"); // Adjust if you want to restrict to your domain
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

// Handle OPTIONS preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// Ensure Composer autoloader exists
$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server configuration error. PHPMailer not installed."]);
    exit();
}
require $autoloadPath;

// Load Configuration
$configPath = __DIR__ . '/config.php';
if (!file_exists($configPath)) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Server configuration error. Config file missing."]);
    exit();
}
$config = require $configPath;

// Read JSON Payload
$jsonInput = file_get_contents('php://input');
$data = json_decode($jsonInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid JSON payload"]);
    exit();
}

// ─── Honeypot Check ───
// If honeypot is filled, act as if it succeeded but do nothing.
if (!empty($data['honeypot'])) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);
    exit();
}

// ─── Sanitization & Validation ───
$fullName    = trim(strip_tags($data['fullName'] ?? ''));
$companyName = trim(strip_tags($data['companyName'] ?? ''));
$email       = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone       = trim(strip_tags($data['phone'] ?? ''));
$subject     = trim(strip_tags($data['subject'] ?? ''));
$message     = trim(strip_tags($data['message'] ?? ''));

// Validate Required Fields
if (empty($fullName) || empty($email) || empty($phone) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "All required fields must be filled"]);
    exit();
}

// Validate Email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid email format"]);
    exit();
}

// Basic Phone Validation
if (!preg_match('/^[+]?[\d\s\-().]{7,20}$/', $phone)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Invalid phone format"]);
    exit();
}

// ─── Prepare Email using PHPMailer ───
$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = $config['SMTP_HOST'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['SMTP_USERNAME'];
    $mail->Password   = $config['SMTP_PASSWORD'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Enable implicit TLS/SSL
    $mail->Port       = $config['SMTP_PORT'];

    // Ensure utf-8 encoding
    $mail->CharSet    = 'UTF-8';

    // Recipients
    $mail->setFrom($config['MAIL_FROM'], $config['MAIL_FROM_NAME']);
    $mail->addAddress($config['MAIL_TO']);
    $mail->addReplyTo($email, $fullName);

    // Content
    $mail->isHTML(true);
    $mail->Subject = "[Contact Form] " . $subject;

    // Build email body
    $companyText = !empty($companyName) ? htmlspecialchars($companyName) : "N/A";
    $bodyHtml = "
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> " . htmlspecialchars($fullName) . "</p>
        <p><strong>Company:</strong> " . $companyText . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>Subject:</strong> " . htmlspecialchars($subject) . "</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->Body    = $bodyHtml;
    $mail->AltBody = strip_tags(str_replace("<br>", "\n", $bodyHtml));

    $mail->send();

    // Success response
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Message sent successfully"]);

} catch (Exception $e) {
    http_response_code(500);
    // Be careful not to expose full error details in production to end users
    // For debugging during setup you might want to log $mail->ErrorInfo
    echo json_encode(["success" => false, "message" => "Failed to send message. Please try again later."]);
}
