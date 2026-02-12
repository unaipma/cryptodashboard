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

export async function getCoinHistory(id: string, days: string = "7") {
    try {
        const res = await fetch(
            `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`,
            {
                next: { revalidate: 60 },

                headers: { 'Accept': 'application/json' }
            }
        );

        if (!res.ok) {
            if (res.status === 429) throw new Error("Rate Limit: Demasiadas peticiones");
            throw new Error("Error en la API");
        }

        const data = await res.json();

        return data.prices.map((item: [number, number]) => {
            const date = new Date(item[0]);


            let label = "";
            if (days === "1") {

                label = date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });
            } else if (days === "365") {

                label = date.toLocaleDateString('es-ES', { month: 'short', year: '2-digit' });
            } else {

                label = date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
            }

            return {
                date: label,
                price: item[1],
            };
        });
    } catch (error) {
        console.error("Fallo al obtener historial:", error);
        throw error;
    }
}