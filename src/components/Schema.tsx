const BASE_URL = "https://apexengineering.org.in";

type SchemaType = 
  | "LocalBusiness" 
  | "WebSite" 
  | "Product" 
  | "FAQPage" 
  | "BreadcrumbList" 
  | "Article" 
  | "Organization" 
  | "Service" 
  | "ContactPage"
  | "WebPage";

interface SchemaProps {
  type: SchemaType;
  data?: Record<string, unknown>;
}

const Schema = ({ type, data = {} }: SchemaProps) => {
  let schemaData: Record<string, unknown> = {};

  if (type === "Organization") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      "name": "Apex Engineering",
      "alternateName": "Apex Engineering India",
      "url": BASE_URL,
      "logo": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
        "width": 1200,
        "height": 630
      },
      "description": "Apex Engineering is a leading manufacturer of MS fabrication, SS fabrication, material handling equipment, conveyor systems, industrial trolleys, and warehouse storage solutions in India.",
      "foundingDate": "2023",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918925301739",
        "contactType": "sales",
        "availableLanguage": ["English", "Hindi"],
        "areaServed": "IN"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/2 Balambigai Nagar 1st Main Road, Rampuram",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600089",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.indiamart.com/apex-engineering-chennai/",
        "https://www.justdial.com/Chennai/Apex-Engineering-Ramapuram/044PXX44-XX44-231116174242-P2S1_BZDET"
      ]
    };
  } else if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      "name": "Apex Engineering",
      "image": `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
      "url": BASE_URL,
      "telephone": "+918925301739",
      "email": "apeexengineering@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Bank Transfer, Cheque",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/2 Balambigai Nagar 1st Main Road, Rampuram",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600089",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.030553",
        "longitude": "80.17459"
      },
      "hasMap": "https://www.google.com/maps?cid=6787889391039820000",
      "areaServed": [
        {
          "@type": "City",
          "name": "Chennai"
        },
        {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      ]
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      "name": "Apex Engineering",
      "url": BASE_URL,
      "description": "Official website of Apex Engineering — manufacturer of industrial fabrication and material handling equipment in India.",
      "publisher": {
        "@id": `${BASE_URL}/#organization`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/products?search={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };
  } else if (type === "Product") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "image": data.image,
      "brand": {
        "@type": "Brand",
        "name": "Apex Engineering"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "url": BASE_URL
      },
      "offers": {
        "@type": "Offer",
        "url": `${BASE_URL}/products/${data.slug}/`,
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Apex Engineering"
        }
      }
    };
  } else if (type === "Service") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": data.serviceType,
      "provider": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "url": BASE_URL
      },
      "name": data.name,
      "description": data.description,
      "areaServed": [
        {
          "@type": "City",
          "name": "Chennai"
        },
        {
          "@type": "State",
          "name": "Tamil Nadu"
        }
      ],
      "url": `${BASE_URL}${data.url}`,
      "image": data.image ? `${BASE_URL}${data.image}` : `${BASE_URL}/hero_industrial_workshop_1775677983634.png`
    };
  } else if (type === "FAQPage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": (data.faqs as { question: string; answer: string }[]).map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  } else if (type === "BreadcrumbList") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": (data.items as { name: string; url: string }[]).map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": `${BASE_URL}${item.url}`
      }))
    };
  } else if (type === "Article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.excerpt,
      "author": {
        "@type": "Person",
        "name": data.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/hero_industrial_workshop_1775677983634.png`
        }
      },
      "datePublished": data.date,
      "dateModified": data.date,
      "url": `${BASE_URL}/blog/${data.slug}/`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${data.slug}/`
      }
    };
  } else if (type === "ContactPage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Apex Engineering",
      "url": `${BASE_URL}/contact/`,
      "description": "Contact Apex Engineering for industrial fabrication, material handling equipment, and custom engineering solutions.",
      "mainEntity": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "telephone": "+918925301739",
        "email": "apeexengineering@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1/2 Balambigai Nagar 1st Main Road, Rampuram",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600089",
          "addressCountry": "IN"
        }
      }
    };
  } else if (type === "WebPage") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": data.name || "Apex Engineering",
      "description": data.description || "Apex Engineering is a leading manufacturer of MS fabrication, SS fabrication, material handling equipment, conveyor systems, industrial trolleys, and warehouse storage solutions in India.",
      "url": `${BASE_URL}${data.url}`,
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".speakable-content"]
      }
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default Schema;
