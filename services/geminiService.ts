import { GoogleGenAI } from "@google/genai";

let ai: GoogleGenAI | null = null;

// Initialize the API client if the key is available
if (process.env.API_KEY) {
  ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
}

export const getGeminiResponse = async (prompt: string, context?: string): Promise<string> => {
  if (!ai) {
    return "AI Support is currently unavailable. Please check your configuration.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    const systemInstruction = `You are a helpful customer support assistant for 'NAPIGAMES', a game top-up website in Morocco.
    Your goal is to help users find their Player IDs, recommend top-up packages based on their budget (in Moroccan Dirham/DH), and explain how to order via WhatsApp.
    
    Context:
    ${context || "No specific game context provided."}
    
    Keep answers short, friendly, and gaming-oriented. Use emojis.
    If asked about prices, give estimates based on standard rates (e.g., 100 diamonds ~ 15 DH).
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "I couldn't generate a response. Try again!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I'm having trouble connecting to the server right now.";
  }
};