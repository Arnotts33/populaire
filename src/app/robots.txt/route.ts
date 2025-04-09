import { type MetadataRoute } from "next";

export function GET(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
			},
		],
		sitemap: "https://populairebordeaux.fr/sitemap.xml",
	};
}
