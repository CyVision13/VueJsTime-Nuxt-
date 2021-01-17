import fa from "./utility/i18n/fa.json";

export default {
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: "vuejstime",
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    // plugins: [{ src: '~/plugins/myPlugin', mode: 'client' }],
    plugins: [
        "~/plugins/myPlugin",
        "~/plugins/veeValidate",
        "~/plugins/i18n",
        "~/plugins/axios",
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
    ],

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        // https://go.nuxtjs.dev/pwa
        "@nuxtjs/pwa",
        "nuxt-i18n",
    ],
    i18n: {
        locales: [{
            code: "fa",
            name: "Persian",
        }, ],
        defaultLocale: "fa",
        vueI18n: {
            fallbackLocale: "fa",
            messages: {
                fa: fa.messages,
            },
        },
    },
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {},

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        transpile: ["vee-validate/dist/rules"],
    },
    router: {
        middleware: "apiMiddleware",
        parseQuery(query) {
            return require("qs").parse(query);
        },
        stringifyQuery(query) {
            const result = require("qs").stringify(query);
            return result ? "?" + result : "";
        },
    },
};