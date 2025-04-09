import { type MetadataRoute } from "next";

export async function GET(): Promise<MetadataRoute.Sitemap> {
	return [
		{
			url: "https://populairebordeaux.fr/",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1.0,
		},
		{
			url: "https://populairebordeaux.fr/contact",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 0.8,
		},
		// Ajout d'autres URLs manuellement si besoin (future page SEO locale par ex.)
	];
}
