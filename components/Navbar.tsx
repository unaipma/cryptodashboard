import Link from "next/link";
import { LayoutDashboard, Github } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/70 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">

                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-500 transition-colors">
                        <LayoutDashboard className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-bold text-lg tracking-tight">Crypto<span className="text-blue-400">Dash</span></span>
                </Link>


                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/unaipma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}