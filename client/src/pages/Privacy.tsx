/* Design: Warm Pragmatism - Legal page with clear sections and warm styling */

import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';

export default function Privacy() {
  const { t } = useLanguage();

  const sections = [
    {
      title: t('privacy.collection.title'),
      content: t('privacy.collection.text'),
    },
    {
      title: t('privacy.use.title'),
      content: t('privacy.use.text'),
    },
    {
      title: t('privacy.sharing.title'),
      content: t('privacy.sharing.text'),
    },
    {
      title: t('privacy.security.title'),
      content: t('privacy.security.text'),
    },
    {
      title: t('privacy.retention.title'),
      content: t('privacy.retention.text'),
    },
    {
      title: t('privacy.rights.title'),
      content: t('privacy.rights.text'),
    },
    {
      title: t('privacy.contact.title'),
      content: t('privacy.contact.text'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background texture-paper py-16 md:py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('privacy.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('privacy.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
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
