"use client";

import styles from "./page.module.css";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Dwitches from "./_sections/Dwitches";
import Gallery from "./_sections/Gallery";
import BarAManger from "./_sections/BarAManger";
import StMich from "./_sections/StMich";

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
			}, 400);

			return () => clearTimeout(timer);
		}
	}, [scrollTo, lenis]);

	return (
		<>
			<Hero />
			<About />
			<Dwitches />
			<Gallery />
			<BarAManger />
			<StMich />
		</>
	);
}
