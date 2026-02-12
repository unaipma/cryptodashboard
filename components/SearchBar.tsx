"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
    onSearch: (term: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-slate-400" />
            </div>
            <input
                type="text"
                className="block w-full p-4 pl-10 text-sm text-white border border-slate-700 rounded-lg bg-slate-800 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400 outline-none"
                placeholder="Buscar Bitcoin, Ethereum..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}