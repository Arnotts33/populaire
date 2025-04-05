import type { Metadata } from "next";
import "../styles/globals.css";
import {
	poppins,
	bebasNeue,
	nectoMono,
	abrilFatface,
} from "@/assets/fonts/fonts";
import Header from "@/components/layout/header/Header";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
	title: "Populaire Dwitcherie",
	description:
		"Restaurant sandwiches bar à manger à Bordeaux, quartier Saint Michel",
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-32x32.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
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
