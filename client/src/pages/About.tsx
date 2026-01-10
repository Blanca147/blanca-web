/* Design: Dynamic Elegance - About page with animations and visual storytelling */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { CheckCircle2, Shield, Heart, Target, ArrowRight, Award, Users, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  const { t, language } = useLanguage();

  const values = language === 'en' ? [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest, transparent assessments without hidden agendas or conflicts of interest.'
    },
    {
      icon: Target,
      title: 'Thoroughness',
      description: 'Comprehensive inspections that leave no detail overlooked.'
    },
    {
      icon: Heart,
      title: 'Dedication',
      description: 'Committed to serving homeowners with care and professionalism.'
    },
    {
      icon: Users,
      title: 'Accessibility',
      description: 'Clear communication in both English and Spanish to serve our community.'
    }
  ] : [
    {
      icon: Shield,
      title: 'Integridad',
      description: 'Evaluaciones honestas y transparentes sin agendas ocultas ni conflictos de interés.'
    },
    {
      icon: Target,
      title: 'Minuciosidad',
      description: 'Inspecciones completas que no dejan ningún detalle sin revisar.'
    },
    {
      icon: Heart,
      title: 'Dedicación',
      description: 'Comprometida a servir a los propietarios con cuidado y profesionalismo.'
    },
    {
      icon: Users,
      title: 'Accesibilidad',
      description: 'Comunicación clara en inglés y español para servir a nuestra comunidad.'
    }
  ];

  const stats = [
    { icon: Award, value: '10+', label: language === 'en' ? 'Years Experience' : 'Años de Experiencia' },
    { icon: Users, value: '500+', label: language === 'en' ? 'Clients Served' : 'Clientes Atendidos' },
    { icon: Clock, value: '24h', label: language === 'en' ? 'Response Time' : 'Tiempo de Respuesta' },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                {language === 'en' ? 'About Me' : 'Acerca de Mí'}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 leading-tight">
                {t('about.hero.title')}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {t('about.hero.subtitle')}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro.text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about-background.jpg"
                    alt="Blanca Garza - Property Services Professional"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative frame */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20" />
                
                {/* Stats card */}
                <motion.div
                  className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-xl p-6"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <div className="grid grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                {language === 'en' ? 'My Role' : 'Mi Rol'}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
                {t('about.role.title')}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="rounded-3xl shadow-xl border-0 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {t('about.role.text')}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      language === 'en' ? 'Direct service to homeowners' : 'Servicio directo a propietarios',
                      language === 'en' ? 'Unbiased property assessments' : 'Evaluaciones imparciales de propiedad',
                      language === 'en' ? 'Detailed documentation' : 'Documentación detallada',
                      language === 'en' ? 'Clear guidance and education' : 'Orientación y educación clara',
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {language === 'en' ? 'Core Values' : 'Valores Fundamentales'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              {t('about.approach.title')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full rounded-2xl border-0 shadow-lg hover:shadow-xl transition-all duration-300 group card-hover">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      <value.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Clarification Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl shadow-xl border-0 overflow-hidden bg-white">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-2">
                        {t('about.legal.title')}
                      </h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about.legal.text')}
                  </p>

                  <div className="bg-muted/50 rounded-xl p-6">
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' 
                        ? 'For more detailed information about service limitations and legal disclaimers, please review our'
                        : 'Para información más detallada sobre las limitaciones del servicio y descargos legales, por favor revise nuestra'}
                      {' '}
                      <Link href="/disclaimer">
                        <span className="text-primary hover:underline font-medium">
                          {t('footer.disclaimer')}
                        </span>
                      </Link>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button className="btn-gradient text-white rounded-xl px-8 py-6 text-lg group">
                  {t('home.cta.button')}
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg" className="rounded-xl px-8 py-6 text-lg">
                  {t('home.services.cta')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
