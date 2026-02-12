
import { GoogleGenAI } from "@google/genai";

export async function askDanganAI(query: string, villageContext: string) {
  // Always use the latest API key from process.env.API_KEY directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: query,
      config: {
        // Move system context to systemInstruction for better model steering
        systemInstruction: `Anda adalah asisten virtual resmi untuk Desa Dangan. Desa Dangan adalah desa futuristik yang fokus pada teknologi, keberlanjutan, dan kesejahteraan warga.
Info Desa: ${villageContext}

Berikan jawaban yang ramah, informatif, dan ringkas dalam Bahasa Indonesia. Gunakan gaya bahasa yang futuristik namun tetap sopan.`,
        temperature: 0.7,
        topP: 0.9,
      }
    });

    // Access .text directly as a property, not a method, as per SDK guidelines
    return response.text || "Maaf, saya sedang mengalami gangguan sinyal digital. Silakan coba lagi nanti.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Terjadi kesalahan dalam memproses permintaan Anda. Pastikan sistem sudah terkonfigurasi dengan benar.";
  }
}
