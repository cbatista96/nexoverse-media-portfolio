/* =========================================================
   NEXOVERSE MEDIA — Interactivity
   ========================================================= */

document.documentElement.style.scrollBehavior = 'smooth';

/* ====================================================================
   i18n — Translations + Language Switcher
   ==================================================================== */
const i18n = {
  en: {
    "doc.title": "Nexoverse Media | Web Design, SEO, AI & Managed IT in Miami",
    "meta.desc": "Nexoverse Media is a Miami digital agency for web design, SEO, AIO, AI automation, digital marketing and managed IT services. Serving Miami, all USA and remote clients worldwide.",
    "og.title": "Nexoverse Media | Web Design, SEO, AI & Managed IT in Miami",
    "og.desc": "Miami-based digital agency for high-performance websites, SEO/AIO, AI automation, marketing growth plans and managed IT support across the USA and worldwide.",

    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.industries": "Industries",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "nav.cta": "Start Your Project",
    "nav.cta.mobile": "Start Your Project ?",

    "marquee.items": "Web Design · SEO · AIO Optimization · AI Automation · Digital Marketing · Managed IT · Miami · USA Remote",

    "hero.badge": "Available for projects · Miami, FL",
    "hero.title.1": "Web design, SEO",
    "hero.title.2": "<em>and AI automation</em>",
    "hero.title.3": "for <span class=\"word-3d\">Miami</span>",
    "hero.title.4": "and global brands.",
    "hero.lead": "<strong>Nexoverse Media</strong> is a Miami-based digital agency combining web development, SEO/AIO, AI automation, digital marketing and managed IT. We build <em>scalable websites, intelligent tools and growth systems</em> for businesses in Miami, across the USA and remotely worldwide.",
    "hero.cta.wa": "Message us on WhatsApp",
    "hero.cta.services": "View services",
    "hero.wa.msg": "Hi, I'd like to talk about a project with Nexoverse Media.",
    "hero.stats.1": "Reduction in client operating time",
    "hero.stats.2": "Years transforming businesses",
    "hero.stats.3": "Bots and AI agents in production",
    "hero.company.tagline": "Technology · AI · Marketing",
    "hero.company.cta": "Meet the team →",
    "hero.scroll": "scroll",

    "about.eyebrow": "Our team",
    "about.title": "Technology, creativity and strategy <br/><span class=\"ink\">focused on results.</span>",
    "about.big": "A multidisciplinary team with deep expertise in web development, process automation, artificial intelligence, digital marketing and IT infrastructure.",
    "about.copy": "We understand business and build efficient technological solutions that drive growth, streamline operations and deliver measurable results. We combine technology, creativity and strategy to build scalable, automated systems focused on return on investment.",
    "about.signature": "Nexoverse Media · Founding Team",
    "about.strengths.title": "Strengths",
    "about.strengths.1": "We understand business and build solutions that drive results.",
    "about.strengths.2": "We combine technology, automation, marketing and AI to accelerate growth.",
    "about.strengths.3": "Focused on efficiency, optimization and scalability.",
    "about.strengths.4": "Continuous learning and rapid adaptation to new technologies.",
    "about.strengths.5": "Analytical thinking and results orientation.",
    "about.strengths.6": "Proactive, organized and committed to excellence.",

    "services.eyebrow": "Services",
    "services.title": "What we build for <br/><span class=\"ink\">brands that want to scale.</span>",
    "services.subtitle": "A complete ecosystem: from product development to customer acquisition, automation and follow-up. All under one strategy.",
    "services.1.title": "Full Stack Web Development",
    "services.1.desc": "Corporate websites, e-commerce and custom platforms. React, Next.js, Node.js, Python and modern databases. Extreme optimization, technical SEO and user experiences that convert.",
    "services.1.li1": "High-performance sites and landing pages",
    "services.1.li2": "SaaS platforms and dashboards",
    "services.1.li3": "API and webhook integration",
    "services.1.li4": "MongoDB / MySQL databases",
    "services.2.title": "Automation & AI",
    "services.2.desc": "Intelligent agents with ChatGPT, Claude, Gemini and more. Bots for replies, appointments, follow-up and support. Automated flows that work 24/7 for you.",
    "services.3.title": "CRM & Marketing Automation",
    "services.3.desc": "GoHighLevel implementation and configuration. Funnels, email & SMS marketing, lead generation and end-to-end customer journey automation.",
    "services.4.title": "Digital Marketing & Paid Ads",
    "services.4.desc": "Campaigns on Meta Business Manager (Facebook · Instagram · WhatsApp), Google Ads and TikTok Ads. SEO + AIO Optimization. Strategies focused on conversions and measurable ROI.",
    "services.4.li1": "Targeted ads and high-impact creatives",
    "services.4.li2": "Sales funnels and smart remarketing",
    "services.4.li3": "Clear reporting: leads, cost per acquisition, ROI",
    "services.5.title": "IT Infrastructure",
    "services.5.desc": "Server, domain and hosting administration on GoDaddy, AWS, Vercel and Netlify. Security, monitoring and continuous web optimization.",
    "services.6.title": "Graphic Design & Branding",
    "services.6.desc": "Visual identity, ad creatives, editorial design and digital content. Photoshop, Canva and creative direction in the service of conversion.",
    "services.more": "Learn more →",
    "services.more.web": "Explore Web Design →",
    "services.more.ai": "Explore AI Automation →",
    "services.more.crm": "Explore CRM and Marketing →",
    "services.more.ads": "Explore Google Ads →",
    "nav.dd.web": "Web Design & Dev", "nav.dd.ai": "AI & Automation",
    "nav.dd.mkt": "Digital Marketing", "nav.dd.seo": "SEO & AIO",
    "nav.dd.gads": "Google Ads", "nav.dd.social": "Social Media Marketing",
    "nav.dd.mgmt": "Social Management", "nav.dd.ecom": "E-Commerce",

    "pricing.eyebrow": "Website pricing",
    "pricing.title": "Professional web solutions <br/><span class=\"ink\">for every growth stage.</span>",
    "pricing.subtitle": "Clear fixed-price ranges for landing pages, custom business websites and advanced e-commerce builds. Every package is responsive, performance-focused and built with SEO foundations from day one.",
    "pricing.features": "Features",
    "pricing.basic": "Basic",
    "pricing.standard": "Standard",
    "pricing.advanced": "Advanced",
    "pricing.fixed": "Fixed price",
    "pricing.f1": "Basic website or landing page",
    "pricing.f2": "Custom WordPress website",
    "pricing.f3": "Large-scale e-commerce website",
    "pricing.f4": "Custom web design",
    "pricing.f5": "100% responsive design",
    "pricing.f6": "Basic SEO optimization",
    "pricing.f7": "Advanced SEO and AIO optimization",
    "pricing.f8": "Speed optimization",
    "pricing.f9": "Technical support",
    "pricing.f10": "Basic training for management",
    "pricing.support.basic": "15 days",
    "pricing.support.standard": "30 days",
    "pricing.support.advanced": "60 days",

    "maintenance.eyebrow": "Maintenance + SEO",
    "maintenance.title": "Monthly growth plans that keep <br/><span class=\"ink\">your website visible and healthy.</span>",
    "maintenance.subtitle": "Website maintenance, SEO, Google Business Profile activity, content production, backlinks and reporting for brands that want consistent visibility in Google, Bing and AI-assisted search.",
    "maintenance.month": "/month",
    "maintenance.popular": "Most popular",
    "maintenance.cta.details": "View details",
    "maintenance.cta.talk": "Let's talk",
    "maintenance.basic.cta": "View Basic SEO Plan",
    "maintenance.growth.cta": "Talk About Growth Plan",
    "maintenance.custom.cta": "View Custom SEO Plan",
    "maintenance.basic.title": "Basic <span>SEO Plan</span>",
    "maintenance.basic.desc": "Ideal to start positioning your business online.",
    "maintenance.basic.wa": "Hi, I want details about the Basic SEO maintenance plan.",
    "maintenance.basic.1": "Initial SEO audit",
    "maintenance.basic.2": "Plugin and SEO updates",
    "maintenance.basic.3": "On-page SEO optimization",
    "maintenance.basic.4": "2 blog articles per month",
    "maintenance.basic.5": "4 Google Business Profile posts per month",
    "maintenance.basic.6": "Advanced keyword research",
    "maintenance.growth.title": "Growth <span>Marketing Plan</span>",
    "maintenance.growth.desc": "The essentials to grow your online presence.",
    "maintenance.growth.wa": "Hi, I want to talk about the Growth Marketing maintenance plan.",
    "maintenance.growth.1": "Everything in the Basic Plan",
    "maintenance.growth.2": "Web hosting included ($40/month value)",
    "maintenance.growth.3": "10 blog articles per month",
    "maintenance.growth.4": "8 GBP posts per month",
    "maintenance.growth.5": "Basic backlink building",
    "maintenance.growth.6": "Local citations",
    "maintenance.growth.7": "Monthly progress reports",
    "maintenance.growth.8": "Discount on AI functions",
    "maintenance.custom.title": "Custom <span>Plan</span>",
    "maintenance.custom.desc": "Advanced strategies for larger-scale results.",
    "maintenance.custom.wa": "Hi, I want details about a custom SEO, website maintenance and marketing plan.",
    "maintenance.custom.1": "Everything in the Growth Plan",
    "maintenance.custom.2": "Web hosting included ($40/month value)",
    "maintenance.custom.3": "Advanced backlink building",
    "maintenance.custom.4": "Local SEO heat maps",
    "maintenance.custom.5": "Advanced GBP management",
    "maintenance.custom.6": "Custom landing pages",
    "maintenance.custom.7": "And much more",

    "industries.eyebrow": "Managed IT by sector",
    "industries.title": "IT services adapted to <br/><span class=\"ink\">the way your industry works.</span>",
    "industries.subtitle": "We support local Miami teams and remote organizations across the USA with managed IT, cloud tools, website care, automation, security basics and reliable technical support.",
    "industries.health.title": "Healthcare",
    "industries.health.desc": "IT services for medical practices, clinics and pharmaceutical businesses.",
    "industries.law.title": "Law firms",
    "industries.law.desc": "IT services for solo attorneys and multi-location legal offices.",
    "industries.finance.title": "Finance",
    "industries.finance.desc": "IT support for CPAs, financial firms and investment businesses.",
    "industries.construction.title": "Construction",
    "industries.construction.desc": "IT services for real estate companies, builders and contractors.",
    "industries.distribution.title": "Distribution / Wholesale",
    "industries.distribution.desc": "IT support and workflow solutions for distribution and wholesale operations.",
    "industries.retail.title": "Retail",
    "industries.retail.desc": "Managed IT, website care and digital systems for retail stores.",
    "industries.nonprofit.title": "Nonprofits",
    "industries.nonprofit.desc": "IT support for nonprofits in education, arts, community work and more.",
    "industries.tech.title": "IT companies",
    "industries.tech.desc": "Support and staffing-oriented technology solutions for IT teams.",
    "industries.small.title": "Small businesses",
    "industries.small.desc": "IT support and web services for small businesses with one or multiple locations.",
    "search.title": "Built for Google, Bing and AI search visibility",
    "search.desc": "We structure every page with crawlable content, local Miami service signals, schema markup, fast-loading responsive layouts, keyword-focused sections and clear service-area language for Miami, Florida, the United States and remote international clients.",
    "search.1": "Local SEO for Miami and Florida searches",
    "search.2": "AIO-ready service descriptions for AI answer engines",
    "search.3": "Technical SEO, sitemap, robots.txt and structured data",
    "search.4": "Performance, mobile usability and conversion-focused copy",

    "skills.eyebrow": "Key skills",
    "skills.title": "Technical stack and <br/><span class=\"ink\">strategic capabilities.</span>",
    "skills.1.title": "Development & Programming",
    "skills.2.title": "Automation & AI",
    "skills.3.title": "CRM & Marketing Automation",
    "skills.4.title": "Digital Marketing",
    "skills.5.title": "Infrastructure & Tools",
    "skills.6.title": "Design & Creativity",
    "skills.tag.aiAgents": "AI Agents",
    "skills.tag.bots": "Conversational Bots",
    "skills.tag.aiFlows": "AI Flows",
    "skills.tag.hosting": "Domains & Hosting",
    "skills.tag.security": "Web Security",
    "skills.tag.graphic": "Graphic Design",
    "skills.tag.adCreative": "Ad Creatives",

    "exp.eyebrow": "Professional experience",
    "exp.title": "A career built <br/><span class=\"ink\">on real projects.</span>",
    "exp.1.title": "Axios Natural Health Centers",
    "exp.1.role": "IT Specialist · Technology Manager",
    "exp.1.loc": "Miami, FL",
    "exp.1.b1": "Infrastructure, server and website administration.",
    "exp.1.b2": "CRM configuration, administration and automation.",
    "exp.1.b3": "Implementation of AI, bots and intelligent tools.",
    "exp.1.b4": "Digital marketing campaign management and automation.",
    "exp.1.b5": "Domain, hosting and cloud platform management.",
    "exp.1.b6": "General technical support and internal system optimization.",
    "exp.1.hl": "Key achievements",
    "exp.1.h1": "CRM automation that improved patient and client follow-up.",
    "exp.1.h2": "Digital solutions that increased operational efficiency.",
    "exp.1.h3": "Optimized campaigns with greater reach and conversion.",
    "exp.1.h4": "AI and automation integrated into business organization.",
    "exp.2.title": "UniMás Credit Repair",
    "exp.2.role": "Developer & Automation Specialist",
    "exp.2.loc": "USA",
    "exp.2.b1": "Development of internal tools for process automation.",
    "exp.2.b2": "Implementation of CRM systems and automated flows.",
    "exp.2.b3": "API and digital platform integration for productivity.",
    "exp.2.b4": "Customer follow-up automation and lead generation.",
    "exp.2.hl": "Key achievements",
    "exp.2.h1": "40% increase in internal process automation.",
    "exp.2.h2": "Better client tracking and management with in-house tools.",
    "exp.2.h3": "Automated workflows that boosted team productivity.",
    "exp.3.title": "Financial Technology Institution",
    "exp.3.role": "Web Programmer",
    "exp.3.loc": "Remote systems work",
    "exp.3.b1": "Development and maintenance of internal web applications.",
    "exp.3.b2": "Optimization of digital systems and administrative processes.",
    "exp.3.b3": "Participation in technological projects oriented to banking processes.",
    "exp.3.b4": "Technical support and continuous improvements to internal platforms.",

    "contact.eyebrow": "Direct contact",
    "contact.title": "Ready to <span class=\"ink\">transform</span> your business?",
    "contact.subtitle": "Tell us about your project. We'll get back to you personally — no long forms, no middlemen.",
    "contact.wa.label": "WhatsApp · Instant reply",
    "contact.wa.cta": "Chat with us now →",
    "contact.wa.msg": "Hi, I saw your portfolio and would like to talk about a project.",
    "contact.mail.label": "Professional email",
    "contact.mail.cta": "Send us the details →",
    "contact.mail.subject": "Project - Nexoverse Media",
    "contact.mail.body": "Hi, I'm writing because...",
    "contact.phone.label": "Direct call",
    "contact.phone.cta": "Call Nexoverse Media ?",
    "contact.loc.label": "Headquarters",
    "contact.loc.value": "Miami, Florida",
    "contact.loc.sub": "Headquarters in Miami, Florida · Global remote work",
    "contact.ribbon": "TECHNOLOGY + AUTOMATION + AI + MARKETING = RESULTS",
    "contact.ctaTitle": "We turn ideas into systems that grow your business.",
    "contact.ctaButton": "Start my project",
    "contact.ctaMsg": "Hi, I want to start a project with Nexoverse Media.",

    "footer.tagline": "Technology, automation and artificial intelligence at the service of your brand.",
    "footer.contact.title": "Contact",
    "footer.contact.wa": "Direct WhatsApp",
    "footer.nav.title": "Navigation",
    "footer.services.title": "Services",
    "footer.services.1": "Web Development",
    "footer.services.2": "Automation & AI",
    "footer.services.3": "CRM & Marketing",
    "footer.services.4": "Branding & Design",
    "footer.built": "Handcrafted · Miami, FL"
  },
  es: {
    "doc.title": "Nexoverse Media | Diseño Web, SEO, IA & TI en Miami",
    "meta.desc": "Nexoverse Media es una agencia digital en Miami para diseño web, SEO, AIO, automatización con IA, marketing digital y servicios de TI gestionados. Atendemos Miami, todo USA y clientes remotos en el mundo.",
    "og.title": "Nexoverse Media | Diseño Web, SEO, IA & TI en Miami",
    "og.desc": "Agencia digital en Miami para sitios web de alto rendimiento, SEO/AIO, automatización con IA, planes de marketing y soporte TI en USA y remoto global.",

    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.services": "Servicios",
    "nav.pricing": "Precios",
    "nav.industries": "Sectores",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "nav.cta": "Iniciar proyecto",
    "nav.cta.mobile": "Iniciar proyecto ?",

    "marquee.items": "Diseño Web · SEO · Optimización AIO · Automatización IA · Marketing Digital · TI Gestionado · Miami · USA Remoto",

    "hero.badge": "Disponible para proyectos · Miami, FL",
    "hero.title.1": "Diseño web, SEO",
    "hero.title.2": "<em>y automatización con IA</em>",
    "hero.title.3": "para <span class=\"word-3d\">Miami</span>",
    "hero.title.4": "y marcas globales.",
    "hero.lead": "<strong>Nexoverse Media</strong> es una agencia digital en Miami que combina desarrollo web, SEO/AIO, automatización con IA, marketing digital y TI gestionado. Construimos <em>sitios escalables, herramientas inteligentes y sistemas de crecimiento</em> para negocios en Miami, todo USA y clientes remotos en el mundo.",
    "hero.cta.wa": "Escríbenos por WhatsApp",
    "hero.cta.services": "Ver servicios",
    "hero.wa.msg": "Hola, quisiera hablar sobre un proyecto con Nexoverse Media.",
    "hero.stats.1": "Reducción de tiempo operativo en clientes",
    "hero.stats.2": "Años transformando negocios",
    "hero.stats.3": "Bots y agentes IA en producción",
    "hero.company.tagline": "Tecnología · IA · Marketing",
    "hero.company.cta": "Conoce al equipo →",
    "hero.scroll": "scroll",

    "about.eyebrow": "Nuestro equipo",
    "about.title": "Tecnología, creatividad y estrategia <br/><span class=\"ink\">enfocadas en resultados.</span>",
    "about.big": "Un equipo multidisciplinario con amplia experiencia en desarrollo web, automatización de procesos, inteligencia artificial, marketing digital e infraestructura IT.",
    "about.copy": "Entendemos el negocio y creamos soluciones tecnológicas eficientes que impulsan el crecimiento, optimizan operaciones y generan resultados medibles. Combinamos tecnología, creatividad y estrategia para construir sistemas escalables, automatizados y enfocados en retorno de inversión.",
    "about.signature": "Nexoverse Media · Equipo Fundador",
    "about.strengths.title": "Fortalezas",
    "about.strengths.1": "Entendemos el negocio y creamos soluciones que generan resultados.",
    "about.strengths.2": "Combinamos tecnología, automatización, marketing e IA para acelerar el crecimiento.",
    "about.strengths.3": "Enfocado en eficiencia, optimización y escalabilidad.",
    "about.strengths.4": "Aprendizaje continuo y adaptación rápida a nuevas tecnologías.",
    "about.strengths.5": "Pensamiento analítico y orientación a resultados.",
    "about.strengths.6": "Proactivo, organizado y comprometido con la excelencia.",

    "services.eyebrow": "Servicios",
    "services.title": "Lo que construimos para <br/><span class=\"ink\">marcas que quieren escalar.</span>",
    "services.subtitle": "Un ecosistema completo: desde el desarrollo del producto hasta la captación, automatización y seguimiento del cliente. Todo bajo una misma estrategia.",
    "services.1.title": "Desarrollo Web Full Stack",
    "services.1.desc": "Webs corporativas, e-commerce y plataformas a medida. React, Next.js, Node.js, Python y bases de datos modernas. Optimización extrema, SEO técnico y experiencias de usuario que convierten.",
    "services.1.li1": "Sitios y landing pages de alto rendimiento",
    "services.1.li2": "Plataformas SaaS y dashboards",
    "services.1.li3": "Integración de APIs y webhooks",
    "services.1.li4": "Bases de datos MongoDB / MySQL",
    "services.2.title": "Automatización & IA",
    "services.2.desc": "Agentes inteligentes con ChatGPT, Claude, Gemini y más. Bots para respuestas, citas, seguimiento y soporte. Flujos automatizados que trabajan 24/7 por ti.",
    "services.3.title": "CRM & Marketing Automation",
    "services.3.desc": "Implementación y configuración de GoHighLevel. Funnels, email & SMS marketing, lead generation y automatización del customer journey de punta a punta.",
    "services.4.title": "Marketing Digital & Pauta Publicitaria",
    "services.4.desc": "Campañas en Meta Business Manager (Facebook · Instagram · WhatsApp), Google Ads y TikTok Ads. SEO + AIO Optimization. Estrategias orientadas a conversiones y retorno medible.",
    "services.4.li1": "Pauta segmentada y creatividades de alto impacto",
    "services.4.li2": "Embudos de venta y remarketing inteligente",
    "services.4.li3": "Reporting claro: leads, costo por adquisición, ROI",
    "services.5.title": "Infraestructura IT",
    "services.5.desc": "Administración de servidores, dominios y hosting en GoDaddy, AWS, Vercel y Netlify. Seguridad, monitoreo y optimización web continua.",
    "services.6.title": "Diseño Gráfico & Branding",
    "services.6.desc": "Identidad visual, creatividades para ads, diseño editorial y contenido digital. Photoshop, Canva y dirección creativa al servicio de la conversión.",
    "services.more": "Ver más →",
    "services.more.web": "Ver Diseño Web →",
    "services.more.ai": "Ver Automatización IA →",
    "services.more.crm": "Ver CRM y Marketing →",
    "services.more.ads": "Ver Google Ads →",
    "nav.dd.web": "Diseño Web & Dev", "nav.dd.ai": "IA & Automatización",
    "nav.dd.mkt": "Marketing Digital", "nav.dd.seo": "SEO & AIO",
    "nav.dd.gads": "Google Ads", "nav.dd.social": "Marketing en Redes",
    "nav.dd.mgmt": "Gestión de Redes", "nav.dd.ecom": "E-Commerce",

    "pricing.eyebrow": "Precios web",
    "pricing.title": "Soluciones web profesionales <br/><span class=\"ink\">para cada etapa de crecimiento.</span>",
    "pricing.subtitle": "Rangos claros de precio fijo para landing pages, sitios corporativos personalizados y e-commerce avanzado. Cada paquete es responsive, rápido y construido con bases SEO desde el primer día.",
    "pricing.features": "Características",
    "pricing.basic": "Básico",
    "pricing.standard": "Estándar",
    "pricing.advanced": "Avanzado",
    "pricing.fixed": "Precio fijo",
    "pricing.f1": "Sitio web básico o landing page",
    "pricing.f2": "Sitio WordPress personalizado",
    "pricing.f3": "Sitio web de e-commerce a gran escala",
    "pricing.f4": "Diseño web personalizado",
    "pricing.f5": "Diseño 100% responsive",
    "pricing.f6": "Optimización SEO básica",
    "pricing.f7": "Optimización SEO y AIO avanzada",
    "pricing.f8": "Optimización de velocidad",
    "pricing.f9": "Soporte técnico",
    "pricing.f10": "Capacitación básica para gestión",
    "pricing.support.basic": "15 días",
    "pricing.support.standard": "30 días",
    "pricing.support.advanced": "60 días",

    "maintenance.eyebrow": "Mantenimiento + SEO",
    "maintenance.title": "Planes mensuales para mantener <br/><span class=\"ink\">tu web visible y saludable.</span>",
    "maintenance.subtitle": "Mantenimiento web, SEO, actividad en Google Business Profile, contenido, backlinks y reportes para marcas que quieren visibilidad constante en Google, Bing y búsquedas asistidas por IA.",
    "maintenance.month": "/mes",
    "maintenance.popular": "Más popular",
    "maintenance.cta.details": "Ver detalles",
    "maintenance.cta.talk": "Hablemos",
    "maintenance.basic.cta": "Ver Plan SEO B?sico",
    "maintenance.growth.cta": "Hablemos del Plan Crecimiento",
    "maintenance.custom.cta": "Ver Plan SEO Personalizado",
    "maintenance.basic.title": "Plan SEO <span>Básico</span>",
    "maintenance.basic.desc": "Ideal para comenzar a posicionar tu negocio online.",
    "maintenance.basic.wa": "Hola, quiero detalles del plan de mantenimiento SEO Básico.",
    "maintenance.basic.1": "Auditoría SEO inicial",
    "maintenance.basic.2": "Actualizaciones de plugins y SEO",
    "maintenance.basic.3": "Optimización SEO en la página",
    "maintenance.basic.4": "2 artículos de blog por mes",
    "maintenance.basic.5": "4 publicaciones GBP por mes",
    "maintenance.basic.6": "Investigación avanzada de palabras clave",
    "maintenance.growth.title": "Plan de Marketing <span>en Crecimiento</span>",
    "maintenance.growth.desc": "Todo lo esencial para hacer crecer tu presencia online.",
    "maintenance.growth.wa": "Hola, quiero hablar sobre el Plan de Marketing en Crecimiento.",
    "maintenance.growth.1": "Todo lo incluido en el Plan Básico",
    "maintenance.growth.2": "Hosting web incluido ($40/mes valor)",
    "maintenance.growth.3": "10 artículos de blog por mes",
    "maintenance.growth.4": "8 publicaciones GBP por mes",
    "maintenance.growth.5": "Construcción básica de backlinks",
    "maintenance.growth.6": "Citas locales",
    "maintenance.growth.7": "Reportes mensuales de progreso",
    "maintenance.growth.8": "Descuento en funciones de IA",
    "maintenance.custom.title": "Plan <span>Personalizado</span>",
    "maintenance.custom.desc": "Estrategias avanzadas para resultados a gran escala.",
    "maintenance.custom.wa": "Hola, quiero detalles de un plan personalizado de SEO, mantenimiento web y marketing.",
    "maintenance.custom.1": "Todo lo incluido en el Plan Crecimiento",
    "maintenance.custom.2": "Hosting web incluido ($40/mes valor)",
    "maintenance.custom.3": "Construcción avanzada de backlinks",
    "maintenance.custom.4": "Mapas de calor SEO locales",
    "maintenance.custom.5": "Gestión avanzada de GBP",
    "maintenance.custom.6": "Páginas de aterrizaje personalizadas",
    "maintenance.custom.7": "Y mucho más",

    "industries.eyebrow": "TI gestionado por sector",
    "industries.title": "Servicios de TI adaptados a <br/><span class=\"ink\">la forma en que trabaja tu industria.</span>",
    "industries.subtitle": "Apoyamos equipos locales en Miami y organizaciones remotas en todo USA con TI gestionado, herramientas cloud, cuidado web, automatización, seguridad básica y soporte técnico confiable.",
    "industries.health.title": "Sanidad",
    "industries.health.desc": "Servicios informáticos para consultas médicas, clínicas y empresas farmacéuticas.",
    "industries.law.title": "Despachos de abogados",
    "industries.law.desc": "Servicios de TI para abogados independientes y despachos con múltiples ubicaciones.",
    "industries.finance.title": "Finanzas",
    "industries.finance.desc": "Soporte TI para CPAs, firmas financieras y empresas de inversión.",
    "industries.construction.title": "Construcción",
    "industries.construction.desc": "Servicios de TI para inmobiliarias, constructoras y contratistas.",
    "industries.distribution.title": "Distribución / Mayorista",
    "industries.distribution.desc": "Soporte y soluciones de TI para distribución y operaciones mayoristas.",
    "industries.retail.title": "Comercio minorista",
    "industries.retail.desc": "TI gestionado, cuidado web y sistemas digitales para tiendas minoristas.",
    "industries.nonprofit.title": "Organizaciones sin ánimo de lucro",
    "industries.nonprofit.desc": "Soporte TI para organizaciones de educación, arte, comunidad y más.",
    "industries.tech.title": "Empresas de TI",
    "industries.tech.desc": "Soporte y soluciones tecnológicas orientadas a equipos de la industria tecnológica.",
    "industries.small.title": "Pequeñas empresas",
    "industries.small.desc": "Soporte TI y servicios web para pequeñas empresas con una o varias ubicaciones.",
    "search.title": "Construido para visibilidad en Google, Bing y búsquedas con IA",
    "search.desc": "Estructuramos cada página con contenido rastreable, señales locales de Miami, schema markup, diseño responsive rápido, secciones por palabras clave y lenguaje claro de alcance para Miami, Florida, Estados Unidos y clientes remotos internacionales.",
    "search.1": "SEO local para búsquedas en Miami y Florida",
    "search.2": "Descripciones AIO listas para motores de respuesta con IA",
    "search.3": "SEO técnico, sitemap, robots.txt y datos estructurados",
    "search.4": "Rendimiento, usabilidad móvil y copy orientado a conversión",

    "skills.eyebrow": "Habilidades clave",
    "skills.title": "Stack técnico y <br/><span class=\"ink\">capacidades estratégicas.</span>",
    "skills.1.title": "Desarrollo & Programación",
    "skills.2.title": "Automatización & IA",
    "skills.3.title": "CRM & Marketing Automation",
    "skills.4.title": "Marketing Digital",
    "skills.5.title": "Infraestructura & Herramientas",
    "skills.6.title": "Diseño & Creatividad",
    "skills.tag.aiAgents": "Agentes IA",
    "skills.tag.bots": "Bots conversacionales",
    "skills.tag.aiFlows": "Flujos IA",
    "skills.tag.hosting": "Dominios & Hosting",
    "skills.tag.security": "Seguridad Web",
    "skills.tag.graphic": "Diseño gráfico",
    "skills.tag.adCreative": "Creatividades Ads",

    "exp.eyebrow": "Experiencia profesional",
    "exp.title": "Trayectoria construida <br/><span class=\"ink\">en proyectos reales.</span>",
    "exp.1.title": "Axios Natural Health Centers",
    "exp.1.role": "IT Specialist · Technology Manager",
    "exp.1.loc": "Miami, FL",
    "exp.1.b1": "Administración de infraestructura, servidores y sitios web.",
    "exp.1.b2": "Configuración y administración de CRM y automatizaciones.",
    "exp.1.b3": "Implementación de IA, bots y herramientas inteligentes.",
    "exp.1.b4": "Gestión de campañas de marketing digital y automatizaciones.",
    "exp.1.b5": "Manejo de dominios, hosting y plataformas cloud.",
    "exp.1.b6": "Soporte técnico general y optimización de sistemas internos.",
    "exp.1.hl": "Logros destacados",
    "exp.1.h1": "Automatizaciones CRM que mejoraron seguimiento de pacientes y clientes.",
    "exp.1.h2": "Soluciones digitales que incrementaron eficiencia operativa.",
    "exp.1.h3": "Campañas optimizadas con mayor alcance y conversión.",
    "exp.1.h4": "IA y automatizaciones integradas a la organización del negocio.",
    "exp.2.title": "UniMás Credit Repair",
    "exp.2.role": "Desarrollador & Especialista en Automatización",
    "exp.2.loc": "USA",
    "exp.2.b1": "Desarrollo de herramientas internas para automatización de procesos.",
    "exp.2.b2": "Implementación de sistemas CRM y flujos automatizados.",
    "exp.2.b3": "Integración de APIs y plataformas digitales para productividad.",
    "exp.2.b4": "Automatización de seguimiento de clientes y generación de leads.",
    "exp.2.hl": "Logros destacados",
    "exp.2.h1": "Incremento del 40% en automatización de procesos internos.",
    "exp.2.h2": "Mejor seguimiento y administración de clientes con herramientas internas.",
    "exp.2.h3": "Flujos de trabajo automatizados que elevaron la productividad del equipo.",
    "exp.3.title": "Institución de tecnología financiera",
    "exp.3.role": "Programador Web",
    "exp.3.loc": "Trabajo remoto en sistemas",
    "exp.3.b1": "Desarrollo y mantenimiento de aplicaciones web internas.",
    "exp.3.b2": "Optimización de sistemas digitales y procesos administrativos.",
    "exp.3.b3": "Participación en proyectos tecnológicos orientados a procesos bancarios.",
    "exp.3.b4": "Soporte técnico y mejoras continuas de plataformas internas.",

    "contact.eyebrow": "Contacto directo",
    "contact.title": "¿Listo para <span class=\"ink\">transformar</span> tu negocio?",
    "contact.subtitle": "Cuéntanos sobre tu proyecto. Te respondemos personalmente — sin formularios largos ni intermediarios.",
    "contact.wa.label": "WhatsApp · Respuesta inmediata",
    "contact.wa.cta": "Chatea con nosotros ahora →",
    "contact.wa.msg": "Hola, vi el portafolio de Nexoverse Media y me gustaría hablar de un proyecto.",
    "contact.mail.label": "Email profesional",
    "contact.mail.cta": "Envíanos los detalles →",
    "contact.mail.subject": "Proyecto - Nexoverse Media",
    "contact.mail.body": "Hola, les escribo porque...",
    "contact.phone.label": "Llamada directa",
    "contact.phone.cta": "Hablemos por teléfono →",
    "contact.loc.label": "Sede",
    "contact.loc.value": "Miami, Florida",
    "contact.loc.sub": "Sede en Miami, Florida · Trabajo remoto global",
    "contact.ribbon": "TECNOLOGÍA + AUTOMATIZACIÓN + IA + MARKETING = RESULTADOS",
    "contact.ctaTitle": "Transformamos ideas en sistemas que hacen crecer tu negocio.",
    "contact.ctaButton": "Empezar mi proyecto",
    "contact.ctaMsg": "Hola, quiero empezar un proyecto con Nexoverse Media.",

    "footer.tagline": "Tecnología, automatización e inteligencia artificial al servicio de tu marca.",
    "footer.contact.title": "Contacto",
    "footer.contact.wa": "WhatsApp directo",
    "footer.nav.title": "Navegación",
    "footer.services.title": "Servicios",
    "footer.services.1": "Desarrollo Web",
    "footer.services.2": "Automatización & IA",
    "footer.services.3": "CRM & Marketing",
    "footer.services.4": "Branding & Diseño",
    "footer.built": "Diseñado y construido a mano · Miami, FL"
  }
};

