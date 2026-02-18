import React, { useState } from 'react';
import { Game, Translation, CurrencyOption } from '../types';
import { ArrowLeft, Send, MapPin } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface TopUpFormProps {
  game: Game;
  t: Translation;
  onBack: () => void;
}

const TopUpForm: React.FC<TopUpFormProps> = ({ game, t, onBack }) => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [selectedOption, setSelectedOption] = useState<CurrencyOption | null>(null);

  const handleOrder = () => {
    if (!selectedOption || !country || !city) return;

    const message = `Hello NAPIGAMES! 👋%0A%0AI want to order:%0A🎮 Game: ${game.name}%0A🌍 Country: ${country}%0A🏙 City: ${city}%0A💎 Package: ${selectedOption.amount}%0A💰 Price: ${selectedOption.price} ${selectedOption.currencyCode}`;
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto animate-fade-in">
      <button 
        onClick={onBack}
        className="flex items-center text-slate-400 hover:text-white transition-colors mb-6 group"
      >
        {/* Rotate arrow for RTL "Back" behavior */}
        <ArrowLeft className="h-5 w-5 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
        Back to Games
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Game Info Panel */}
        <div className="lg:col-span-1">
          <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 sticky top-24">
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full aspect-video object-cover rounded-xl mb-4 shadow-lg"
            />
            <h2 className="text-3xl font-display font-bold text-white mb-2">{game.name}</h2>
            <p className="text-slate-400 text-sm mb-6">{game.description}</p>
          </div>
        </div>

        {/* Order Form */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Step 1: Location Details */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-purple-400 text-sm font-bold mr-3 border border-slate-700">1</span>
              {t.enterId}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.labelCountry}</label>
                <div className="relative">
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder={t.placeholderCountry}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">{t.labelCity}</label>
                 <div className="relative">
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={t.placeholderCity}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg py-3 px-4 pl-10 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                  <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2: Select Package */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-purple-400 text-sm font-bold mr-3 border border-slate-700">2</span>
              {t.selectAmount}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {game.options.map((option) => (
                <div 
                  key={option.id}
                  onClick={() => setSelectedOption(option)}
                  className={`relative cursor-pointer rounded-xl p-4 border transition-all duration-200 ${
                    selectedOption?.id === option.id 
                      ? 'bg-purple-900/20 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.2)]' 
                      : 'bg-slate-950 border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {option.bonus && (
                    <div className="absolute -top-3 right-4 px-2 py-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {option.bonus}
                    </div>
                  )}
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="block text-lg font-bold text-white">{option.amount}</span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xl font-display font-bold text-cyan-400">{option.price} <span className="text-sm text-slate-500">{option.currencyCode}</span></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 3: Action */}
          <button
            disabled={!selectedOption || !country || !city}
            onClick={handleOrder}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-300 ${
              selectedOption && country && city
                ? 'bg-green-600 hover:bg-green-500 text-white shadow-[0_0_20px_rgba(22,163,74,0.4)] transform hover:-translate-y-1' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Send className="w-5 h-5 ml-2" />
            {t.sendOnWhatsapp}
          </button>
          
          <p className="text-center text-slate-500 text-sm">
            You will be redirected to WhatsApp to complete your secure payment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopUpForm;