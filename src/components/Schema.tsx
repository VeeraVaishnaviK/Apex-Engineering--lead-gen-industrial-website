const BASE_URL = "https://apexengineering.vercel.app";

type SchemaType = "LocalBusiness" | "WebSite" | "Product" | "FAQPage" | "BreadcrumbList" | "Article";

interface SchemaProps {
  type: SchemaType;
  data?: Record<string, unknown>;
}

const Schema = ({ type, data = {} }: SchemaProps) => {
  let schemaData: Record<string, unknown> = {};

  if (type === "LocalBusiness") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Apex Engineering",
      "image": `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
      "description": "Apex Engineering is a leading industrial fabrication company in Chennai specialising in custom MS, SS & Aluminium structures, material handling equipment, trolleys, working tables, and storage racks.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1/2 Balambigai Nagar 1st Main Road, Rampuram",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600089",
        "addressCountry": "IN",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.02",
        "longitude": "80.17",
      },
      "telephone": "+918925301739",
      "email": "apeexengineering@gmail.com",
      "url": BASE_URL,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00",
        },
      ],
      "priceRange": "₹₹",
      "areaServed": {
        "@type": "City",
        "name": "Chennai",
      },
      "sameAs": [],
    };
  } else if (type === "WebSite") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Apex Engineering",
      "url": BASE_URL,
      "description": "Industrial fabrication manufacturer in Chennai — custom MS, SS & Aluminium structures, trolleys, and material handling equipment.",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${BASE_URL}/products?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
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
        "name": "Apex Engineering",
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "url": BASE_URL,
      },
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "seller": {
          "@type": "Organization",
          "name": "Apex Engineering",
        },
      },
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
          "text": faq.answer,
        },
      })),
    };
  } else if (type === "BreadcrumbList") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": (data.items as { name: string; url: string }[]).map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": `${BASE_URL}${item.url}`,
      })),
    };
  } else if (type === "Article") {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": data.title,
      "description": data.excerpt,
      "author": {
        "@type": "Person",
        "name": data.author,
      },
      "publisher": {
        "@type": "Organization",
        "name": "Apex Engineering",
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/hero_industrial_workshop_1775677983634.png`,
        },
      },
      "datePublished": data.date,
      "dateModified": data.date,
      "url": `${BASE_URL}/blog/${data.slug}`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${BASE_URL}/blog/${data.slug}`,
      },
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
