import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-10-01",
  useCdn: false, // برای دریافت داده معتبر، CDN خاموش باشد
  token: process.env.SANITY_API_READ_TOKEN, // فقط سرور باید از این استفاده کند
});