// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            meta: [
                {
                    name: 'robots',
                    content: 'noindex'
                },

            ]
        }
    },
    devtools: { enabled: true },
    modules: ['@nuxt/content'],
    routeRules: {
        '/': { prerender: true }
    }
})
