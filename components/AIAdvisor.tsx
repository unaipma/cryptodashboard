"use client";
import { Sparkles, Info, BrainCircuit } from "lucide-react";

interface AIAnalysis {
    rating: string;
    reason: string;
}

export default function AIAdvisor({ analysis }: { analysis: AIAnalysis }) {
    // Definimos colores basados en la recomendación de la IA real
    const getColor = (rating: string) => {
        if (rating.includes("Buy")) return "text-emerald-400";
        if (rating.includes("Sell")) return "text-red-400";
        return "text-slate-400";
    };

    return (
        <div className="relative overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/10 p-6 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
                <BrainCircuit className="w-5 h-5 text-blue-400 animate-pulse" />
                <h3 className="font-bold text-lg text-blue-100">Live AI Analysis</h3>
            </div>

            <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                    <span className="text-sm text-slate-400">Verdict:</span>
                    <span className={`text-xl font-black uppercase ${getColor(analysis.rating)}`}>
                        {analysis.rating}
                    </span>
                </div>

                <p className="text-slate-300 text-sm italic leading-relaxed">
                    "{analysis.reason}"
                </p>

                <div className="mt-4 flex items-center gap-2 text-[10px] text-blue-400/60 uppercase tracking-widest font-bold">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Powered by Gemini 2.5 Pro
                </div>
            </div>
        </div>
    );
}