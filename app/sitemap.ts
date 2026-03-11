import type { MetadataRoute } from "next";

const BASE_URL = "https://www.aikrpan.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Delovno pravo hub
    {
      url: `${BASE_URL}/delovno-pravo/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/delovno-pravo/odpoved/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/delovno-pravo/odpravnina/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/delovno-pravo/regres/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/delovno-pravo/minimalna-placa/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    // Other hubs
    {
      url: `${BASE_URL}/pogodbe/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/dedovanje/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/druzinsko-pravo/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Navodila
    {
      url: `${BASE_URL}/navodila/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // Segment pages
    {
      url: `${BASE_URL}/za-podjetja/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/za-pravnike/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Bridge + blog
    {
      url: `${BASE_URL}/brezplacna-pravna-pomoc/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blog/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    // O meni (E-E-A-T)
    {
      url: `${BASE_URL}/o-meni/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
