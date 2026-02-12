"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function getRealAIAnalysis(coinName: string, price: number, change24h: number) {
    try {

        if (!process.env.GEMINI_API_KEY) {
            throw new Error("Falta la GEMINI_API_KEY en las variables de entorno");
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `Actúa como un analista financiero experto. 
    Analiza la moneda ${coinName}. Precio: $${price}, Cambio 24h: ${change24h}%.
    Devuelve un JSON con este formato: {"rating": "Buy", "reason": "explicación corta"}.
    No escribas nada más que el JSON.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();

        text = text.replace(/```json/g, "").replace(/```/g, "").trim();

        return JSON.parse(text);
    } catch (error) {
        console.error(" Error detallado de IA:", error);

        return {
            rating: "En espera",
            reason: "La IA está procesando otros datos o la API Key no es válida."
        };
    }
}