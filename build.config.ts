import {defineBuildConfig} from 'unbuild'

export default defineBuildConfig({
    entries: [
        './src/index',
        './src/plugin',
    ],
    failOnWarn: false,
    clean: true,
    declaration: true,
    externals: ["@nuxt/schema", "#app", "#build", "#build/apollo.options.mjs"],
})
