/* Design: Dynamic Elegance - Gallery page with before/after comparisons */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function Gallery() {
  const { language } = useLanguage();

  const projects = [
    {
      id: 1,
      title: language === 'en' ? 'Roof Restoration' : 'Restauración de Techo',
      description: language === 'en' 
        ? 'Complete roof inspection and documentation of storm damage, followed by coordination with licensed contractors for full restoration.'
        : 'Inspección completa del techo y documentación de daños por tormenta, seguido de coordinación con contratistas licenciados para restauración completa.',
      beforeImage: '/images/gallery/roof-before.jpg',
      afterImage: '/images/gallery/roof-after.jpg',
      category: language === 'en' ? 'Exterior' : 'Exterior',
      location: 'Naperville, IL'
    },
    {
      id: 2,
      title: language === 'en' ? 'Exterior Paint Transformation' : 'Transformación de Pintura Exterior',
      description: language === 'en'
        ? 'This full exterior refresh dramatically improved curb appeal and overall market value. In addition to a complete paint upgrade, we power-washed the home, repaired damaged wood trim, and restored key exterior details. The property was already listed, but after our work, its appearance and perceived value increased — helping it sell quickly with extremely happy clients.'
        : 'Esta renovación exterior completa mejoró drásticamente el atractivo exterior y el valor general de mercado. Además de una actualización completa de pintura, lavamos la casa a presión, reparamos molduras de madera dañadas y restauramos detalles exteriores clave. La propiedad ya estaba en venta, pero después de nuestro trabajo, su apariencia y valor percibido aumentaron, ayudando a que se vendiera rápidamente con clientes muy satisfechos.',
      image: '/images/gallery/exterior-paint-collage.jpg',
      category: language === 'en' ? 'Exterior' : 'Exterior',
      location: 'Aurora, IL'
    },
    {
      id: 3,
      title: language === 'en' ? 'Siding Replacement' : 'Reemplazo de Revestimiento',
      description: language === 'en'
        ? 'Thorough documentation of deteriorated siding panels and water damage, enabling homeowner to make informed decisions about repairs.'
        : 'Documentación exhaustiva de paneles de revestimiento deteriorados y daños por agua, permitiendo al propietario tomar decisiones informadas sobre reparaciones.',
      beforeImage: '/images/gallery/siding-before.jpg',
      afterImage: '/images/gallery/siding-after.jpg',
      category: language === 'en' ? 'Exterior' : 'Exterior',
      location: 'Aurora, IL'
    },
    {
      id: 4,
      title: language === 'en' ? 'Water Damage Repair' : 'Reparación de Daños por Agua',
      description: language === 'en'
        ? 'Interior ceiling inspection revealing water infiltration damage. Detailed photo documentation helped identify the source and extent of damage.'
        : 'Inspección de techo interior revelando daños por infiltración de agua. La documentación fotográfica detallada ayudó a identificar la fuente y extensión del daño.',
      beforeImage: '/images/gallery/water-damage-before.jpg',
      afterImage: '/images/gallery/water-damage-after.jpg',
      category: language === 'en' ? 'Interior' : 'Interior',
      location: 'Joliet, IL'
    }
  ];

  const stats = [
    { value: '500+', label: language === 'en' ? 'Properties Inspected' : 'Propiedades Inspeccionadas' },
    { value: '98%', label: language === 'en' ? 'Client Satisfaction' : 'Satisfacción del Cliente' },
    { value: '1000+', label: language === 'en' ? 'Photos Documented' : 'Fotos Documentadas' }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              <Camera className="w-4 h-4" />
              {language === 'en' ? 'Project Gallery' : 'Galería de Proyectos'}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {language === 'en' ? 'Before & After' : 'Antes y Después'}
              <span className="gradient-text block mt-2">
                {language === 'en' ? 'Transformations' : 'Transformaciones'}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {language === 'en' 
                ? 'See real examples of property inspections and the results achieved through proper documentation and coordination with licensed professionals.'
                : 'Vea ejemplos reales de inspecciones de propiedades y los resultados logrados a través de documentación adecuada y coordinación con profesionales licenciados.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image Comparison */}
                      <div className={`p-6 md:p-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        {project.afterImage ? (
                          <BeforeAfterSlider
                            beforeImage={project.beforeImage}
                            afterImage={project.afterImage}
                            beforeLabel={language === 'en' ? 'Before' : 'Antes'}
                            afterLabel={language === 'en' ? 'After' : 'Después'}
                          />
                        ) : (
                          <div>
                            <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground mb-2">
                              <span>{language === 'en' ? 'Before' : 'Antes'}</span>
                              <span>{language === 'en' ? 'After' : 'Después'}</span>
                            </div>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto rounded-2xl shadow-lg"
                            />
                          </div>
                        )}
                      </div>

                      {/* Project Info */}
                      <div className={`p-6 md:p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                            {project.category}
                          </span>
                          <span className="text-muted-foreground text-sm">
                            {project.location}
                          </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h2>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-2 text-green-600">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-medium">
                            {language === 'en' ? 'Successfully Documented' : 'Documentado Exitosamente'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-amber-800 text-sm leading-relaxed">
              {language === 'en'
                ? 'Note: All repair and restoration work shown was performed by licensed contractors. Blanca Garza Property Services provides inspection, documentation, and coordination services only. Results may vary based on individual property conditions and the professionals engaged for repairs.'
                : 'Nota: Todo el trabajo de reparación y restauración mostrado fue realizado por contratistas licenciados. Blanca Garza Property Services proporciona únicamente servicios de inspección, documentación y coordinación. Los resultados pueden variar según las condiciones individuales de la propiedad y los profesionales contratados para las reparaciones.'}
            </p>
          </div>
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
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-white/10"
            style={{ bottom: '10%', right: '5%' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 8, repeat: Infinity }}
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
              {language === 'en' 
                ? 'Ready to Document Your Property?'
                : '¿Listo para Documentar su Propiedad?'}
            </h2>
            <p className="text-xl opacity-90 mb-8">
              {language === 'en'
                ? 'Schedule a professional inspection and get detailed documentation of your property\'s condition.'
                : 'Programe una inspección profesional y obtenga documentación detallada de la condición de su propiedad.'}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-xl px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {language === 'en' ? 'Schedule Inspection' : 'Programar Inspección'}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
