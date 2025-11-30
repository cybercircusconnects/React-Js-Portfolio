import React from "react";
import { Helmet } from "react-helmet-async";
import { Bio, projects, skills, experiences, education } from "../../data/constants";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title
    ? `${title} | ${Bio.name}`
    : `${Bio.name} - Full Stack Developer | MERN Stack Expert | React.js & Node.js Specialist`;
  const siteDescription = description || 
    "Portfolio of Jawad Ullah, a skilled Full Stack Developer specializing in MERN Stack, React.js, Next.js, Node.js, Nest.js, and modern web technologies. 3+ years of professional experience building scalable web applications. Expert in JavaScript, TypeScript, MongoDB, Express.js, and cloud deployment.";
  const siteKeywords =
    keywords ||
    "Full Stack Developer, MERN Stack Developer, React Developer, Next.js Developer, Node.js Developer, JavaScript Developer, TypeScript Developer, Web Developer Pakistan, Software Engineer, Frontend Developer, Backend Developer, React.js, Node.js, Express.js, MongoDB, Nest.js, Tailwind CSS, Material UI, Redux, Portfolio, Jawad Ullah, Web Development, Software Development, Pakistan Developer, Freelance Developer, Remote Developer, React Portfolio, Developer Portfolio";
  const siteImage =
    image || Bio.image || `${typeof window !== 'undefined' ? window.location.origin : 'https://jawad-ullah.vercel.app'}/HeroImage.jpg`;
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://jawad-ullah.vercel.app');
  const siteName = `${Bio.name} - Portfolio`;
  const siteLocale = "en_US";
  const siteType = "website";

  // Person Schema (Enhanced)
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: Bio.name,
    alternateName: "thecyberjawad",
    url: siteUrl,
    image: {
      "@type": "ImageObject",
      url: siteImage,
      width: 1200,
      height: 630,
    },
    sameAs: [
      Bio.linkedin,
      Bio.github,
      Bio.insta,
      Bio.twitter,
      Bio.facebook,
      Bio.youtube,
      Bio.threads,
    ].filter(Boolean),
    jobTitle: Bio.roles,
    description: siteDescription,
    knowsAbout: skills.flatMap(category => 
      category.skills.map(skill => skill.name)
    ),
    alumniOf: {
      "@type": "EducationalOrganization",
      name: education[0]?.school || "Virtual University of Pakistan",
    },
    worksFor: experiences.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      jobTitle: exp.role,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Pakistan",
    },
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${Bio.name} - Web Development Services`,
    description: siteDescription,
    provider: {
      "@type": "Person",
      name: Bio.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Pakistan",
    },
    serviceType: [
      "Web Development",
      "Full Stack Development",
      "Frontend Development",
      "Backend Development",
      "React.js Development",
      "Node.js Development",
      "MERN Stack Development",
    ],
  };

  // Portfolio/Website Schema (Enhanced)
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    inLanguage: "en-US",
    author: {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
    },
    publisher: {
      "@type": "Person",
      "@id": `${siteUrl}#person`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Projects Schema (Enhanced)
  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Portfolio Projects",
    description: "A collection of web applications and projects developed by Jawad Ullah",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: project.title,
        description: project.description,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        url: project.webapp || project.github,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5",
          ratingCount: "1",
        },
      },
    })),
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: `${siteUrl}#projects`,
      },
    ],
  };

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: `${Bio.name} - Web Development`,
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: siteImage,
    },
    sameAs: [
      Bio.linkedin,
      Bio.github,
      Bio.insta,
      Bio.twitter,
      Bio.facebook,
      Bio.youtube,
      Bio.threads,
    ].filter(Boolean),
  };

  // Skills Schema
  const skillsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Technical Skills",
    description: "Technologies and skills mastered by Jawad Ullah",
    itemListElement: skills.flatMap((category, catIndex) =>
      category.skills.map((skill, skillIndex) => ({
        "@type": "ListItem",
        position: catIndex * 100 + skillIndex + 1,
        item: {
          "@type": "Thing",
          name: skill.name,
        },
      }))
    ),
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={Bio.name} />
      <meta name="copyright" content={Bio.name} />
      <meta name="application-name" content={siteName} />
      <link rel="canonical" href={siteUrl} />

      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={siteType} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${Bio.name} - Full Stack Developer Portfolio`} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={siteLocale} />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="article:author" content={Bio.name} />

      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={`${Bio.name} - Full Stack Developer Portfolio`} />
      <meta name="twitter:creator" content="@thecyberjawad" />
      <meta name="twitter:site" content="@thecyberjawad" />
      <meta name="twitter:domain" content="jawad-ullah.vercel.app" />

      {/* Advanced SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="PK" />
      <meta name="geo.placename" content="Pakistan" />
      <meta name="theme-color" content="#854CE6" />
      <meta name="msapplication-TileColor" content="#854CE6" />
      
      {/* Mobile Optimization - Enhanced */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={Bio.name} />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Performance & Preconnect */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      
      {/* Structured Data - Person */}
      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>
      
      {/* Structured Data - Website */}
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      
      {/* Structured Data - Projects */}
      <script type="application/ld+json">
        {JSON.stringify(projectsStructuredData)}
      </script>

      {/* Structured Data - Professional Service */}
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {/* Structured Data - Breadcrumb */}
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>

      {/* Structured Data - Skills */}
      <script type="application/ld+json">
        {JSON.stringify(skillsSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
