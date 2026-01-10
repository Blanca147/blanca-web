/* Design: Warm Pragmatism - Legal page with clear sections and warm styling */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function Disclaimer() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('disclaimer.no-license.title'),
      content: t('disclaimer.no-license.text'),
    },
    {
      title: t('disclaimer.no-claims.title'),
      content: t('disclaimer.no-claims.text'),
    },
    {
      title: t('disclaimer.no-guarantees.title'),
      content: t('disclaimer.no-guarantees.text'),
    },
    {
      title: t('disclaimer.no-liability.title'),
      content: t('disclaimer.no-liability.text'),
    },
    {
      title: t('disclaimer.info-only.title'),
      content: t('disclaimer.info-only.text'),
    },
    {
      title: t('disclaimer.jurisdiction.title'),
      content: t('disclaimer.jurisdiction.text'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background texture-paper py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('disclaimer.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('disclaimer.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
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
