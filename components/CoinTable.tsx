"use client";

import { useState } from "react";
import { Coin } from "@/types/coin";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { formatCurrency, formatPercentage } from "@/lib/utils";

export default function CoinTable({ initialCoins }: { initialCoins: Coin[] }) {
    const [coins, setCoins] = useState(initialCoins);

    const handleSearch = (term: string) => {
        const filtered = initialCoins.filter((coin) =>
            coin.name.toLowerCase().includes(term.toLowerCase()) ||
            coin.symbol.toLowerCase().includes(term.toLowerCase())
        );
        setCoins(filtered);
    };

    return (
        <>
            <SearchBar onSearch={handleSearch} />

            <div className="bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-slate-800">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-950/80 text-slate-400 uppercase text-xs font-semibold tracking-widest">
                            <tr>
                                <th className="p-5">Moneda</th>
                                <th className="p-5">Precio</th>
                                <th className="p-5">24h %</th>
                                <th className="p-5 hidden md:table-cell text-right">Cap. Mercado</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800">
                            {coins.map((coin) => (
                                <tr
                                    key={coin.id}
                                    className="group hover:bg-blue-500/5 transition-all duration-300 relative"
                                >
                                    {/* Celda de Moneda con Link que cubre toda el área para mejor UX */}
                                    <td className="p-5 relative">
                                        <Link href={`/coin/${coin.id}`} className="flex items-center gap-4">
                                            <img
                                                src={coin.image}
                                                alt={coin.name}
                                                className="w-10 h-10 rounded-full grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                            <div>
                                                <span className="font-bold block text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                                                    {coin.name}
                                                </span>
                                                <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                                                    {coin.symbol}
                                                </span>
                                            </div>
                                        </Link>
                                    </td>

                                    <td className="p-5 font-mono text-sm font-medium text-slate-200">
                                        {formatCurrency(coin.current_price)}
                                    </td>

                                    <td className={`p-5 font-bold text-sm`}>
                                        <div className={`inline-flex items-center px-2.5 py-1 rounded-md ${coin.price_change_percentage_24h > 0
                                            ? 'text-emerald-400 bg-emerald-400/10'
                                            : 'text-red-400 bg-red-400/10'
                                            }`}>
                                            {coin.price_change_percentage_24h > 0 ? '▲' : '▼'}
                                            <span className="ml-1">{formatPercentage(Math.abs(coin.price_change_percentage_24h))}</span>
                                        </div>
                                    </td>

                                    <td className="p-5 text-slate-400 hidden md:table-cell text-right font-mono text-sm">
                                        {formatCurrency(coin.market_cap)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}