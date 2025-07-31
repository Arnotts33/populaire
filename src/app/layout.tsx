import type { Metadata } from "next";
import "../styles/globals.css";
import {
	poppins,
	bebasNeue,
	nectoMono,
	abrilFatface,
} from "@/assets/fonts/fonts";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
	title: {
		default: "Populaire Dwitcherie Bordeaux",
		template: "%s | Populaire Dwitcherie Bordeaux",
	},
	description:
		"Populaire, sandwiches et restaurant bar à manger à Bordeaux, quartier Saint Michel. Sandwiches cuisinés, vin nature, ambiance conviviale.",
	icons: {
		icon: "/favicon.ico",
	},
	keywords: [
		"sandwich Bordeaux",
		"bar à vins Bordeaux",
		"restaurant Bordeaux Saint Michel",
		"vins naturels Bordeaux",
		"bar à manger Bordeaux",
		"restaurant Bordeaux",
		"Cave à vins Bordeaux",
	],
	openGraph: {
		title: "Populaire Dwitcherie Bordeaux",
		description:
			"Populaire à Bordeaux St Michel : vins naturels, sandwiches artisanaux et cave à emporter.",
		url: "https://populairebordeaux.fr",
		type: "website",
		locale: "fr_FR",
		siteName: "Populaire Bordeaux",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
		},
	},
	alternates: {
		canonical: "https://populairebordeaux.fr",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body
				className={`${poppins.variable} ${bebasNeue.variable} ${nectoMono.variable} ${abrilFatface.variable}`}
			>
				<SmoothScrollProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</SmoothScrollProvider>
			</body>
		</html>
	);
}
