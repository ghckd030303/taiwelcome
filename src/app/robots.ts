import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Yeti', // 네이버 봇 전용 설정
        allow: '/',
      },
      {
        userAgent: 'Googlebot', // 구글 봇 전용 설정
        allow: '/',
      },
    ],
    sitemap: 'https://taiwelcome.com/sitemap.xml',
  }
}