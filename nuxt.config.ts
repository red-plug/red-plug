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
    content: {
        highlight: {
            theme: 'github-dark',
            langs: [
                'js',
                'html',
                'php',
                'sql',
                'vue-html',
                'vue',
                'bash'
            ]
        }
    },
    devtools: { enabled: true },
    modules: ['@nuxt/content', "@nuxtjs/tailwindcss", "@nuxt/image"],
    routeRules: {
        '/': { prerender: true }
    }
})