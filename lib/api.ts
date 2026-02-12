const BASE_URL = "https://api.coingecko.com/api/v3";

export async function getCoins() {

    const res = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
        { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Error al obtener las monedas");
    return res.json();
}

export async function getTrendingCoins() {
    const res = await fetch(
        `${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false`,
        { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return res.json();
}

export async function getCoinHistory(id: string) {
    const res = await fetch(
        `${BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7&interval=daily`,
        { next: { revalidate: 3600 } }/*Update in one hour */
    );

    if (!res.ok) {
        throw new Error(`No se pudo cargar el historial de ${id}`);
    }

    const data = await res.json();

    return data.prices.map((item: [number, number]) => ({
        date: new Date(item[0]).toLocaleDateString('es-ES', { weekday: 'short' }),
        price: item[1],
    }));
}