import { defineLive } from "next-sanity/live";
import { client } from "./client";

if (!process.env.SANITY_API_READ_TOKEN) {
  throw new Error("❌ SANITY_API_READ_TOKEN is missing in .env file");
}

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: process.env.SANITY_API_READ_TOKEN,
});
