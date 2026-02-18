import React from 'react';
import { Game, Translation } from '../types';
import { Zap, Loader2 } from 'lucide-react';

interface GameCardProps {
  game: Game;
  t: Translation;
  onClick: (game: Game) => void;
  isLoading?: boolean;
}

const GameCard: React.FC<GameCardProps> = ({ game, t, onClick, isLoading }) => {
  return (
    <div 
      onClick={() => !isLoading && onClick(game)}
      className={`group relative bg-slate-900 rounded-xl overflow-hidden border border-slate-800 cursor-pointer transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] hover:-translate-y-1 ${isLoading ? 'scale-95 border-purple-500/50 ring-2 ring-purple-500/20' : ''}`}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <img 
          src={game.image} 
          alt={game.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3 px-2 py-1 bg-slate-950/60 backdrop-blur-md rounded border border-slate-700 text-xs text-cyan-400 font-bold uppercase tracking-wider">
          {game.category}
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white font-display mb-1">{game.name}</h3>
          <div className="flex items-center text-purple-400 text-sm font-medium">
            <Zap className="w-4 h-4 mr-1 fill-purple-400" />
            <span>Instant Top-Up</span>
          </div>
        </div>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] flex items-center justify-center z-10 animate-fade-in">
             <div className="flex flex-col items-center">
               <Loader2 className="w-10 h-10 text-purple-500 animate-spin mb-2" />
               <span className="text-xs text-purple-300 font-medium tracking-wider">LOADING...</span>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;