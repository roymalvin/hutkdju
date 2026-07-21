import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Ganti URL ini dengan domain asli website Anda saat sudah dipublikasikan (deploy)
  const baseUrl = 'https://hutkdju.site'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
