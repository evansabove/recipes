import axios from "axios";

const loadSlugsFromStoryblok = async () => {
  const cv = new Date().getTime();
  const apiPath = `https://api.storyblok.com/v1/cdn/stories?token=${process.env.STORYBLOK_KEY}&cv=${cv}&version=production&resolve_links&resolve_relations=author`;

  const data = await axios
    .get(apiPath)
    .then((res) => {
      return res?.data ?? null;
    })
    .catch((err) => {
      console.log("Error getting Stories", err);
      return null;
    });

    return data.stories.map((story: any) => `/${story.full_slug}`)
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_KEY
      },
    ],
    '@pinia/nuxt',
    '@nuxt/ui',
    '@nuxtjs/robots',
    'nuxt-simple-sitemap'
  ],
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  ssr: true,
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const slugs = await loadSlugsFromStoryblok()

      nitroConfig.prerender?.routes?.push(...slugs)
    }
  },
  sitemap: {
    exclude: [
      '/404',
    ],
    xsl: false
  },
  robots: {
    configPath: 'robots.config',
  }
})
