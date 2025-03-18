import { defineConfig } from 'vite'
import { getDirname } from '@adonisjs/core/helpers'
import inertia from '@adonisjs/inertia/client'
import vue from '@vitejs/plugin-vue'
import adonisjs from '@adonisjs/vite/client'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import Components from 'unplugin-vue-components/vite'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.ts' } }),
    {
      enforce: 'pre',
      ...mdx({
        providerImportSource: '@mdx-js/vue',
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      }),
    },
    vue(),
    adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] }),
    Components({
      dirs: ['inertia/components'],
      dts: true,
    }),
  ],

  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
