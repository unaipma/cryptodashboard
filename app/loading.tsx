export default function Loading() {
    return (
        <main className="min-h-screen bg-slate-950 p-10">
            <div className="max-w-4xl mx-auto space-y-8">

                <div className="h-12 w-64 bg-slate-800 rounded-lg animate-pulse" />


                <div className="h-14 w-full bg-slate-800 rounded-lg animate-pulse" />


                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="h-20 w-full bg-slate-900 rounded-xl border border-slate-800 animate-pulse flex items-center p-4">
                            <div className="h-10 w-10 bg-slate-800 rounded-full mr-4" />
                            <div className="flex-1 space-y-2">
                                <div className="h-4 w-32 bg-slate-800 rounded" />
                                <div className="h-3 w-16 bg-slate-800 rounded" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}