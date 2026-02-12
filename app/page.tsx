import { getCoins, getTrendingCoins } from "@/lib/api";
import CoinTable from "@/components/CoinTable";
import TrendingCard from "@/components/TrendingCard";
import { Coin } from "@/types/coin";

export default async function Home() {

  const [coins, trendingData] = await Promise.all([
    getCoins(),
    getTrendingCoins()
  ]);


  const trending = trendingData as Coin[];

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-10">
      <div className="max-w-5xl mx-auto space-y-12">


        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-300">Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trending.map((coin) => (
              <TrendingCard key={coin.id} coin={coin} />
            ))}
          </div>
        </section>


        <section>
          <h2 className="text-2xl font-bold mb-6 text-slate-300">All Assets</h2>
          <CoinTable initialCoins={coins} />
        </section>

      </div>
    </main>
  );
}