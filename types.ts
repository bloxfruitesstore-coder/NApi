export type Language = 'ar';

export interface CurrencyOption {
  id: string;
  amount: string; // e.g. "100 Diamonds"
  price: number | string; // e.g. 10 or "???"
  currencyCode: string; // e.g. "DH"
  bonus?: string; // e.g. "+10 Bonus"
}

export interface Game {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  options: CurrencyOption[];
  inputLabel: string; // e.g. "Player ID" or "Riot ID"
  instructions: string;
}

export interface Translation {
  heroTitle: string;
  heroSubtitle: string;
  featuredGames: string;
  whyChooseUs: string;
  fastSecure: string;
  trustedGamers: string;
  worksAnywhere: string;
  placeOrder: string;
  selectAmount: string;
  enterId: string;
  contactSupport: string;
  footerAbout: string;
  footerTerms: string;
  copyright: string;
  aiAssistant: string;
  aiWelcome: string;
  sendOnWhatsapp: string;
  price: string;
  searchGames: string;
  labelCountry: string;
  labelCity: string;
  placeholderCountry: string;
  placeholderCity: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}