function detectLang() {
  try {
    const stored = localStorage.getItem('nv_lang');
    if (stored === 'es' || stored === 'en') return stored;
  } catch {}
  const b = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return b.startsWith('es') ? 'es' : 'en';
}

function applyTranslations(lang) {
  const t = i18n[lang] || i18n.en;
  document.documentElement.lang = lang;

  /* Plain text nodes */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });

  /* HTML content */
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  /* WhatsApp links — append translated message to href */
  document.querySelectorAll('[data-wa]').forEach(el => {
    const key = el.dataset.wa;
    if (t[key] === undefined) return;
    const base = (el.getAttribute('href') || '').split('?')[0];
    el.setAttribute('href', `${base}?text=${encodeURIComponent(t[key])}`);
  });

  /* Mail links — set subject + body */
  document.querySelectorAll('[data-mail-subject], [data-mail-body]').forEach(el => {
    const base = (el.getAttribute('href') || '').split('?')[0];
    const parts = [];
    const sk = el.dataset.mailSubject;
    const bk = el.dataset.mailBody;
    if (sk && t[sk] !== undefined) parts.push(`subject=${encodeURIComponent(t[sk])}`);
    if (bk && t[bk] !== undefined) parts.push(`body=${encodeURIComponent(t[bk])}`);
    el.setAttribute('href', parts.length ? `${base}?${parts.join('&')}` : base);
  });

  /* Marquee — build a long looping track */
  const marquee = document.getElementById('marqueeTrack');
  if (marquee && t['marquee.items']) {
    const items = t['marquee.items'].split('·').map(s => s.trim()).filter(Boolean);
    const block = items.map(item => `<span>${item}</span><span>·</span>`).join('');
    marquee.innerHTML = block + block;
  }

  /* Document title + meta tags */
  document.title = t['doc.title'] || 'Nexoverse Media';
  const md = document.querySelector('meta[name="description"]');
  if (md && t['meta.desc']) md.setAttribute('content', t['meta.desc']);
  const ot = document.querySelector('meta[property="og:title"]');
  if (ot && t['og.title']) ot.setAttribute('content', t['og.title']);
  const od = document.querySelector('meta[property="og:description"]');
  if (od && t['og.desc']) od.setAttribute('content', t['og.desc']);

  /* Update switcher active state */
  document.querySelectorAll('.langswitch__btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  try { localStorage.setItem('nv_lang', lang); } catch {}
  applyTranslations(lang);
}

