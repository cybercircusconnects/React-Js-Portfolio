import React from "react";
import { Helmet } from "react-helmet-async";
import { Bio, projects, skills, experiences, education } from "../../data/constants";

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = title
    ? `${title} | ${Bio.name}`
    : `${Bio.name} - Full Stack Developer | MERN Stack Specialist`;
  const siteDescription = description || 
    `Professional Full Stack Developer and MERN Stack specialist from Pakistan. Expert in React, Node.js, MongoDB, Express.js, Next.js, TypeScript, and React Native. 4+ years of experience building scalable web and mobile applications.`;
  const siteKeywords =
    keywords ||
    "Jawad Ullah, jawad ullah, jawad programmer, jawad developer, full stack developer, MERN stack developer, React developer, Node.js developer, web developer Pakistan, programmer Lahore, JavaScript developer, MongoDB expert, Express.js developer, frontend developer, backend developer, software engineer, web application developer, portfolio, jawad ullah portfolio, thecyberjawad, developer lahore, programmer pakistan, React.js developer, Next.js developer, TypeScript developer, web development Pakistan";
  const siteImage =
    image || Bio.image || `${typeof window !== 'undefined' ? window.location.origin : 'https://jawad-ullah.vercel.app'}/HeroImage.jpg`;
  const siteUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://jawad-ullah.vercel.app');
  const siteName = `${Bio.name} - Portfolio`;
  const siteLocale = "en_US";
  const siteType = "website";

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}#person`,
    name: Bio.name,
    alternateName: ["jawad programmer", "jawad developer", "thecyberjawad"],
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
    worksFor: experiences.map(exp => ({
      "@type": "Organization",
      name: exp.company,
      jobTitle: exp.role,
    })),
    address: {
      "@type": "PostalAddress",
      addressCountry: "PK",
      addressRegion: "Punjab",
      addressLocality: "Lahore",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${Bio.name} - Full Stack Development Services`,
    image: siteImage,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    url: siteUrl,
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
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Jawad Ullah?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `${Bio.name} is a Professional Full Stack Developer and MERN Stack specialist from Pakistan. Expert in React, Node.js, MongoDB, Express.js, Next.js, TypeScript, and React Native with 4+ years of experience building scalable web and mobile applications.`,
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Jawad Ullah specialize in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I specialize in React.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, Next.js, Nest.js, and full MERN Stack development. I'm also experienced with Redux, Material UI, Tailwind CSS, and various modern web development tools.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Jawad Ullah located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I'm a full stack developer based in Lahore, Punjab, Pakistan. I work with clients globally as a remote developer.",
        },
      },
      {
        "@type": "Question",
        name: "What is a MERN Stack developer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A MERN Stack developer specializes in MongoDB (database), Express.js (backend framework), React.js (frontend library), and Node.js (runtime environment). I'm an experienced MERN Stack developer with expertise in building full-stack web applications.",
        },
      },
    ],
  };

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
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta name="author" content={Bio.name} />
      <meta name="copyright" content={Bio.name} />
      <meta name="application-name" content={siteName} />
      <link rel="canonical" href={siteUrl} />
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
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />
      <meta name="twitter:image:alt" content={`${Bio.name} - Full Stack Developer Portfolio`} />
      <meta name="twitter:creator" content="@thecyberjawad" />
      <meta name="twitter:site" content="@thecyberjawad" />
      <meta name="twitter:domain" content="jawad-ullah.vercel.app" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="geo.region" content="PK-PB" />
      <meta name="geo.placename" content="Lahore" />
      <meta name="geo.position" content="31.5204;74.3587" />
      <meta name="ICBM" content="31.5204, 74.3587" />
      <meta name="theme-color" content="#854CE6" />
      <meta name="msapplication-TileColor" content="#854CE6" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content={Bio.name} />
      <meta name="format-detection" content="telephone=no" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
      <script type="application/ld+json">
        {JSON.stringify(personStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(projectsStructuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(professionalServiceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(skillsSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
