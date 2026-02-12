"use client";

import { useState, useEffect } from "react";
import { getCoinHistory } from "@/lib/api";
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer
} from "recharts";
import { formatCurrency } from "@/lib/utils";

const ranges = [
    { label: "1D", value: "1" },
    { label: "1W", value: "7" },
    { label: "1M", value: "30" },
    { label: "1Y", value: "365" },
];

export default function PriceChart({ coinId, initialData }: { coinId: string, initialData: any[] }) {
    const [data, setData] = useState(initialData);
    const [range, setRange] = useState("7");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const updateChart = async () => {
            setLoading(true);
            try {
                const newData = await getCoinHistory(coinId, range);
                setData(newData);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        };
        if (range !== "7" || data !== initialData) updateChart();
    }, [range, coinId]);

    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-200">Price Analysis</h3>
                <div className="flex gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
                    {ranges.map((r) => (
                        <button
                            key={r.value}
                            onClick={() => setRange(r.value)}
                            className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${range === r.value
                                ? "bg-blue-600 text-white shadow-lg"
                                : "text-slate-400 hover:text-white"
                                }`}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className={`h-[350px] w-full transition-opacity duration-300 ${loading ? 'opacity-30' : 'opacity-100'}`}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                        <XAxis
                            dataKey="date"
                            stroke="#64748b"
                            fontSize={10}
                            tickLine={false}
                            axisLine={false}

                            interval="preserveStartEnd"
                            minTickGap={30}
                        />
                        <YAxis
                            hide
                            domain={['auto', 'auto']}
                        />
                        <Tooltip
                            contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}

                            formatter={(value: number | string | undefined) => {
                                if (value === undefined) return ["N/A", "Precio"];
                                const numericValue = typeof value === 'string' ? parseFloat(value) : value;
                                return [formatCurrency(numericValue), "Precio"];
                            }}
                        />
                        <Area
                            type="monotone"
                            dataKey="price"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorPrice)"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}