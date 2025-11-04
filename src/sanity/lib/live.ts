import { defineLive } from "next-sanity";
import { client } from './client'

const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("SANITY_API_READ_TOKEN is not set");
}

export const { sanityFetch, SanityLive } = defineLive({
  client: client.withConfig({ token }), // توکن را به صورت صریح اضافه کنید
  serverToken: token,
  browserToken: token,
  fetchOptions: {
    revalidate: 0,
  },
});