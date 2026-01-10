/* Design: Dynamic Elegance - Process page with animated timeline */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'wouter';
import { MessageSquare, ClipboardCheck, FileText, Compass, HeartHandshake, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Process() {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: ClipboardCheck,
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FileText,
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Compass,
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: HeartHandshake,
      number: '05',
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
      color: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {language === 'en' ? 'My Process' : 'Mi Proceso'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              {t('process.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('process.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />
              
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className={`relative flex items-center mb-16 last:mb-0 ${isLeft ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Content card */}
                    <div className={`w-5/12 ${isLeft ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <Card className="rounded-2xl shadow-xl border-0 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <CardContent className="p-6">
                          <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                            <span className={`text-4xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              {step.number}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {step.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="rounded-2xl shadow-xl border-0 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                              {step.number}
                            </span>
                            <h3 className="text-lg font-bold text-foreground">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="rounded-3xl shadow-xl border-0 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {t('process.commitment.title')}
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('process.commitment.text')}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {[
                    { 
                      title: language === 'en' ? 'Clear Communication' : 'Comunicación Clara',
                      desc: language === 'en' ? 'Regular updates throughout the process' : 'Actualizaciones regulares durante el proceso'
                    },
                    { 
                      title: language === 'en' ? 'Honest Assessments' : 'Evaluaciones Honestas',
                      desc: language === 'en' ? 'Straightforward findings without bias' : 'Hallazgos directos sin sesgo'
                    },
                    { 
                      title: language === 'en' ? 'Your Best Interest' : 'Su Mejor Interés',
                      desc: language === 'en' ? 'No commissions from referrals' : 'Sin comisiones por referencias'
                    }
                  ].map((item, index) => (
                    <div key={index} className="text-center p-4">
                      <h4 className="font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
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
            style={{ bottom: '10%', right: '5%' }}
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
                ? 'Ready to start the process? Contact me today for a free initial consultation.'
                : '¿Listo para comenzar el proceso? Contácteme hoy para una consulta inicial gratuita.'}
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  );
}
