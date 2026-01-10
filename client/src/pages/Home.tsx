/* Design: Dynamic Elegance - Vibrant colors, fluid animations, interactive elements */

import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ClipboardCheck, Camera, GraduationCap, Users, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import AnimatedCounter from '@/components/AnimatedCounter';
import TestimonialsCarousel from '@/components/TestimonialsCarousel';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: ClipboardCheck,
      title: t('home.services.inspection.title'),
      description: t('home.services.inspection.desc'),
    },
    {
      icon: Camera,
      title: t('home.services.documentation.title'),
      description: t('home.services.documentation.desc'),
    },
    {
      icon: GraduationCap,
      title: t('home.services.guidance.title'),
      description: t('home.services.guidance.desc'),
    },
    {
      icon: Users,
      title: t('home.services.coordination.title'),
      description: t('home.services.coordination.desc'),
    },
  ];

  const stats = [
    { value: 500, suffix: '+', label: t('home.stats.inspections') },
    { value: 98, suffix: '%', label: t('home.stats.satisfaction') },
    { value: 10, suffix: '+', label: t('home.stats.experience') },
    { value: 24, suffix: 'h', label: t('home.stats.response') },
  ];

  const benefits = [
    t('home.benefits.item1'),
    t('home.benefits.item2'),
    t('home.benefits.item3'),
    t('home.benefits.item4'),
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="shape-circle"
            style={{ top: '-10%', right: '-5%' }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="shape-circle"
            style={{ bottom: '-20%', left: '-10%', background: 'linear-gradient(135deg, oklch(0.70 0.15 25 / 0.1), oklch(0.65 0.18 40 / 0.1))' }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Sparkles className="w-4 h-4" />
                {t('home.hero.badge')}
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground">{t('home.hero.title.line1')}</span>
                <br />
                <span className="gradient-text">{t('home.hero.title.line2')}</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                {t('home.hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="btn-gradient text-white rounded-xl px-8 py-6 text-lg font-semibold group"
                  >
                    {t('home.hero.cta.primary')}
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-xl px-8 py-6 text-lg font-semibold hover:bg-primary/5 transition-all duration-300"
                  >
                    {t('home.hero.cta.secondary')}
                  </Button>
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{t('home.hero.trust.title')}</p>
                  <p className="text-sm text-muted-foreground">{t('home.hero.trust.subtitle')}</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Hero Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                {/* Main image */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/b.jpeg"
                    alt="Blanca Garza - Professional Property Services"
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Floating card 1 */}
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-foreground">{t('home.hero.card1.title')}</p>
                    <p className="text-sm text-muted-foreground">{t('home.hero.card1.subtitle')}</p>
                  </div>
                </motion.div>

                {/* Floating card 2 */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-foreground">5.0</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{t('home.hero.card2.text')}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="container relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-card relative">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/about-background.jpg"
                    alt="Property Inspection"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20" />
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">
                {t('home.intro.badge')}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {t('home.intro.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('home.intro.text')}
              </p>

              {/* Benefits list */}
              <ul className="space-y-4 pt-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>

              <Link href="/about">
                <Button className="btn-gradient text-white rounded-xl px-6 py-5 mt-4 group">
                  {t('home.intro.cta')}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {t('home.services.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t('home.services.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/services">
              <Button variant="outline" size="lg" className="rounded-xl px-8 group">
                {t('home.services.cta')}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-semibold uppercase tracking-wider text-sm">
              {t('home.testimonials.badge')}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              {t('home.testimonials.title')}
            </h2>
          </motion.div>

          <TestimonialsCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent" />
        
        {/* Animated shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-white/10"
            style={{ top: '10%', left: '5%' }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-white/5"
            style={{ bottom: '-10%', right: '-5%' }}
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl opacity-90 mb-10 leading-relaxed">
              {t('home.cta.text')}
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
              <Link href="/process">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl px-8 py-6 text-lg font-semibold border-white/30 text-white hover:bg-white/10 transition-all duration-300"
                >
                  {t('home.cta.secondary')}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
