// hooks/useHeaderAnimation.ts
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject, useEffect } from "react";
import { usePathname } from "next/navigation";

export const useHeaderAnimation = (
	buttonRef: RefObject<HTMLDivElement | null>
) => {
	const pathname = usePathname();

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const btn = buttonRef.current;
		if (!btn) return;

		const setupScrollTriggers = () => {
			// Clear any existing ScrollTriggers to avoid duplicates
			ScrollTrigger.getAll().forEach((st) => st.kill());

			gsap.to(btn, {
				scrollTrigger: {
					trigger: document.documentElement,
					start: 0,
					end: 400,
					onLeave: () =>
						gsap.to(btn, { scale: 1, duration: 0.25, ease: "power1.out" }),
					onEnterBack: () =>
						gsap.to(btn, { scale: 0, duration: 0.25, ease: "power1.out" }),
				},
			});

			gsap.to(btn, {
				scrollTrigger: {
					trigger: "#footer",
					start: "top 25%",
					onEnter: () =>
						gsap.to(btn, { scale: 0, duration: 0.25, ease: "power1.out" }),
					onLeaveBack: () =>
						gsap.to(btn, { scale: 1, duration: 0.25, ease: "power1.out" }),
				},
			});
		};

		// Set up initial triggers
		setupScrollTriggers();

		// Add a small delay to ensure DOM is ready
		const timeout = setTimeout(() => {
			ScrollTrigger.refresh();
		}, 300);

		return () => clearTimeout(timeout);
	}, [pathname]); // Re-run when pathname changes
};
