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
				{
					label: 'Dokumenti',
					items: [
						{ label: 'Pregled', slug: 'dokumenti' },
						{
							label: 'interni',
							items: [
								{ label: 'Operativa', slug: 'operatio' },
								{ label: 'Ekonomia', slug: 'ekonomia' },
								{ label: 'Tehnika', slug: 'tehne' },
								{ label: 'Theoria', slug: 'theoria' },
								{ label: 'Strategija', slug: 'strategia' },
							],
						},
						{
							label: 'službeni',
							items: [
								{ label: 'Statut', slug: 'statut' },
							],
						},
					],
				},
				{ label: 'Kontakt', slug: 'contact' },
			],
			customCss: ['./src/styles/custom.css'],
		}),
	],
});
