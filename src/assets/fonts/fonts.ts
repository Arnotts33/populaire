import { Poppins, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600"],
	variable: "--font-poppins",
});

export const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--font-bebas-neue",
});

export const nectoMono = localFont({
	src: "./NectoMono-Regular.woff",
	variable: "--font-necto-mono",
});
