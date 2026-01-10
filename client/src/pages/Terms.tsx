/* Design: Warm Pragmatism - Legal page with clear sections and warm styling */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function Terms() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('terms.services.title'),
      content: t('terms.services.text'),
    },
    {
      title: t('terms.no-guarantees.title'),
      content: t('terms.no-guarantees.text'),
    },
    {
      title: t('terms.client-responsibility.title'),
      content: t('terms.client-responsibility.text'),
    },
    {
      title: t('terms.payment.title'),
      content: t('terms.payment.text'),
    },
    {
      title: t('terms.limitation.title'),
      content: t('terms.limitation.text'),
    },
    {
      title: t('terms.jurisdiction.title'),
      content: t('terms.jurisdiction.text'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background texture-paper py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('terms.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('terms.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 md:py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-6">
            {sections.map((section, index) => (
              <Card key={index} className="rounded-2xl shadow-md">
                <CardContent className="p-8">
                  <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
