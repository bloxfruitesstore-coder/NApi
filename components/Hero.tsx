import React from 'react';
import { Translation } from '../types';
import { ChevronRight } from 'lucide-react';

interface HeroProps {
  t: Translation;
  onExploreClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ t, onExploreClick }) => {
  return (
    <div className="relative overflow-hidden bg-slate-950 py-20 sm:py-32 lg:pb-32 xl:pb-36">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold font-display tracking-tight text-white mb-6 animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 glow-text">
            {t.heroTitle}
          </span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
          {t.heroSubtitle}
        </p>
        <div className="flex justify-center gap-4">
          <button 
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-lg overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.5)] hover:shadow-[0_0_30px_rgba(147,51,234,0.7)]"
          >
            <span className="relative z-10 flex items-center">
              {t.featuredGames}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 transition-transform duration-500 ease-in-out" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;