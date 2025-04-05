"use client";
import { useLenis } from "lenis/react";

export const useLenisScrollTo = () => {
	const lenis = useLenis();

	const scrollTo = (target: string | HTMLElement | number) => {
		if (!lenis) {
			// Fallback for when Lenis is not available
			if (typeof target === "number") {
				window.scrollTo({ top: target, behavior: "smooth" });
				return;
			}

			let element: HTMLElement | null = null;

			if (typeof target === "string") {
				// If it's a selector
				if (target === "body" || target === "top") {
					window.scrollTo({ top: 0, behavior: "smooth" });
					return;
				}
				// If it's an ID without the # prefix, add it
				const selector = target.startsWith("#") ? target : `#${target}`;
				element = document.querySelector(selector);
			} else {
				element = target;
			}

			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
			return;
		}

		// Lenis is available
		if (typeof target === "number") {
			lenis.scrollTo(target, {
				duration: 1.5,
				easing: (t) => 1 - Math.pow(1 - t, 3),
			});
			return;
		}

		if (typeof target === "string") {
			if (target === "body" || target === "top") {
				lenis.scrollTo(0, {
					duration: 1.5,
					easing: (t) => 1 - Math.pow(1 - t, 3),
				});
				return;
			}

			// If it's an ID without the # prefix, add it
			const selector = target.startsWith("#") ? target : `#${target}`;
			const element = document.querySelector(selector);

			if (element) {
				lenis.scrollTo(element as HTMLElement, {
					offset: 0,
					duration: 1.5,
					easing: (t) => 1 - Math.pow(1 - t, 3),
				});
			}
		} else {
			// It's an HTML element
			lenis.scrollTo(target, {
				offset: 0,
				duration: 1.5,
				easing: (t) => 1 - Math.pow(1 - t, 3),
			});
		}
	};

	return scrollTo;
};
