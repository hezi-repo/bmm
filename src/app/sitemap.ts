import { db, schema } from '@/db'
import { headers } from 'next/headers'
import type { MetadataRoute } from 'next'


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 获取当前请求的 host
  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') === 'https' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}`

  // 从数据库获取所有标签
  const allTags = await db.select().from(schema.publicTags)

  return [
    {
      url: baseUrl,
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...allTags.map((tag) => ({
      url: `${baseUrl}/tag/${tag.name}`,
      lastModified: tag.updatedAt as Date,
      priority: 0.8,
    })),
  ]

} 