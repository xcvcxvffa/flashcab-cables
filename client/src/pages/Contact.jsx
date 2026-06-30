import React, { useState, useRef, useCallback } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';
import Schema from '../components/SEO/Schema';
import { buildContactPageSchema, buildBreadcrumbSchema } from '../utils/schemaBuilders';

gsap.registerPlugin(ScrollTrigger);
// ─── Constants ────────────────────────────────────────────────────────────────
const API_URL = '/api/contact.php';

const INITIAL_FORM = {
  fullName: '',
  companyName: '',   // optional
  email: '',
  phone: '',
  subject: '',
  message: '',
  honeypot: '',      // spam trap — must stay empty
};

// ─── Validation helpers ────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX  = /^[+]?[\d\s\-().]{7,20}$/;

function validate(fields) {
  const errs = {};
  if (!fields.fullName.trim())
    errs.fullName = 'Full name is required.';
  if (!fields.email.trim())
    errs.email = 'Email address is required.';
  else if (!EMAIL_REGEX.test(fields.email.trim()))
    errs.email = 'Please enter a valid email address.';
  if (!fields.phone.trim())
    errs.phone = 'Phone number is required.';
  else if (!PHONE_REGEX.test(fields.phone.trim()))
    errs.phone = 'Please enter a valid phone number.';
  if (!fields.subject.trim())
    errs.subject = 'Subject is required.';
  if (!fields.message.trim())
    errs.message = 'Message cannot be empty.';
  return errs;
}

// ─── Sanitize — strip dangerous HTML tags ─────────────────────────────────────
function sanitize(str) {
  return str.replace(/<[^>]*>?/gm, '').trim();
}

// ─── ContactForm component ─────────────────────────────────────────────────────
const ContactForm = () => {
  const [formData, setFormData]   = useState(INITIAL_FORM);
  const [errors,   setErrors]     = useState({});
  const [status,   setStatus]     = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg]   = useState('');
  const submittingRef             = useRef(false);     // prevent duplicate submissions

  // Live validation on blur
  const handleBlur = useCallback((e) => {
    const { name } = e.target;
    const fieldErrors = validate({ ...formData, [name]: formData[name] });
    setErrors(prev => ({
      ...prev,
      [name]: fieldErrors[name] || undefined,
    }));
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear the error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Honeypot check — bots fill this, humans don't ──
    if (formData.honeypot) return;

    // ── Prevent duplicate submissions ──
    if (submittingRef.current) return;

    // ── Full validation ──
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    submittingRef.current = true;
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(API_URL, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept':        'application/json',
        },
        body: JSON.stringify({
          fullName:    sanitize(formData.fullName),
          companyName: sanitize(formData.companyName),
          email:       sanitize(formData.email),
          phone:       sanitize(formData.phone),
          subject:     sanitize(formData.subject),
          message:     sanitize(formData.message),
          honeypot:    formData.honeypot,
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFormData(INITIAL_FORM);
        setErrors({});
      } else {
        throw new Error(data.message || 'Submission failed.');
      }
    } catch (err) {
      console.error('[ContactForm]', err);
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    } finally {
      submittingRef.current = false;
    }
  };

  const isSending = status === 'sending';

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Contact form">

      {/* ── Honeypot — hidden from real users ── */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: 'none' }}
      />

      {/* ── Row: Full Name + Company ── */}
      <div className="contact-form-row">
        <div className="contact-input-group">
          <label className="contact-input-label" htmlFor="cf-fullName">
            Full Name <span className="contact-required">*</span>
          </label>
          <input
            id="cf-fullName"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={`contact-custom-input ${errors.fullName ? 'input-error' : ''}`}
            disabled={isSending}
          />
          {errors.fullName && <span className="contact-field-error">{errors.fullName}</span>}
        </div>

        <div className="contact-input-group">
          <label className="contact-input-label" htmlFor="cf-companyName">
            Company Name <span className="contact-optional">(optional)</span>
          </label>
          <input
            id="cf-companyName"
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Your Company Pvt Ltd"
            className="contact-custom-input"
            disabled={isSending}
          />
        </div>
      </div>

      {/* ── Row: Email + Phone ── */}
      <div className="contact-form-row">
        <div className="contact-input-group">
          <label className="contact-input-label" htmlFor="cf-email">
            Email Address <span className="contact-required">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={`contact-custom-input ${errors.email ? 'input-error' : ''}`}
            disabled={isSending}
          />
          {errors.email && <span className="contact-field-error">{errors.email}</span>}
        </div>

        <div className="contact-input-group">
          <label className="contact-input-label" htmlFor="cf-phone">
            Phone Number <span className="contact-required">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="+91 98765 43210"
            className={`contact-custom-input ${errors.phone ? 'input-error' : ''}`}
            disabled={isSending}
          />
          {errors.phone && <span className="contact-field-error">{errors.phone}</span>}
        </div>
      </div>

      {/* ── Subject ── */}
      <div className="contact-input-group">
        <label className="contact-input-label" htmlFor="cf-subject">
          Subject <span className="contact-required">*</span>
        </label>
        <input
          id="cf-subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="e.g. Product Enquiry, Bulk Order"
          className={`contact-custom-input ${errors.subject ? 'input-error' : ''}`}
          disabled={isSending}
        />
        {errors.subject && <span className="contact-field-error">{errors.subject}</span>}
      </div>

      {/* ── Message ── */}
      <div className="contact-input-group">
        <label className="contact-input-label" htmlFor="cf-message">
          Message <span className="contact-required">*</span>
        </label>
        <textarea
          id="cf-message"
          rows="5"
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Describe your requirement in detail..."
          className={`contact-custom-textarea ${errors.message ? 'input-error' : ''}`}
          disabled={isSending}
        />
        {errors.message && <span className="contact-field-error">{errors.message}</span>}
      </div>

      {/* ── Submit button ── */}
      <button
        type="submit"
        className="btn-uiverse group contact-submit-btn"
        disabled={isSending}
        aria-disabled={isSending}
        style={{ marginTop: '10px', opacity: isSending ? 0.75 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
      >
        <span className="flex items-center gap-2.5">
          {isSending ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1 shrink-0 self-center">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" />
              </svg>
            </>
          )}
        </span>
      </button>

      {/* ── Success message ── */}
      {status === 'success' && (
        <div className="contact-form-feedback contact-form-success" role="alert">
          <CheckCircle size={20} />
          <span>Message sent! We'll get back to you within 24 hours.</span>
        </div>
      )}

      {/* ── Error message ── */}
      {status === 'error' && (
        <div className="contact-form-feedback contact-form-error" role="alert">
          <AlertCircle size={20} />
          <span>{errorMsg || 'Something went wrong. Please try again.'}</span>
        </div>
      )}
    </form>
  );
};

