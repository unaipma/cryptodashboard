export default function Footer() {
    return (
        <footer className="border-t border-slate-800 bg-slate-950 py-8 mt-12">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm">
                    Built with <span className="text-blue-400">Next.js 15</span> & <span className="text-blue-400">Tailwind</span> by Unai Pastor.
                </p>
                <p className="text-slate-600 text-xs mt-2">
                    Data provided by CoinGecko API • {new Date().getFullYear()}
                </p>
            </div>
        </footer>
    );
}