/* Design: Dynamic Elegance - Services page with expanded home services */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { 
  ClipboardCheck, Camera, GraduationCap, Wrench, Users, AlertCircle, ArrowRight, 
  CheckCircle2, Home, Droplets, PaintBucket, Hammer, Shield, Wind, Zap, ThermometerSun,
  DoorOpen, Building2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Services() {
  const { t, language } = useLanguage();
  const [activeService, setActiveService] = useState(0);

  const coreServices = [
    {
      icon: ClipboardCheck,
      title: t('services.inspection.title'),
      description: t('services.inspection.desc'),
      features: language === 'en' ? [
        'Interior inspection of all rooms',
        'Exterior assessment including siding and foundation',
        'Roof condition evaluation',
        'Written notes and measurements',
        'Identification of areas of concern'
      ] : [
        'Inspección interior de todas las habitaciones',
        'Evaluación exterior incluyendo revestimiento y cimientos',
        'Evaluación del estado del techo',
        'Notas escritas y mediciones',
        'Identificación de áreas de preocupación'
      ]
    },
    {
      icon: Camera,
      title: t('services.documentation.title'),
      description: t('services.documentation.desc'),
      features: language === 'en' ? [
        'High-resolution photography',
        'Video documentation',
        'Before and after comparisons',
        'Organized digital files',
        'Easy sharing and storage'
      ] : [
        'Fotografía de alta resolución',
        'Documentación en video',
        'Comparaciones antes y después',
        'Archivos digitales organizados',
        'Fácil compartir y almacenar'
      ]
    },
    {
      icon: GraduationCap,
      title: t('services.guidance.title'),
      description: t('services.guidance.desc'),
      features: language === 'en' ? [
        'Clear explanations of findings',
        'Maintenance recommendations',
        'Priority guidance for repairs',
        'Understanding property conditions',
        'Informed decision support'
      ] : [
        'Explicaciones claras de los hallazgos',
        'Recomendaciones de mantenimiento',
        'Orientación de prioridades para reparaciones',
        'Comprensión de las condiciones de la propiedad',
        'Apoyo para decisiones informadas'
      ]
    },
    {
      icon: Wrench,
      title: t('services.coordination.title'),
      description: t('services.coordination.desc'),
      features: language === 'en' ? [
        'Repair project organization',
        'Scope document creation',
        'Timeline coordination',
        'Communication facilitation',
        'Progress monitoring assistance'
      ] : [
        'Organización de proyectos de reparación',
        'Creación de documentos de alcance',
        'Coordinación de cronogramas',
        'Facilitación de comunicación',
        'Asistencia en monitoreo de progreso'
      ]
    },
    {
      icon: Users,
      title: t('services.referral.title'),
      description: t('services.referral.desc'),
      features: language === 'en' ? [
        'Licensed contractor connections',
        'Engineering referrals',
        'Legal professional contacts',
        'Specialist recommendations',
        'Trusted network access'
      ] : [
        'Conexiones con contratistas licenciados',
        'Referencias de ingeniería',
        'Contactos de profesionales legales',
        'Recomendaciones de especialistas',
        'Acceso a red de confianza'
      ]
    }
  ];

  // Home services we can coordinate with licensed contractors
  const homeServices = [
    {
      icon: Home,
      title: language === 'en' ? 'Roof Replacement' : 'Reemplazo de Techo',
      description: language === 'en' 
        ? 'Complete roof replacement, shingle installation, and structural repairs'
        : 'Reemplazo completo de techo, instalación de tejas y reparaciones estructurales'
    },
    {
      icon: Droplets,
      title: language === 'en' ? 'Gutter Services' : 'Servicios de Canaletas',
      description: language === 'en'
        ? 'Gutter cleaning, repair, replacement, and guard installation'
        : 'Limpieza, reparación, reemplazo e instalación de protectores de canaletas'
    },
    {
      icon: Building2,
      title: language === 'en' ? 'Siding Installation' : 'Instalación de Revestimiento',
      description: language === 'en'
        ? 'Vinyl, fiber cement, wood siding installation and repair'
        : 'Instalación y reparación de revestimiento de vinilo, fibrocemento y madera'
    },
    {
      icon: PaintBucket,
      title: language === 'en' ? 'Interior & Exterior Painting' : 'Pintura Interior y Exterior',
      description: language === 'en'
        ? 'Professional painting services for all surfaces'
        : 'Servicios profesionales de pintura para todas las superficies'
    },
    {
      icon: DoorOpen,
      title: language === 'en' ? 'Windows & Doors' : 'Ventanas y Puertas',
      description: language === 'en'
        ? 'Window replacement, door installation, and weatherproofing'
        : 'Reemplazo de ventanas, instalación de puertas e impermeabilización'
    },
    {
      icon: Hammer,
      title: language === 'en' ? 'General Repairs' : 'Reparaciones Generales',
      description: language === 'en'
        ? 'Drywall repair, carpentry, and structural fixes'
        : 'Reparación de paneles de yeso, carpintería y arreglos estructurales'
    },
    {
      icon: Shield,
      title: language === 'en' ? 'Foundation & Waterproofing' : 'Cimientos e Impermeabilización',
      description: language === 'en'
        ? 'Foundation repair, basement waterproofing, and drainage solutions'
        : 'Reparación de cimientos, impermeabilización de sótanos y soluciones de drenaje'
    },
    {
      icon: Wind,
      title: language === 'en' ? 'HVAC Services' : 'Servicios de HVAC',
      description: language === 'en'
        ? 'Heating, ventilation, and air conditioning installation and repair'
        : 'Instalación y reparación de calefacción, ventilación y aire acondicionado'
    },
    {
      icon: Zap,
      title: language === 'en' ? 'Electrical Work' : 'Trabajo Eléctrico',
      description: language === 'en'
        ? 'Electrical repairs, panel upgrades, and safety inspections'
        : 'Reparaciones eléctricas, actualizaciones de paneles e inspecciones de seguridad'
    },
    {
      icon: ThermometerSun,
      title: language === 'en' ? 'Insulation' : 'Aislamiento',
      description: language === 'en'
        ? 'Attic insulation, wall insulation, and energy efficiency upgrades'
        : 'Aislamiento de ático, aislamiento de paredes y mejoras de eficiencia energética'
    },
    
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/10 to-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {language === 'en' ? 'What I Offer' : 'Lo Que Ofrezco'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Interactive Core Services Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === 'en' ? 'My Core Services' : 'Mis Servicios Principales'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Professional property inspection and documentation services to help you understand and maintain your home.'
                : 'Servicios profesionales de inspección y documentación de propiedades para ayudarle a entender y mantener su hogar.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Service Navigation */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-3">
                {coreServices.map((service, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                      activeService === index
                        ? 'bg-white shadow-lg'
                        : 'hover:bg-white/50'
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-br from-primary to-accent'
                        : 'bg-primary/10'
                    }`}>
                      <service.icon className={`w-6 h-6 transition-colors ${
                        activeService === index ? 'text-white' : 'text-primary'
                      }`} />
                    </div>
                    <span className={`font-medium transition-colors ${
                      activeService === index ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {service.title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Service Details */}
            <div className="lg:col-span-8">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        {(() => {
                          const Icon = coreServices[activeService].icon;
                          return <Icon className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                      <h2 className="text-3xl font-bold text-foreground">
                        {coreServices[activeService].title}
                      </h2>
                    </div>

                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {coreServices[activeService].description}
                    </p>

                    <div className="bg-muted/50 rounded-2xl p-6">
                      <h3 className="font-semibold text-foreground mb-4">
                        {language === 'en' ? 'What\'s Included:' : 'Qué Incluye:'}
                      </h3>
                      <ul className="space-y-3">
                        {coreServices[activeService].features.map((feature, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Services We Coordinate Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {language === 'en' ? 'Contractor Network' : 'Red de Contratistas'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
              {language === 'en' ? 'Home Services We Coordinate' : 'Servicios del Hogar que Coordinamos'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {language === 'en' 
                ? 'We connect you with licensed, insured, and vetted contractors for all your home improvement needs. We only work with responsible companies that meet our quality standards.'
                : 'Lo conectamos con contratistas licenciados, asegurados y verificados para todas sus necesidades de mejoras del hogar. Solo trabajamos con compañías responsables que cumplen con nuestros estándares de calidad.'}
            </p>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12"
          >
            <Card className="rounded-2xl shadow-lg border-0 bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-lg">
                      {language === 'en' ? 'Our Commitment to Quality' : 'Nuestro Compromiso con la Calidad'}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {language === 'en'
                        ? 'Every contractor in our network is licensed, insured, and has been vetted for quality workmanship and customer service.'
                        : 'Cada contratista en nuestra red está licenciado, asegurado y ha sido verificado por la calidad de su trabajo y servicio al cliente.'}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {homeServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="rounded-2xl shadow-lg border-0 h-full hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <service.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="rounded-3xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      {t('services.note.title')}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {t('services.note.text')}
                    </p>
                    <div className="bg-white/50 rounded-xl p-4 mt-4">
                      <p className="text-sm text-amber-800 font-medium">
                        {language === 'en'
                          ? '✓ All contractors we refer are licensed and insured\n✓ We do not perform repairs ourselves\n✓ We do not receive commissions from contractors\n✓ Final hiring decisions are always yours'
                          : '✓ Todos los contratistas que referimos están licenciados y asegurados\n✓ No realizamos reparaciones nosotros mismos\n✓ No recibimos comisiones de los contratistas\n✓ Las decisiones finales de contratación siempre son suyas'}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            style={{ top: '10%', left: '5%' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {language === 'en'
                ? 'Let me help you understand your property\'s condition and connect you with the right professionals for any repairs.'
                : 'Permítame ayudarle a entender la condición de su propiedad y conectarlo con los profesionales adecuados para cualquier reparación.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {t('home.cta.button')}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/gallery">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  {language === 'en' ? 'View Our Work' : 'Ver Nuestro Trabajo'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
