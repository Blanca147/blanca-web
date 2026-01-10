/* Dynamic Elegance - Interactive service card with 3D hover effects */

import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="perspective-1000"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Card
        className="rounded-2xl border-0 shadow-lg overflow-hidden transition-all duration-500 h-full"
        style={{
          transform: isHovered
            ? `rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg) translateZ(20px)`
            : 'rotateY(0) rotateX(0) translateZ(0)',
          boxShadow: isHovered
            ? '0 25px 50px -12px rgba(0, 128, 128, 0.25)'
            : '0 10px 30px -15px rgba(0, 0, 0, 0.1)',
        }}
      >
        <CardContent className="p-8 relative overflow-hidden">
          {/* Animated background gradient */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500"
            style={{
              opacity: isHovered ? 0.1 : 0,
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
            }}
          />
          
          {/* Floating particles effect */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-primary/20"
                  style={{
                    left: `${20 + i * 15}%`,
                    animation: `float ${2 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          )}
          
          <div className="relative z-10">
            {/* Icon with animated background */}
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${
                isHovered ? 'scale-110' : ''
              }`}
              style={{
                background: isHovered
                  ? 'linear-gradient(135deg, var(--primary), var(--accent))'
                  : 'linear-gradient(135deg, rgba(0, 128, 128, 0.1), rgba(0, 128, 128, 0.05))',
              }}
            >
              <Icon
                className={`w-8 h-8 transition-all duration-500 ${
                  isHovered ? 'text-white' : 'text-primary'
                }`}
              />
            </div>
            
            {/* Title with underline animation */}
            <h3 className="text-xl font-bold text-foreground mb-3 relative inline-block">
              {title}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: isHovered ? '100%' : '0%' }}
              />
            </h3>
            
            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
          
          {/* Corner accent */}
          <div
            className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              opacity: isHovered ? 0.1 : 0.05,
              transform: isHovered ? 'scale(1.5)' : 'scale(1)',
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}
