'use client';

import { useEffect } from 'react';

interface HeroSectionProps {
  width?: number;
  height?: number;
}

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

export default function HeroSection({ width = 1080, height = 1080 }: HeroSectionProps) {
  useEffect(() => {
    const initUnicornStudio = () => {
      const u = window.UnicornStudio;
      
      if (u && u.init) {
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', () => {
            u.init?.();
          });
        } else {
          u.init();
        }
      } else {
        window.UnicornStudio = { isInitialized: false };
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js';
        script.onload = () => {
          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
              window.UnicornStudio?.init?.();
            });
          } else {
            window.UnicornStudio?.init?.();
          }
        };
        
        (document.head || document.body).appendChild(script);
      }
    };

    initUnicornStudio();
  }, []);

  return (
    <div className="hero-section">
      <div
        data-us-project="QoyfkN3hKVMOFRYYPBop"
        style={{ width: `${width}px`, height: `${height}px` }}
      />
    </div>
  );
}
