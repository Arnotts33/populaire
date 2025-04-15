module.exports = {
	siteUrl: "https://populairebordeaux.fr",
	generateRobotsTxt: true,
	changefreq: "yearly",
	priority: 0.8,
	exclude: ["/404"],
	additionalPaths: async (config) => [
		await config.transform({ loc: "/contact", lastmod: new Date() }),
		// Ajouter des pages dynamiques ici si nécessaire
	],
};
