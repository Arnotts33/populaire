"use client";
import { useEffect } from "react";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import styles from "./page.module.css";
import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Dwitches from "./_sections/Dwitches";
import Gallery from "./_sections/Gallery";
import BarAManger from "./_sections/BarAManger";
import StMich from "./_sections/StMich";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";
import { useLenis } from "lenis/react";

export default function Home() {
	const scrollTo = useLenisScrollTo();
	const lenis = useLenis();

	// Handle scrolling to sections from other pages
	useEffect(() => {
		const scrollTarget = sessionStorage.getItem("scrollTarget");

		if (scrollTarget) {
			// Ensure Lenis is ready and the page is fully loaded
			const timer = setTimeout(() => {
				if (lenis) {
					lenis.start();
					scrollTo(`#${scrollTarget}`);
				}
				sessionStorage.removeItem("scrollTarget");
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [scrollTo, lenis]);

	return (
		<>
			<SmoothScrollProvider>
				<Hero />
				<About />
				<Dwitches />
				<Gallery />
				<BarAManger />
				<StMich />
			</SmoothScrollProvider>
		</>
	);
}
