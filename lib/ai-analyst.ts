

export type Recommendation = "Strong Buy" | "Buy" | "Hold" | "Sell" | "Strong Sell";

export function getAIRecommendation(priceChange: number, currentPrice: number): {
    rating: Recommendation;
    color: string;
    reason: string;
} {


    if (priceChange > 5) return {
        rating: "Strong Sell",
        color: "text-red-500",
        reason: "Asset is currently overbought. Technical indicators suggest a potential correction."
    };

    if (priceChange > 2) return {
        rating: "Sell",
        color: "text-red-400",
        reason: "Upward momentum is slowing down. Consider taking partial profits."
    };

    if (priceChange < -5) return {
        rating: "Strong Buy",
        color: "text-emerald-500",
        reason: "Significant dip detected. Historical support levels suggest a high-reward entry point."
    };

    if (priceChange < -2) return {
        rating: "Buy",
        color: "text-emerald-400",
        reason: "Healthy correction in progress. Accumulation phase recommended."
    };

    return {
        rating: "Hold",
        color: "text-slate-400",
        reason: "Market is consolidating. Wait for a clear breakout before taking new positions."
    };
}