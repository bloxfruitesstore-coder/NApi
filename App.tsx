import React, { useState, useEffect } from 'react';
import { GAMES, TRANSLATIONS } from './constants';
import { Game, Language } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GameCard from './components/GameCard';
import TopUpForm from './components/TopUpForm';
import Footer from './components/Footer';
import AiSupport from './components/AiSupport';
import { ShieldCheck, Zap, Globe2, Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [loadingGameId, setLoadingGameId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const language: Language = 'ar';
  const t = TRANSLATIONS[language];

  // Force Arabic/RTL
  useEffect(() => {
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
  }, []);

  const handleGameClick = (game: Game) => {
    setLoadingGameId(game.id);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setSelectedGame(game);
      setLoadingGameId(null);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 800);
  };

  const filteredGames = GAMES.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`min-h-screen bg-slate-950 text-white selection:bg-purple-500 selection:text-white font-arabic`}>
      <Navbar 
        onHomeClick={() => setSelectedGame(null)} 
      />

      {selectedGame ? (
        <TopUpForm 
          game={selectedGame} 
          t={t} 
          onBack={() => setSelectedGame(null)} 
        />
      ) : (
        <main>
          <Hero t={t} onExploreClick={() => {
            document.getElementById('games-grid')?.scrollIntoView({ behavior: 'smooth' });
          }} />

          {/* Features Section */}
          <section className="py-12 bg-slate-950 relative border-b border-slate-900">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 {[
                   { icon: Zap, title: t.fastSecure, desc: "Instant delivery within seconds." },
                   { icon: ShieldCheck, title: t.trustedGamers, desc: "100% Secure transactions." },
                   { icon: Globe2, title: t.worksAnywhere, desc: "Global and local payment methods." }
                 ].map((feature, idx) => (
                   <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-900/30 border border-slate-800 hover:bg-slate-900/50 transition-colors">
                     <feature.icon className="w-10 h-10 text-cyan-400 mb-4" />
                     <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                     <p className="text-slate-400 text-sm">{feature.desc}</p>
                   </div>
                 ))}
               </div>
             </div>
          </section>

          {/* Games Grid */}
          <section id="games-grid" className="py-20 bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 md:mb-0">
                  {t.featuredGames}
                </h2>
                
                <div className="relative w-full md:w-64">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className={`h-5 w-5 text-slate-500 mr-2`} />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-10 pr-10 py-2 border border-slate-700 rounded-full leading-5 bg-slate-900 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-800 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 sm:text-sm transition-colors"
                    placeholder={t.searchGames}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredGames.map((game) => (
                  <GameCard 
                    key={game.id} 
                    game={game} 
                    t={t}
                    onClick={handleGameClick}
                    isLoading={loadingGameId === game.id}
                  />
                ))}
                {filteredGames.length === 0 && (
                  <div className="col-span-full text-center py-20 text-slate-500">
                    No games found matching "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      )}

      <Footer t={t} />
      
      <AiSupport 
        t={t} 
        currentGameName={selectedGame?.name} 
      />
    </div>
  );
};

export default App;