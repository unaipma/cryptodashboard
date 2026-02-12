import { Coin } from "@/types/coin";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function TrendingCard({ coin }: { coin: Coin }) {
    const isPositive = coin.price_change_percentage_24h > 0;

    return (
        <Link href={`/coin/${coin.id}`} className="block">
            <div className="bg-slate-900/50 hover:bg-slate-800/80 transition-all border border-slate-700/50 rounded-2xl p-6 cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                    <img src={coin.image} alt={coin.name} className="w-12 h-12 rounded-full shadow-lg group-hover:scale-110 transition-transform" />
                    <div>
                        <h3 className="font-bold text-lg">{coin.name}</h3>
                        <span className="text-slate-400 text-sm">{coin.symbol.toUpperCase()}</span>
                    </div>
                </div>

                <div className="flex justify-between items-end">
                    <span className="text-2xl font-mono font-semibold tracking-tight">
                        {formatCurrency(coin.current_price)}
                    </span>
                    <div className={`flex items-center gap-1 text-sm font-bold ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                        {formatPercentage(coin.price_change_percentage_24h)}
                    </div>
                </div>
            </div>
        </Link>
    );
}