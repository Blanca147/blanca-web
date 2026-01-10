import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.gallery': 'Gallery',
    
    // Home Page - Hero
    'home.hero.badge': 'Trusted Property Services',
    'home.hero.title.line1': 'Professional Property',
    'home.hero.title.line2': 'Services You Can Trust',
    'home.hero.subtitle': 'Independent property services professional providing thorough inspections, detailed documentation, and expert guidance for Illinois homeowners.',
    'home.hero.cta.primary': 'Schedule Consultation',
    'home.hero.cta.secondary': 'Explore Services',
    'home.hero.trust.title': '500+ Satisfied Clients',
    'home.hero.trust.subtitle': 'Trusted by Illinois homeowners',
    'home.hero.card1.title': 'Verified Professional',
    'home.hero.card1.subtitle': 'Independent & Trusted',
    'home.hero.card2.text': 'Excellent Reviews',
    
    // Home Page - Stats
    'home.stats.inspections': 'Inspections Completed',
    'home.stats.satisfaction': 'Client Satisfaction',
    'home.stats.experience': 'Years Experience',
    'home.stats.response': 'Response Time',
    
    // Home Page - Intro
    'home.intro.badge': 'About My Services',
    'home.intro.title': 'Your Partner in Property Care',
    'home.intro.text': 'As an independent property services professional, I provide homeowners with the detailed information and guidance they need to make informed decisions about their properties. With a focus on thorough documentation and clear communication, I help you understand your property\'s condition.',
    'home.intro.cta': 'Learn More About Me',
    
    // Home Page - Benefits
    'home.benefits.item1': 'Comprehensive property inspections with detailed reports',
    'home.benefits.item2': 'High-quality photo and video documentation',
    'home.benefits.item3': 'Clear, honest communication throughout the process',
    'home.benefits.item4': 'Connections to trusted licensed professionals',
    
    // Home Page - Services
    'home.services.badge': 'What I Offer',
    'home.services.title': 'How I Can Help You',
    'home.services.subtitle': 'Comprehensive property services designed to give you clarity and confidence about your property\'s condition.',
    'home.services.inspection.title': 'Property Inspections',
    'home.services.inspection.desc': 'Comprehensive interior, exterior, and roof inspections to document your property\'s current condition with detailed reports.',
    'home.services.documentation.title': 'Photo & Video Documentation',
    'home.services.documentation.desc': 'Detailed visual records of property conditions, damages, and repairs for your records and future reference.',
    'home.services.guidance.title': 'Homeowner Guidance',
    'home.services.guidance.desc': 'Clear explanations and education about property conditions, maintenance needs, and recommended next steps.',
    'home.services.coordination.title': 'Project Coordination',
    'home.services.coordination.desc': 'Assistance organizing repairs and connecting you with properly licensed professionals when needed.',
    'home.services.cta': 'View All Services',
    
    // Home Page - Testimonials
    'home.testimonials.badge': 'Client Testimonials',
    'home.testimonials.title': 'What My Clients Say',
    
    // Home Page - CTA
    'home.cta.title': 'Ready to Get Started?',
    'home.cta.text': 'Contact me today to discuss your property needs and schedule a consultation. I\'m here to help you understand and care for your property.',
    'home.cta.button': 'Schedule Consultation',
    'home.cta.secondary': 'View My Process',
    
    // About Page
    'about.hero.title': 'About Blanca Garza',
    'about.hero.subtitle': 'Independent Property Services Professional',
    'about.intro.title': 'Professional Background',
    'about.intro.text': 'I am an independent property services professional dedicated to helping homeowners understand and care for their properties. With years of experience in property assessment and documentation, I provide thorough, unbiased information that empowers homeowners to make informed decisions.',
    'about.role.title': 'My Independent Role',
    'about.role.text': 'I operate as an independent professional, which means I work directly for you—the homeowner. I am not a licensed public adjuster, contractor, insurance agent, or legal representative. My role is to provide you with accurate property assessments, detailed documentation, and clear guidance so you can navigate property-related decisions with confidence.',
    'about.approach.title': 'My Approach',
    'about.approach.text': 'Every property and situation is unique. I take the time to understand your specific needs, conduct thorough inspections, and provide clear, honest assessments. My goal is to give you the information and support you need, whether you\'re dealing with property damage, planning repairs, or simply want to understand your home\'s condition better.',
    'about.legal.title': 'Important Legal Clarification',
    'about.legal.text': 'I do not hold professional licenses as a public adjuster, contractor, insurance agent, or attorney. I do not negotiate insurance claims, perform repairs, or provide legal advice. My services are limited to property assessment, documentation, education, and coordination assistance. When specialized expertise is required, I can help connect you with properly licensed professionals.',
    
    // Services Page
    'services.hero.title': 'Property Services',
    'services.hero.subtitle': 'Comprehensive support for your property needs',
    'services.inspection.title': 'Property Inspections',
    'services.inspection.desc': 'I conduct detailed inspections of your property\'s interior, exterior, and roof to document current conditions. These inspections provide you with a clear understanding of your property\'s state, including any areas of concern that may need attention. Inspections include written notes, measurements, and observations.',
    'services.documentation.title': 'Photo & Video Documentation',
    'services.documentation.desc': 'Visual documentation is essential for property records, insurance purposes, and repair planning. I provide high-quality photos and videos that clearly show property conditions, damages, and details. This documentation can be invaluable for your records and future reference.',
    'services.guidance.title': 'Homeowner Education & Guidance',
    'services.guidance.desc': 'Understanding your property\'s condition is the first step to making informed decisions. I explain findings in clear, accessible language and help you understand what different conditions mean for your property. I provide guidance on maintenance priorities and potential next steps.',
    'services.coordination.title': 'Repair & Project Coordination',
    'services.coordination.desc': 'Managing property repairs can be overwhelming. I can assist with organizing repair projects, creating scope documents, and helping you understand what work may be needed. When specialized work is required, I can help connect you with properly licensed contractors and professionals.',
    'services.referral.title': 'Professional Referrals',
    'services.referral.desc': 'When your situation requires licensed expertise—such as structural engineering, legal advice, or specialized contracting—I can help connect you with qualified professionals in those fields. I maintain relationships with trusted, licensed professionals across various specialties.',
    'services.note.title': 'Important Note',
    'services.note.text': 'All services are provided for informational and coordination purposes. I do not make guarantees about property conditions, repair outcomes, or insurance coverage. I do not negotiate insurance claims or provide legal advice.',
    
    // Process Page
    'process.hero.title': 'How I Work With You',
    'process.hero.subtitle': 'A clear, step-by-step approach to property services',
    'process.step1.title': 'Initial Consultation',
    'process.step1.desc': 'We begin with a conversation about your property situation and needs. This can be by phone, email, or in person. I\'ll ask questions to understand your concerns and explain how I can help.',
    'process.step2.title': 'Property Assessment',
    'process.step2.desc': 'I conduct a thorough on-site inspection of your property, documenting conditions through notes, photos, and videos. I examine all relevant areas and take detailed measurements as needed.',
    'process.step3.title': 'Documentation & Review',
    'process.step3.desc': 'I compile all inspection findings, photos, and videos into organized documentation. We review these materials together, and I explain what I\'ve found in clear, understandable terms.',
    'process.step4.title': 'Guidance & Next Steps',
    'process.step4.desc': 'Based on the assessment, I provide guidance on potential next steps. This may include maintenance recommendations, repair priorities, or referrals to licensed professionals for specialized work.',
    'process.step5.title': 'Ongoing Support',
    'process.step5.desc': 'I remain available to answer questions, provide additional documentation, or assist with coordinating repairs and professional services as your project moves forward.',
    'process.commitment.title': 'My Commitment to You',
    'process.commitment.text': 'Throughout this process, I maintain clear communication, provide honest assessments, and work in your best interest. I do not receive commissions from contractors or other professionals I may refer you to, ensuring my guidance remains unbiased.',
    
    // Contact Page
    'contact.hero.title': 'Get in Touch',
    'contact.hero.subtitle': 'Let\'s discuss your property needs',
    'contact.form.title': 'Contact Form',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Tell me about your property needs',
    'contact.form.submit': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.hours': 'Hours',
    'contact.info.hours.value': 'Mon - Fri: 8am - 6pm\nSat: 9am - 2pm\nSun: Closed\nEmergency inspections by appointment',
    'contact.info.location': 'Service Area',
    'contact.info.location.value': 'Illinois',
    'contact.disclaimer': 'By submitting this form, you acknowledge that no client-representative relationship is created. This is an inquiry only. Any formal service agreement will be established through separate written documentation.',
    'contact.success': 'Thank you for your message. I will respond within 24 hours.',
    'contact.error': 'There was an error sending your message. Please try calling or emailing directly.',
    
    // Footer
    'footer.tagline': 'Professional property services for Illinois homeowners',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'Disclaimer',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.copyright': '© 2026 Blanca Garza Property Services. All rights reserved.',
    
    // Legal Pages
    'disclaimer.title': 'Legal Disclaimer',
    'disclaimer.intro': 'Please read this disclaimer carefully before using the services of Blanca Garza Property Services.',
    'disclaimer.no-license.title': 'No Professional Licenses',
    'disclaimer.no-license.text': 'Blanca Garza is an independent property services professional. She does not hold licenses as a public adjuster, contractor, insurance agent, attorney, or any other regulated profession. Services provided are for informational, educational, and coordination purposes only.',
    'disclaimer.no-claims.title': 'No Insurance Claim Negotiation',
    'disclaimer.no-claims.text': 'Blanca Garza does not negotiate, settle, or adjust insurance claims. She does not represent clients in dealings with insurance companies. Any insurance-related documentation provided is for the client\'s own use and records.',
    'disclaimer.no-guarantees.title': 'No Guarantees or Warranties',
    'disclaimer.no-guarantees.text': 'Property assessments, inspections, and documentation are provided based on visible conditions at the time of inspection. No guarantees are made regarding property condition, hidden defects, repair costs, or insurance coverage. Clients are encouraged to seek licensed professional opinions for specialized matters.',
    'disclaimer.no-liability.title': 'No Liability for Third-Party Services',
    'disclaimer.no-liability.text': 'When Blanca Garza refers clients to licensed contractors, engineers, attorneys, or other professionals, she is not responsible for the quality, timeliness, or outcomes of their work. Clients enter into separate agreements with those professionals.',
    'disclaimer.info-only.title': 'Informational Purposes Only',
    'disclaimer.info-only.text': 'All information, documentation, and guidance provided is for informational purposes only and does not constitute professional advice in regulated fields such as law, insurance, engineering, or contracting.',
    'disclaimer.jurisdiction.title': 'Jurisdiction',
    'disclaimer.jurisdiction.text': 'These services are provided in accordance with the laws of the State of Illinois, USA.',
    
    'terms.title': 'Terms & Conditions',
    'terms.intro': 'By using the services of Blanca Garza Property Services, you agree to the following terms and conditions.',
    'terms.services.title': 'Services Provided',
    'terms.services.text': 'Services include property inspections, photo and video documentation, homeowner education, and coordination assistance. Services are provided on an independent, non-licensed basis for informational purposes only.',
    'terms.no-guarantees.title': 'No Guarantees',
    'terms.no-guarantees.text': 'No guarantees are made regarding property conditions, repair outcomes, insurance coverage, or any other matters. Inspections reflect visible conditions at the time of service and may not reveal hidden defects.',
    'terms.client-responsibility.title': 'Client Responsibility',
    'terms.client-responsibility.text': 'Clients are responsible for making their own decisions regarding property repairs, insurance claims, and professional services. Clients should seek licensed professional advice when needed.',
    'terms.payment.title': 'Payment',
    'terms.payment.text': 'Payment terms will be established in writing prior to service delivery. Services are typically paid upon completion unless otherwise agreed.',
    'terms.limitation.title': 'Limitation of Liability',
    'terms.limitation.text': 'Blanca Garza\'s liability is limited to the amount paid for services rendered. She is not liable for consequential damages, property damage, or losses arising from the use of information or services provided.',
    'terms.jurisdiction.title': 'Governing Law',
    'terms.jurisdiction.text': 'These terms are governed by the laws of the State of Illinois, USA. Any disputes will be resolved in Illinois courts.',
    
    'privacy.title': 'Privacy Policy',
    'privacy.intro': 'This privacy policy explains how Blanca Garza Property Services collects, uses, and protects your personal information.',
    'privacy.collection.title': 'Information Collected',
    'privacy.collection.text': 'We collect information you provide directly, including your name, phone number, email address, property address, and details about your property needs. We may also collect photos and documentation of your property as part of service delivery.',
    'privacy.use.title': 'How Information Is Used',
    'privacy.use.text': 'Your information is used solely for the purpose of providing property services, communicating with you, and maintaining service records. We use your contact information to respond to inquiries, schedule appointments, and provide updates on your service.',
    'privacy.sharing.title': 'Information Sharing',
    'privacy.sharing.text': 'We do not sell, rent, or share your personal information with third parties for marketing purposes. Information may be shared with licensed professionals (contractors, engineers, etc.) only when necessary to provide requested services and only with your consent.',
    'privacy.security.title': 'Data Security',
    'privacy.security.text': 'We take reasonable measures to protect your personal information from unauthorized access, disclosure, or loss. However, no electronic storage system is completely secure.',
    'privacy.retention.title': 'Data Retention',
    'privacy.retention.text': 'We retain your information for as long as necessary to provide services and comply with legal obligations. You may request deletion of your information at any time.',
    'privacy.rights.title': 'Your Rights',
    'privacy.rights.text': 'You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.',
    'privacy.contact.title': 'Contact for Privacy Concerns',
    'privacy.contact.text': 'If you have questions about this privacy policy, please contact us using the information on the Contact page.',
  },
  es: {
    // Navegación
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.services': 'Servicios',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.gallery': 'Galería',
    
    // Página de Inicio - Hero
    'home.hero.badge': 'Servicios de Propiedad Confiables',
    'home.hero.title.line1': 'Servicios Profesionales',
    'home.hero.title.line2': 'de Propiedad Confiables',
    'home.hero.subtitle': 'Profesional independiente de servicios de propiedad que ofrece inspecciones exhaustivas, documentación detallada y orientación experta para propietarios en Illinois.',
    'home.hero.cta.primary': 'Agendar Consulta',
    'home.hero.cta.secondary': 'Explorar Servicios',
    'home.hero.trust.title': '500+ Clientes Satisfechos',
    'home.hero.trust.subtitle': 'Confianza de propietarios de Illinois',
    'home.hero.card1.title': 'Profesional Verificada',
    'home.hero.card1.subtitle': 'Independiente y Confiable',
    'home.hero.card2.text': 'Excelentes Reseñas',
    
    // Página de Inicio - Estadísticas
    'home.stats.inspections': 'Inspecciones Completadas',
    'home.stats.satisfaction': 'Satisfacción del Cliente',
    'home.stats.experience': 'Años de Experiencia',
    'home.stats.response': 'Tiempo de Respuesta',
    
    // Página de Inicio - Intro
    'home.intro.badge': 'Acerca de Mis Servicios',
    'home.intro.title': 'Su Aliada en el Cuidado de su Propiedad',
    'home.intro.text': 'Como profesional independiente de servicios de propiedad, proporciono a los propietarios la información detallada y la orientación que necesitan para tomar decisiones informadas sobre sus propiedades. Con un enfoque en la documentación exhaustiva y la comunicación clara, le ayudo a comprender el estado de su propiedad.',
    'home.intro.cta': 'Conozca Más Sobre Mí',
    
    // Página de Inicio - Beneficios
    'home.benefits.item1': 'Inspecciones completas de propiedad con informes detallados',
    'home.benefits.item2': 'Documentación fotográfica y en video de alta calidad',
    'home.benefits.item3': 'Comunicación clara y honesta durante todo el proceso',
    'home.benefits.item4': 'Conexiones con profesionales licenciados de confianza',
    
    // Página de Inicio - Servicios
    'home.services.badge': 'Lo Que Ofrezco',
    'home.services.title': 'Cómo Puedo Ayudarle',
    'home.services.subtitle': 'Servicios integrales de propiedad diseñados para brindarle claridad y confianza sobre el estado de su propiedad.',
    'home.services.inspection.title': 'Inspecciones de Propiedad',
    'home.services.inspection.desc': 'Inspecciones completas de interior, exterior y techo para documentar el estado actual de su propiedad con informes detallados.',
    'home.services.documentation.title': 'Documentación Fotográfica y en Video',
    'home.services.documentation.desc': 'Registros visuales detallados de las condiciones de la propiedad, daños y reparaciones para sus archivos y referencia futura.',
    'home.services.guidance.title': 'Orientación al Propietario',
    'home.services.guidance.desc': 'Explicaciones claras y educación sobre las condiciones de la propiedad, necesidades de mantenimiento y próximos pasos recomendados.',
    'home.services.coordination.title': 'Coordinación de Proyectos',
    'home.services.coordination.desc': 'Asistencia para organizar reparaciones y conectarlo con profesionales debidamente licenciados cuando sea necesario.',
    'home.services.cta': 'Ver Todos los Servicios',
    
    // Página de Inicio - Testimonios
    'home.testimonials.badge': 'Testimonios de Clientes',
    'home.testimonials.title': 'Lo Que Dicen Mis Clientes',
    
    // Página de Inicio - CTA
    'home.cta.title': '¿Listo para Comenzar?',
    'home.cta.text': 'Contácteme hoy para hablar sobre las necesidades de su propiedad y agendar una consulta. Estoy aquí para ayudarle a entender y cuidar su propiedad.',
    'home.cta.button': 'Agendar Consulta',
    'home.cta.secondary': 'Ver Mi Proceso',
    
    // Página Acerca de
    'about.hero.title': 'Acerca de Blanca Garza',
    'about.hero.subtitle': 'Profesional Independiente de Servicios de Propiedad',
    'about.intro.title': 'Experiencia Profesional',
    'about.intro.text': 'Soy una profesional independiente de servicios de propiedad dedicada a ayudar a los propietarios a comprender y cuidar sus propiedades. Con años de experiencia en evaluación y documentación de propiedades, proporciono información exhaustiva e imparcial que empodera a los propietarios para tomar decisiones informadas.',
    'about.role.title': 'Mi Rol Independiente',
    'about.role.text': 'Opero como profesional independiente, lo que significa que trabajo directamente para usted, el propietario. No soy ajustadora pública licenciada, contratista, agente de seguros ni representante legal. Mi función es proporcionarle evaluaciones precisas de la propiedad, documentación detallada y orientación clara para que pueda navegar las decisiones relacionadas con la propiedad con confianza.',
    'about.approach.title': 'Mi Enfoque',
    'about.approach.text': 'Cada propiedad y situación es única. Me tomo el tiempo para comprender sus necesidades específicas, realizar inspecciones exhaustivas y proporcionar evaluaciones claras y honestas. Mi objetivo es brindarle la información y el apoyo que necesita, ya sea que esté lidiando con daños a la propiedad, planificando reparaciones o simplemente desee comprender mejor el estado de su hogar.',
    'about.legal.title': 'Aclaración Legal Importante',
    'about.legal.text': 'No poseo licencias profesionales como ajustadora pública, contratista, agente de seguros o abogada. No negocio reclamos de seguros, realizo reparaciones ni proporciono asesoramiento legal. Mis servicios se limitan a la evaluación de propiedades, documentación, educación y asistencia de coordinación. Cuando se requiere experiencia especializada, puedo ayudarlo a conectarse con profesionales debidamente licenciados.',
    
    // Página de Servicios
    'services.hero.title': 'Servicios de Propiedad',
    'services.hero.subtitle': 'Apoyo integral para las necesidades de su propiedad',
    'services.inspection.title': 'Inspecciones de Propiedad',
    'services.inspection.desc': 'Realizo inspecciones detalladas del interior, exterior y techo de su propiedad para documentar las condiciones actuales. Estas inspecciones le proporcionan una comprensión clara del estado de su propiedad, incluidas las áreas de preocupación que puedan necesitar atención. Las inspecciones incluyen notas escritas, mediciones y observaciones.',
    'services.documentation.title': 'Documentación Fotográfica y en Video',
    'services.documentation.desc': 'La documentación visual es esencial para los registros de propiedad, fines de seguros y planificación de reparaciones. Proporciono fotos y videos de alta calidad que muestran claramente las condiciones de la propiedad, daños y detalles. Esta documentación puede ser invaluable para sus registros y referencia futura.',
    'services.guidance.title': 'Educación y Orientación al Propietario',
    'services.guidance.desc': 'Comprender el estado de su propiedad es el primer paso para tomar decisiones informadas. Explico los hallazgos en un lenguaje claro y accesible y le ayudo a comprender qué significan las diferentes condiciones para su propiedad. Proporciono orientación sobre prioridades de mantenimiento y posibles próximos pasos.',
    'services.coordination.title': 'Coordinación de Reparaciones y Proyectos',
    'services.coordination.desc': 'Gestionar las reparaciones de propiedades puede ser abrumador. Puedo ayudar con la organización de proyectos de reparación, la creación de documentos de alcance y ayudarlo a comprender qué trabajo puede ser necesario. Cuando se requiere trabajo especializado, puedo ayudarlo a conectarse con contratistas y profesionales debidamente licenciados.',
    'services.referral.title': 'Referencias Profesionales',
    'services.referral.desc': 'Cuando su situación requiere experiencia licenciada, como ingeniería estructural, asesoramiento legal o contratación especializada, puedo ayudarlo a conectarse con profesionales calificados en esos campos. Mantengo relaciones con profesionales confiables y licenciados en varias especialidades.',
    'services.note.title': 'Nota Importante',
    'services.note.text': 'Todos los servicios se proporcionan con fines informativos y de coordinación. No hago garantías sobre las condiciones de la propiedad, los resultados de las reparaciones o la cobertura del seguro. No negocio reclamos de seguros ni proporciono asesoramiento legal.',
    
    // Página de Proceso
    'process.hero.title': 'Cómo Trabajo con Usted',
    'process.hero.subtitle': 'Un enfoque claro, paso a paso, para los servicios de propiedad',
    'process.step1.title': 'Consulta Inicial',
    'process.step1.desc': 'Comenzamos con una conversación sobre la situación y las necesidades de su propiedad. Esto puede ser por teléfono, correo electrónico o en persona. Haré preguntas para comprender sus inquietudes y explicaré cómo puedo ayudar.',
    'process.step2.title': 'Evaluación de la Propiedad',
    'process.step2.desc': 'Realizo una inspección exhaustiva en el sitio de su propiedad, documentando las condiciones a través de notas, fotos y videos. Examino todas las áreas relevantes y tomo medidas detalladas según sea necesario.',
    'process.step3.title': 'Documentación y Revisión',
    'process.step3.desc': 'Compilo todos los hallazgos de la inspección, fotos y videos en documentación organizada. Revisamos estos materiales juntos, y explico lo que he encontrado en términos claros y comprensibles.',
    'process.step4.title': 'Orientación y Próximos Pasos',
    'process.step4.desc': 'Basándome en la evaluación, proporciono orientación sobre los posibles próximos pasos. Esto puede incluir recomendaciones de mantenimiento, prioridades de reparación o referencias a profesionales licenciados para trabajos especializados.',
    'process.step5.title': 'Apoyo Continuo',
    'process.step5.desc': 'Permanezco disponible para responder preguntas, proporcionar documentación adicional o ayudar con la coordinación de reparaciones y servicios profesionales a medida que avanza su proyecto.',
    'process.commitment.title': 'Mi Compromiso con Usted',
    'process.commitment.text': 'A lo largo de este proceso, mantengo una comunicación clara, proporciono evaluaciones honestas y trabajo en su mejor interés. No recibo comisiones de contratistas u otros profesionales a los que pueda referirlo, lo que garantiza que mi orientación permanezca imparcial.',
    
    // Página de Contacto
    'contact.hero.title': 'Contácteme',
    'contact.hero.subtitle': 'Hablemos sobre las necesidades de su propiedad',
    'contact.form.title': 'Formulario de Contacto',
    'contact.form.name': 'Su Nombre',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.phone': 'Número de Teléfono',
    'contact.form.message': 'Cuénteme sobre las necesidades de su propiedad',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.info.title': 'Información de Contacto',
    'contact.info.phone': 'Teléfono',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.hours': 'Horario',
    'contact.info.hours.value': 'Lun - Vie: 8am - 6pm\nSab: 9am - 2pm\nDom: Cerrado\nInspecciones de emergencia con cita',
    'contact.info.location': 'Área de Servicio',
    'contact.info.location.value': 'Illinois',
    'contact.disclaimer': 'Al enviar este formulario, usted reconoce que no se crea ninguna relación cliente-representante. Esta es solo una consulta. Cualquier acuerdo de servicio formal se establecerá a través de documentación escrita separada.',
    'contact.success': 'Gracias por su mensaje. Responderé dentro de las 24 horas.',
    'contact.error': 'Hubo un error al enviar su mensaje. Por favor, intente llamar o enviar un correo electrónico directamente.',
    
    // Pie de página
    'footer.tagline': 'Servicios profesionales de propiedad para propietarios de Illinois',
    'footer.legal': 'Legal',
    'footer.disclaimer': 'Descargo de Responsabilidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.privacy': 'Política de Privacidad',
    'footer.copyright': '© 2026 Blanca Garza Property Services. Todos los derechos reservados.',
    
    // Páginas Legales
    'disclaimer.title': 'Descargo de Responsabilidad Legal',
    'disclaimer.intro': 'Por favor, lea este descargo de responsabilidad cuidadosamente antes de utilizar los servicios de Blanca Garza Property Services.',
    'disclaimer.no-license.title': 'Sin Licencias Profesionales',
    'disclaimer.no-license.text': 'Blanca Garza es una profesional independiente de servicios de propiedad. No posee licencias como ajustadora pública, contratista, agente de seguros, abogada o cualquier otra profesión regulada. Los servicios proporcionados son solo con fines informativos, educativos y de coordinación.',
    'disclaimer.no-claims.title': 'Sin Negociación de Reclamos de Seguros',
    'disclaimer.no-claims.text': 'Blanca Garza no negocia, liquida ni ajusta reclamos de seguros. No representa a los clientes en tratos con compañías de seguros. Cualquier documentación relacionada con seguros proporcionada es para el uso y los registros propios del cliente.',
    'disclaimer.no-guarantees.title': 'Sin Garantías ni Warranties',
    'disclaimer.no-guarantees.text': 'Las evaluaciones de propiedades, inspecciones y documentación se proporcionan en función de las condiciones visibles en el momento de la inspección. No se hacen garantías con respecto al estado de la propiedad, defectos ocultos, costos de reparación o cobertura de seguro. Se alienta a los clientes a buscar opiniones profesionales licenciadas para asuntos especializados.',
    'disclaimer.no-liability.title': 'Sin Responsabilidad por Servicios de Terceros',
    'disclaimer.no-liability.text': 'Cuando Blanca Garza refiere a los clientes a contratistas, ingenieros, abogados u otros profesionales licenciados, no es responsable de la calidad, puntualidad o resultados de su trabajo. Los clientes celebran acuerdos separados con esos profesionales.',
    'disclaimer.info-only.title': 'Solo con Fines Informativos',
    'disclaimer.info-only.text': 'Toda la información, documentación y orientación proporcionada es solo con fines informativos y no constituye asesoramiento profesional en campos regulados como derecho, seguros, ingeniería o contratación.',
    'disclaimer.jurisdiction.title': 'Jurisdicción',
    'disclaimer.jurisdiction.text': 'Estos servicios se proporcionan de acuerdo con las leyes del Estado de Illinois, EE. UU.',
    
    'terms.title': 'Términos y Condiciones',
    'terms.intro': 'Al utilizar los servicios de Blanca Garza Property Services, usted acepta los siguientes términos y condiciones.',
    'terms.services.title': 'Servicios Proporcionados',
    'terms.services.text': 'Los servicios incluyen inspecciones de propiedades, documentación fotográfica y en video, educación al propietario y asistencia de coordinación. Los servicios se proporcionan de forma independiente, sin licencia, solo con fines informativos.',
    'terms.no-guarantees.title': 'Sin Garantías',
    'terms.no-guarantees.text': 'No se hacen garantías con respecto a las condiciones de la propiedad, los resultados de las reparaciones, la cobertura del seguro o cualquier otro asunto. Las inspecciones reflejan las condiciones visibles en el momento del servicio y pueden no revelar defectos ocultos.',
    'terms.client-responsibility.title': 'Responsabilidad del Cliente',
    'terms.client-responsibility.text': 'Los clientes son responsables de tomar sus propias decisiones con respecto a las reparaciones de la propiedad, los reclamos de seguros y los servicios profesionales. Los clientes deben buscar asesoramiento profesional licenciado cuando sea necesario.',
    'terms.payment.title': 'Pago',
    'terms.payment.text': 'Los términos de pago se establecerán por escrito antes de la entrega del servicio. Los servicios generalmente se pagan al finalizar, a menos que se acuerde lo contrario.',
    'terms.limitation.title': 'Limitación de Responsabilidad',
    'terms.limitation.text': 'La responsabilidad de Blanca Garza se limita al monto pagado por los servicios prestados. No es responsable de daños consecuentes, daños a la propiedad o pérdidas que surjan del uso de la información o los servicios proporcionados.',
    'terms.jurisdiction.title': 'Ley Aplicable',
    'terms.jurisdiction.text': 'Estos términos se rigen por las leyes del Estado de Illinois, EE. UU. Cualquier disputa se resolverá en los tribunales de Illinois.',
    
    'privacy.title': 'Política de Privacidad',
    'privacy.intro': 'Esta política de privacidad explica cómo Blanca Garza Property Services recopila, utiliza y protege su información personal.',
    'privacy.collection.title': 'Información Recopilada',
    'privacy.collection.text': 'Recopilamos información que usted proporciona directamente, incluido su nombre, número de teléfono, dirección de correo electrónico, dirección de la propiedad y detalles sobre las necesidades de su propiedad. También podemos recopilar fotos y documentación de su propiedad como parte de la prestación del servicio.',
    'privacy.use.title': 'Cómo se Utiliza la Información',
    'privacy.use.text': 'Su información se utiliza únicamente con el propósito de proporcionar servicios de propiedad, comunicarnos con usted y mantener registros de servicio. Utilizamos su información de contacto para responder a consultas, programar citas y proporcionar actualizaciones sobre su servicio.',
    'privacy.sharing.title': 'Compartir Información',
    'privacy.sharing.text': 'No vendemos, alquilamos ni compartimos su información personal con terceros con fines de marketing. La información puede compartirse con profesionales licenciados (contratistas, ingenieros, etc.) solo cuando sea necesario para proporcionar los servicios solicitados y solo con su consentimiento.',
    'privacy.security.title': 'Seguridad de los Datos',
    'privacy.security.text': 'Tomamos medidas razonables para proteger su información personal del acceso, divulgación o pérdida no autorizados. Sin embargo, ningún sistema de almacenamiento electrónico es completamente seguro.',
    'privacy.retention.title': 'Retención de Datos',
    'privacy.retention.text': 'Retenemos su información durante el tiempo necesario para proporcionar servicios y cumplir con las obligaciones legales. Puede solicitar la eliminación de su información en cualquier momento.',
    'privacy.rights.title': 'Sus Derechos',
    'privacy.rights.text': 'Tiene derecho a acceder, corregir o eliminar su información personal. Contáctenos para ejercer estos derechos.',
    'privacy.contact.title': 'Contacto para Inquietudes de Privacidad',
    'privacy.contact.text': 'Si tiene preguntas sobre esta política de privacidad, contáctenos utilizando la información en la página de Contacto.',
  }
};