// ─── Contact page ──────────────────────────────────────────────────────────────
const Contact = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Split heading animation
    const splitHeadings = document.querySelectorAll(
      '.contact-page-wrapper h1, .contact-page-wrapper h2, .contact-page-wrapper h3, .split-heading'
    );
    splitHeadings.forEach(heading => {
      const isSplit = heading.querySelector('.anim-word') !== null;
      if (!isSplit) {
        heading.dataset.split = 'true';
        const lines = heading.innerHTML.split(/<br\s*\/?>/i);
        const wrappedLines = lines.map(line => {
          const words = line.split(/\s+/);
          return words.map(word => {
            if (word.trim() === '') return '';
            return `<span class="word-mask" style="display:inline-block;overflow:hidden;vertical-align:bottom;padding-bottom:5px;margin-bottom:-5px;"><span class="anim-word" style="display:inline-block;opacity:0;transform:translateY(120%);">${word}</span></span>`;
          }).join('&nbsp;');
        });
        heading.innerHTML = wrappedLines.join('<br>');
      }
      const words = heading.querySelectorAll('.anim-word');
      if (words.length > 0) {
        gsap.to(words, {
          opacity: 1, y: '0%', stagger: 0.15, ease: 'power3.out', duration: 0.8,
          scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play reverse play reverse' },
        });
      }
    });

    // Fade-up paragraphs
    document.querySelectorAll('.gsap-stagger-text p, .split-desc').forEach(el => {
      gsap.fromTo(el, { autoAlpha: 0, y: 40 }, {
        autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play reverse play reverse' },
      });
    });

    // Reveal cards
    gsap.utils.toArray('.gsap-reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
      });
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="contact-page-wrapper">
      <SEO 
        title="Contact Us - Flashcab Cables"
        description="Get in touch with Flashcab Cables for product inquiries, bulk orders, and expert electrical solutions."
        url="/contact"
      />
      <Schema 
        schemaData={[
          buildContactPageSchema({
            name: "Contact Flashcab Cables",
            description: "Reach out to our experts for inquiries and bulk orders.",
            url: "/contact"
          }),
          buildBreadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" }
          ])
        ]}
      />
      {/* Page Header */}
      <div className="breadcrumb-hero" style={{ backgroundImage: "url('/assets/images/industrial_mix_bg.png')" }}>
        <h1 className="breadcrumb-title split-heading">Get in Touch</h1>
        <div className="breadcrumb-nav">
          <Link to="/">Home</Link>
          <span className="separator">/</span>
          <span className="current">Contact</span>
        </div>
      </div>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-grid">

            {/* Left — Info Cards */}
            <div className="contact-info-col gsap-stagger-text">
              <h2 className="contact-main-heading split-heading">
                Reach out to<br/>our experts.
              </h2>

              <div className="gsap-reveal contact-info-card contact-details-wrapper">
                {/* Location */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon-box">
                    <MapPin className="contact-icon" size={22} strokeWidth={2.5} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">Corporate Office &amp; Factory</span>
                    <p className="contact-detail-value">
                      R S NO 9 P4/P1, Plot No 1 &amp; 2,<br/>
                      National Highway 27, Opp. BPCL Petrol Pump,
                      Biliyala, Gondal,<br/>Rajkot, Gujarat-360005
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon-box">
                    <Phone className="contact-icon" size={22} strokeWidth={2.5} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">Sales &amp; Inquiry</span>
                    <p className="contact-detail-phone">+91 90 93 94 95 99</p>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-detail-row">
                  <div className="contact-detail-icon-box">
                    <Mail className="contact-icon" size={22} strokeWidth={2.5} />
                  </div>
                  <div className="contact-detail-text">
                    <span className="contact-detail-label">Email Us</span>
                    <p className="contact-detail-email">info@flashcabcables.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div className="contact-form-col gsap-reveal">
              <div className="contact-form-container">
                <h3 className="contact-form-heading split-heading">Send Us a Message</h3>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="gsap-reveal contact-map-wrapper">
            <iframe
              className="contact-map-iframe"
              src="https://www.google.com/maps?q=Flashcab+Cables+Pvt+Ltd,+National+Highway+27,+Opp+BPCL+Petrol+Pump,+Biliyala,+Gondal,+Rajkot,+Gujarat+360311&output=embed&z=15"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Flashcab Cables Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
