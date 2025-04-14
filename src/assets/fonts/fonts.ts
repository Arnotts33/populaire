import { Poppins, Bebas_Neue, Abril_Fatface } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-poppins",
	display: "swap",
});

export const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bebas-neue",
	display: "swap",
});

export const nectoMono = localFont({
	src: "./NectoMono-Regular.woff",
	variable: "--font-necto-mono",
});

export const abrilFatface = Abril_Fatface({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-abril-fatface",
	display: "swap",
});
