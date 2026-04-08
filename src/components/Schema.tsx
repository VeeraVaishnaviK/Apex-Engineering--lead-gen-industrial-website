const Schema = ({ type, data }: { type: 'LocalBusiness' | 'Product' | 'FAQ', data: any }) => {
  let schemaData = {};

  if (type === 'LocalBusiness') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Apex Engineering",
      "image": "https://apexengineering.vercel.app/images/hero.png",
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
        "latitude": "13.02",
        "longitude": "80.17"
      },
      "telephone": "+91 89253 01739",
      "email": "apeexengineering@gmail.com",
      "url": "https://apexengineering.vercel.app/"
    };
  } else if (type === 'Product') {
    schemaData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": data.name,
      "description": data.description,
      "brand": {
        "@type": "Brand",
        "name": "Apex Engineering"
      },
      "offers": {
        "@type": "AggregateOffer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR"
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
