import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // برای توکن‌های احراز هویت باید false باشد
  token: process.env.SANITY_API_READ_TOKEN,
})