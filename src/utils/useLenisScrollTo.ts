"use client";
import { useLenis } from "lenis/react";

export const useLenisScrollTo = () => {
	const lenis = useLenis();

	const scrollTo = (selectorOrElement: string | HTMLElement) => {
		if (!lenis) return;

		let element: HTMLElement | null;

		if (typeof selectorOrElement === "string") {
			element = document.querySelector(selectorOrElement);
		} else {
			element = selectorOrElement;
		}

		if (element) {
			lenis.scrollTo(element, {
				offset: 0,
				duration: 1.2,
				easing: (t) => 1 - Math.pow(1 - t, 3),
			});
		}
	};

	return scrollTo;
};
