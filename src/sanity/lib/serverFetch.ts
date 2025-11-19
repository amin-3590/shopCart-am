import { client } from "./client";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sanityFetch({ query, params = {} }: { query: string; params?: any }) {
    try {
        const data = await client.fetch(query, params);
        return { data };
    } catch (error) {
        console.error("❌ Sanity Fetch Error:", error);
        return { data: [] };
    }
}
