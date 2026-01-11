/* Design: Dynamic Elegance - Contact page with animated form */

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(t('contact.success'));
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '(331) 220-17824',
      href: 'tel:+133122017824',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@blancaproservices.com',
      href: 'mailto:info@blancaproservices.com',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: t('contact.info.location'),
      value: t('contact.info.location.value'),
      href: null,
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Clock,
      label: t('contact.info.hours'),
      value: t('contact.info.hours.value'),
      href: null,
      color: 'from-orange-500 to-amber-500',
      multiline: true
    }
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
              {language === 'en' ? 'Get In Touch' : 'Contácteme'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.hero.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors inline-block text-center w-full">
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-muted-foreground ${item.multiline ? 'whitespace-pre-line' : ''}`}>
                        {item.value}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-3xl shadow-2xl border-0 overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      {t('contact.form.title')}
                    </h2>
                    <p className="text-muted-foreground">
                      {language === 'en' 
                        ? 'Fill out the form below and I\'ll get back to you as soon as possible.'
                        : 'Complete el formulario a continuación y me pondré en contacto lo antes posible.'}
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground font-medium">
                          {t('contact.form.name')} *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="rounded-xl h-12 border-2 focus:border-primary transition-colors"
                          placeholder={language === 'en' ? 'Your full name' : 'Su nombre completo'}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-foreground font-medium">
                          {t('contact.form.email')} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="rounded-xl h-12 border-2 focus:border-primary transition-colors"
                          placeholder={language === 'en' ? 'your@email.com' : 'su@correo.com'}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">
                        {t('contact.form.phone')}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="rounded-xl h-12 border-2 focus:border-primary transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-foreground font-medium">
                        {t('contact.form.message')} *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="rounded-xl border-2 focus:border-primary transition-colors resize-none"
                        placeholder={language === 'en' 
                          ? 'Tell me about your property and how I can help...'
                          : 'Cuénteme sobre su propiedad y cómo puedo ayudar...'}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-gradient text-white rounded-xl py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                          {t('contact.form.sending')}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-5 h-5" />
                          {t('contact.form.submit')}
                        </span>
                      )}
                    </Button>
                  </form>

                  {/* Disclaimer */}
                  <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800">
                        {t('contact.disclaimer')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <CheckCircle2 className="w-8 h-8 text-primary" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                {language === 'en' ? 'What to Expect' : 'Qué Esperar'}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              {[
                {
                  title: language === 'en' ? 'Quick Response' : 'Respuesta Rápida',
                  desc: language === 'en' 
                    ? 'I typically respond within 24 hours during business days.'
                    : 'Normalmente respondo dentro de 24 horas en días hábiles.'
                },
                {
                  title: language === 'en' ? 'Free Consultation' : 'Consulta Gratuita',
                  desc: language === 'en'
                    ? 'Initial phone consultation to discuss your needs at no cost.'
                    : 'Consulta telefónica inicial para discutir sus necesidades sin costo.'
                },
                {
                  title: language === 'en' ? 'No Pressure' : 'Sin Presión',
                  desc: language === 'en'
                    ? 'No obligation to proceed. I\'m here to help and inform.'
                    : 'Sin obligación de proceder. Estoy aquí para ayudar e informar.'
                }
              ].map((item, index) => (
                <Card key={index} className="rounded-2xl shadow-lg border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
