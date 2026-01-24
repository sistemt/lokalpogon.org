// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeNova from 'starlight-theme-nova';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightThemeNova()],
			components: {
				Footer: './src/components/Footer.astro',
			},
			title: 'Prvolokalna',
			locales: {
				root: {
					label: 'Hrvatski',
					lang: 'hr',
				},
			},
			pagefind: false,
			sidebar: [
				{ label: 'Plan', slug: 'plan' },
				{ label: 'Statut', slug: 'statut' },
				{ label: 'Kontakt', slug: 'contact' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
