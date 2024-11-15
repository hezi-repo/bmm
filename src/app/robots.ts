import type { MetadataRoute } from 'next'
import { headers } from 'next/headers'
 
export default function robots(): MetadataRoute.Robots {
  const headersList = headers()
  const host = headersList.get('host')
  const protocol = headersList.get('x-forwarded-proto') === 'https' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}`

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/login/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}