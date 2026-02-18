import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer group" onClick={onHomeClick}>
            <Gamepad2 className="h-8 w-8 text-purple-500 group-hover:text-purple-400 transition-colors" />
            <span className="ml-2 text-xl font-bold font-display tracking-wider text-white group-hover:text-purple-100 transition-colors">
              NAPI<span className="text-purple-500">GAMES</span>
            </span>
          </div>
          
          {/* Language toggle removed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;