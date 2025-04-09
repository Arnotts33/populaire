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
	title: { default: "Populaire Bordeaux", template: "%s | Populaire Bordeaux" },
	description:
		"Restaurant sandwiches bar à manger à Bordeaux, quartier Saint Michel",
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
