// src/utils/schemaBuilders.js

const SITE_URL = 'https://flashcabcables.com';
const SITE_NAME = 'Flashcab Cables';
const SITE_LOGO = `${SITE_URL}/assets/images/logo.png`;

const COMPANY_INFO = {
  name: 'Flashcab Cables Pvt. Ltd.',
  alternateName: 'Flashcab Cables',
  url: SITE_URL,
  logo: SITE_LOGO,
  image: SITE_LOGO,
  description: 'Flashcab Cables is a leading manufacturer of premium wires and cables. We deliver high-quality, reliable, and sustainable power solutions for industries and homes.',
  email: 'info@flashcabcables.com',
  telephone: '+919093949599',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R S NO 9 P4/P1, Plot No 1 & 2, National Highway 27, Opp. BPCL Petrol Pump, Biliyala, Gondal',
    addressLocality: 'Rajkot',
    addressRegion: 'Gujarat',
    postalCode: '360005',
    addressCountry: 'IN'
  },
  areaServed: 'IN',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61572152092842',
    'https://www.instagram.com/flashcab.cables/',
    'https://www.linkedin.com/company/flashcab-cables-pvt-ltd/'
  ]
};

export const buildOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: COMPANY_INFO.name,
  alternateName: COMPANY_INFO.alternateName,
  url: COMPANY_INFO.url,
  logo: COMPANY_INFO.logo,
  image: COMPANY_INFO.image,
  description: COMPANY_INFO.description,
  email: COMPANY_INFO.email,
  telephone: COMPANY_INFO.telephone,
  address: COMPANY_INFO.address,
  areaServed: COMPANY_INFO.areaServed,
  sameAs: COMPANY_INFO.sameAs
});

export const buildWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE_URL,
  name: SITE_NAME,
  alternateName: COMPANY_INFO.name,
  description: COMPANY_INFO.description,
  publisher: {
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    logo: {
      '@type': 'ImageObject',
      url: COMPANY_INFO.logo
    }
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
});

export const buildWebPageSchema = ({ name, description, url, primaryImageOfPage, datePublished, dateModified, breadcrumbId }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: name || SITE_NAME,
    description: description || COMPANY_INFO.description,
    url: `${SITE_URL}${url || ''}`,
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`
    }
  };

  if (primaryImageOfPage) {
    schema.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: primaryImageOfPage
    };
  }
  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  if (breadcrumbId) schema.breadcrumb = { '@id': breadcrumbId };

  return schema;
};

export const buildBreadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${SITE_URL}/#breadcrumb`,
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.url}`
  }))
});

export const buildLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: COMPANY_INFO.name,
  image: COMPANY_INFO.image,
  '@id': `${SITE_URL}/#localbusiness`,
  url: COMPANY_INFO.url,
  telephone: COMPANY_INFO.telephone,
  email: COMPANY_INFO.email,
  address: COMPANY_INFO.address,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00'
    }
  ],
  areaServed: COMPANY_INFO.areaServed
});

export const buildContactPageSchema = ({ name, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name,
  description,
  url: `${SITE_URL}${url}`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${url}`
  }
});

export const buildAboutPageSchema = ({ name, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name,
  description,
  url: `${SITE_URL}${url}`,
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': `${SITE_URL}${url}`
  }
});

export const buildProductSchema = ({ name, description, image, brand, manufacturer, category }) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name,
  description,
  image: image || COMPANY_INFO.image,
  brand: {
    '@type': 'Brand',
    name: brand || SITE_NAME
  },
  manufacturer: {
    '@type': 'Organization',
    name: manufacturer || COMPANY_INFO.name
  },
  category: category || 'Electrical Cables'
});

export const buildFAQPageSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});

export const buildArticleSchema = ({ isBlogPosting = false, headline, authorName, image, datePublished, dateModified }) => ({
  '@context': 'https://schema.org',
  '@type': isBlogPosting ? 'BlogPosting' : 'Article',
  headline,
  author: {
    '@type': 'Person',
    name: authorName || SITE_NAME
  },
  publisher: {
    '@type': 'Organization',
    name: COMPANY_INFO.name,
    logo: {
      '@type': 'ImageObject',
      url: COMPANY_INFO.logo
    }
  },
  image: image || COMPANY_INFO.image,
  datePublished,
  dateModified
});
