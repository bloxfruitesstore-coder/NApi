import React from 'react';
import { Translation } from '../types';
import { Facebook, Twitter, Instagram } from 'lucide-react';

interface FooterProps {
  t: Translation;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-display font-bold text-white mb-4">NAPI<span className="text-purple-500">GAMES</span></h3>
            <p className="text-slate-500 text-sm max-w-xs">{t.heroSubtitle}</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">{t.footerAbout}</h4>
            <ul className="space-y-2 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-purple-400 transition-colors">{t.whyChooseUs}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">{t.contactSupport}</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">{t.footerTerms}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Social</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-sky-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-500 hover:text-pink-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
};

export default Footer;