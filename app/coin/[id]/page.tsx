import { getCoinHistory } from "@/lib/api";
import CoinChart from "@/components/CoinChart";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AIAdvisor from "@/components/AIAdvisor";
import { getCoins } from "@/lib/api";
import { formatCurrency } from "@/lib/utils";
import { Coin } from "@/types/coin";

import { getRealAIAnalysis } from "@/lib/ai-service";


export default async function CoinPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const history = await getCoinHistory(id);
    const allCoins: Coin[] = await getCoins();
    const currentCoin = allCoins.find((c: Coin) => c.id === id);

    const aiAnalysis = currentCoin
        ? await getRealAIAnalysis(currentCoin.name, currentCoin.current_price, currentCoin.price_change_percentage_24h)
        : { rating: "N/A", reason: "No data available" };

    return (
        <main className="min-h-screen bg-slate-950 text-white p-6 md:p-10">
            <div className="max-w-6xl mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                        <h1 className="text-4xl font-bold capitalize">{id} Overview</h1>
                        <CoinChart data={history} />
                    </div>

                    <div className="space-y-6">
                        {currentCoin && (
                            <AIAdvisor analysis={aiAnalysis} />
                        )}

                        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
                            <h4 className="text-slate-400 text-sm mb-4">Market Stats</h4>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Rank</span>
                                    <span>#{currentCoin?.market_cap_rank || 'N/A'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-slate-500">Market Cap</span>
                                    <span>{formatCurrency(currentCoin?.market_cap || 0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}