/* Apply translations immediately so subsequent scripts (e.g. line-wrap) see translated text */
const __initialLang = detectLang();
applyTranslations(__initialLang);

/* Bind switcher clicks */
document.querySelectorAll('.langswitch__btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

window.addEventListener('load', triggerReveals);

/* ---------- Year ---------- */
document.getElementById('yr').textContent = new Date().getFullYear();


/* ---------- Nav Scroll ---------- */
(() => {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ---------- Mobile Menu ---------- */
(() => {
  const burger = document.getElementById('burger');
  const menu = document.getElementById('mmenu');
  const panels = document.getElementById('mmenuPanels');
  const servicesTrigger = document.getElementById('mmenuServicesTrigger');
  const backBtn = document.getElementById('mmenuBack');
  if (!burger) return;

  const close = () => {
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.style.overflow = '';
    setTimeout(() => panels && panels.classList.remove('is-sub'), 350);
  };

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-open');
    menu.classList.toggle('is-open');
    document.body.style.overflow = menu.classList.contains('is-open') ? 'hidden' : '';
  });

  if (servicesTrigger && panels) {
    servicesTrigger.addEventListener('click', () => panels.classList.add('is-sub'));
  }
  if (backBtn && panels) {
    backBtn.addEventListener('click', () => panels.classList.remove('is-sub'));
  }

  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', close));
})();

/* ---------- Scroll Reveal ---------- */
function triggerReveals() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      e.target.classList.toggle('is-in', e.isIntersecting);
    });
  }, { threshold: 0.12 });

  /* Static hero/badge reveals already in HTML */
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  /* Section wrappers — fade up */
  document.querySelectorAll('.section').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 4) * 50 + 'ms';
    io.observe(el);
  });

  /* Bento service cards — alternate left / right */
  document.querySelectorAll('.bento__card').forEach((el, i) => {
    el.classList.add('reveal', i % 2 === 0 ? 'reveal--left' : 'reveal--right');
    el.style.transitionDelay = (i % 6) * 70 + 'ms';
    io.observe(el);
  });

  document.querySelectorAll('.price-card, .plan-card, .industry-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 6) * 60 + 'ms';
    io.observe(el);
  });

  /* Skill cards — alternate left / right */
  document.querySelectorAll('.skillcard').forEach((el, i) => {
    el.classList.add('reveal', i % 2 === 0 ? 'reveal--left' : 'reveal--right');
    el.style.transitionDelay = (i % 6) * 70 + 'ms';
    io.observe(el);
  });

  /* Timeline items — slide from left */
  document.querySelectorAll('.timeline__item').forEach((el, i) => {
    el.classList.add('reveal', 'reveal--left');
    el.style.transitionDelay = i * 100 + 'ms';
    io.observe(el);
  });

  /* Contact cards — alternate */
  document.querySelectorAll('.ctcard').forEach((el, i) => {
    el.classList.add('reveal', i % 2 === 0 ? 'reveal--left' : 'reveal--right');
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    io.observe(el);
  });

  /* About columns */
  document.querySelector('.about__copy') &&
    document.querySelector('.about__copy').classList.add('reveal', 'reveal--left');
  document.querySelector('.about__fortalezas') &&
    document.querySelector('.about__fortalezas').classList.add('reveal', 'reveal--right');
  document.querySelectorAll('.about__copy, .about__fortalezas').forEach(el => io.observe(el));
}

