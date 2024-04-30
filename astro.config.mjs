import compress from 'astro-compress'
import { defineConfig } from 'astro/config'
import devtoolBreakpoints from 'astro-devtool-breakpoints'
import markdoc from '@astrojs/markdoc'
import mdx from '@astrojs/mdx'
import metaTags from 'astro-meta-tags'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [mdx(), sitemap(), tailwind(), markdoc(), metaTags(), devtoolBreakpoints(), compress()],
})
