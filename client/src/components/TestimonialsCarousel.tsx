/* Dynamic Elegance - Interactive testimonials carousel */

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export default function TestimonialsCarousel() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = language === 'en' ? [
    {
      name: "Maria Rodriguez",
      location: "Chicago, IL",
      text: "Blanca was incredibly thorough with our property inspection. Her documentation helped us understand exactly what needed attention. Highly recommend her services!",
      rating: 5
    },
    {
      name: "James Thompson",
      location: "Aurora, IL",
      text: "Professional, knowledgeable, and genuinely helpful. Blanca took the time to explain everything and connected us with trusted contractors.",
      rating: 5
    },
    {
      name: "Sandra Martinez",
      location: "Naperville, IL",
      text: "The detailed photo documentation was exactly what we needed. Blanca's guidance throughout the process was invaluable.",
      rating: 5
    },
    {
      name: "Robert Chen",
      location: "Joliet, IL",
      text: "Excellent service from start to finish. Blanca's expertise and clear communication made a stressful situation much easier to handle.",
      rating: 5
    }
  ] : [
    {
      name: "María Rodríguez",
      location: "Chicago, IL",
      text: "Blanca fue increíblemente minuciosa con la inspección de nuestra propiedad. Su documentación nos ayudó a entender exactamente qué necesitaba atención. ¡Recomiendo mucho sus servicios!",
      rating: 5
    },
    {
      name: "James Thompson",
      location: "Aurora, IL",
      text: "Profesional, conocedora y genuinamente servicial. Blanca se tomó el tiempo para explicar todo y nos conectó con contratistas de confianza.",
      rating: 5
    },
    {
      name: "Sandra Martínez",
      location: "Naperville, IL",
      text: "La documentación fotográfica detallada fue exactamente lo que necesitábamos. La orientación de Blanca durante todo el proceso fue invaluable.",
      rating: 5
    },
    {
      name: "Roberto Chen",
      location: "Joliet, IL",
      text: "Excelente servicio de principio a fin. La experiencia de Blanca y su comunicación clara hicieron que una situación estresante fuera mucho más fácil de manejar.",
      rating: 5
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Testimonial Card */}
      <Card className="rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-card to-secondary/30 border-0">
        <CardContent className="p-8 md:p-12 relative">
          {/* Quote Icon */}
          <div className="absolute top-6 right-6 opacity-10">
            <Quote className="w-24 h-24 text-primary" />
          </div>
          
          <div className="relative z-10">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-orange-500 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            
            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 transition-all duration-500">
              "{testimonials[currentIndex].text}"
            </blockquote>
            
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-lg text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>

        {/* Dots */}
        <div className="flex gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : 'bg-muted hover:bg-primary/50'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}