/* ---------- Counters ---------- */
(() => {
  const counters = document.querySelectorAll('.counter');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.to;
      let cur = 0;
      const dur = 1400;
      const start = performance.now();
      const tick = (t) => {
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        cur = Math.floor(target * eased);
        el.textContent = cur;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => io.observe(c));
})();

/* ---------- Tilt 3D ---------- */
(() => {
  const els = document.querySelectorAll('[data-tilt]');
  els.forEach(el => {
    const max = 12;
    let raf = null;
    let tx = 0, ty = 0;

    const update = () => {
      el.style.transform = `perspective(900px) rotateX(${ty}deg) rotateY(${tx}deg) scale3d(1.03,1.03,1.03)`;
      raf = null;
    };

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0ms';
    });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      tx = x * max;
      ty = -y * max;

      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);

      if (!raf) raf = requestAnimationFrame(update);
    });
    el.addEventListener('mouseleave', () => {
      tx = 0; ty = 0;
      el.style.transition = 'transform .5s var(--ease)';
      el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
})();

/* ---------- Magnetic Buttons ---------- */
(() => {
  const els = document.querySelectorAll('.magnetic');
  els.forEach(el => {
    const strength = 18;
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ---------- Smooth Anchor Scroll ---------- */
(() => {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length <= 1) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

/* ---------- Hero Title Line Reveal ---------- */
(() => {
  const lines = document.querySelectorAll('.hero__title .line');
  lines.forEach((line, i) => {
    const inner = document.createElement('span');
    inner.style.display = 'inline-block';
    inner.style.transform = 'translateY(110%)';
    inner.style.transition = `transform 1s var(--ease) ${0.6 + i * 0.1}s`;

    // Migrate i18n attrs to inner span so future translations target it
    if (line.dataset.i18n) { inner.dataset.i18n = line.dataset.i18n; delete line.dataset.i18n; }
    if (line.dataset.i18nHtml) { inner.dataset.i18nHtml = line.dataset.i18nHtml; delete line.dataset.i18nHtml; }

    while (line.firstChild) inner.appendChild(line.firstChild);
    line.appendChild(inner);
    setTimeout(() => { inner.style.transform = 'translateY(0)'; }, 100);
  });
})();

/* ---------- Portrait Fallback if Image Missing ---------- */
(() => {
  const img = document.getElementById('portraitImg');
  if (!img) return;
  const test = new Image();
  test.onerror = () => img.classList.add('is-fallback');
  test.src = 'assets/carlos.jpg';
})();

/* ---------- Portrait Parallax on Mouse ---------- */
(() => {
  const portrait = document.querySelector('.portrait__frame');
  const img = document.getElementById('portraitImg');
  const chips = document.querySelectorAll('.chip');
  if (!portrait || !img) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    img.style.transform = `scale(1.05) translate(${x * -8}px, ${y * -8}px)`;
    chips.forEach((c, i) => {
      const f = (i + 1) * 4;
      c.style.transform = `translate(${x * f}px, ${y * f}px)`;
    });
  });
})();
