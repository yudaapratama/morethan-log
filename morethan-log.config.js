const CONFIG = {
  // profile setting
  profile: {
    name: 'yudha',
    image: 'https://notion-avatar.vercel.app/api/img/eyJmYWNlIjo5LCJub3NlIjoxMSwibW91dGgiOjIsImV5ZXMiOjksImV5ZWJyb3dzIjowLCJnbGFzc2VzIjowLCJoYWlyIjozNCwiYWNjZXNzb3JpZXMiOjAsImRldGFpbHMiOjAsImJlYXJkIjoxMiwiY2hyaXN0bWFzIjowLCJmbGlwIjowLCJjb2xvciI6InJnYmEoMjU1LCAwLCAwLCAwKSIsInNoYXBlIjoibm9uZSJ9',  // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    discription: 'web developer',
    linkedin: 'yudaa-pratama',
    email: 'yudhaprathamaa@gmail.com',
    github: 'yudaapratama',
    instagram: 'more_dev_min',
  },
  projects: [
    {
      name: '',
      href: ''
    }
  ],
  // blog setting
  blog: {
    title: 'my-post',
    description: 'welcome to my-post!',
    theme: 'auto' // ['light', 'dark', 'auto']
  },

  // CONFIG configration
  link: 'https://morethan-log.vercel.app',
  since: 2022, // If leave this empty, current year will be used.
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  postsPerPage: 10,
  ogImageGenerateURL: 'https://og-image-korean.vercel.app', // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
  },

  // notion configuration
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
    // if you prefer not to make your database public, use this!!!
    accessToken: process.env.NOTION_ACCESS_TOKEN
  },

  // plugin configuration
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: '' // ex. G-9N3FE0117Q
    }
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: '' // ex. qvdR1gXMirk_DCUOKPgRnxu2x6fqSPrquYnEZZMjR9w
    }
  },
  utterances: {
    enable: true,
    config: {
      repo: 'morethanmin/morethan-log',
      'issue-term': 'og:title',
      label: '💬 Utterances',
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
module.exports = CONFIG
