module.exports = {
    plugins: [require('daisyui')],
    content: [
        `content/**/*.md`,
        `components/**/*.{vue,js,ts}`,
        `layouts/**/*.vue`,
        `pages/**/*.vue`,
        `composables/**/*.{js,ts}`,
        `plugins/**/*.{js,ts}`,
        `utils/**/*.{js,ts}`,
        `App.{js,ts,vue}`,
        `app.{js,ts,vue}`,
        `Error.{js,ts,vue}`,
        `error.{js,ts,vue}`,
        `app.config.{js,ts}`
      ],
    daisyui: {
        darkTheme: "redplugdark",
        themes: [
            {
                redpluglight: {
                    "primary": "#ff2638",
                    "secondary": "#ea580c",
                    "accent": "#06b6d4",
                    "neutral": "#0b0b0b",
                    "base-100": "#e7e5e4",
                    "info": "#0094fe",
                    "success": "#5da100",
                    "warning": "#fde047",
                    "error": "#ff2a53",
                },
                redplugdark: {
                    "primary": "#ff2638",
                    "secondary": "#fef08a",
                    "accent": "#06b6d4",
                    "neutral": "#0b0b0b",
                    "base-100": "#1d232a",
                    "info": "#0094fe",
                    "success": "#5da100",
                    "warning": "#facc15",
                    "error": "#ff2a53",
                },
            },
        ],
    },
};
