// hooks/useHeaderAnimation.ts
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

export const useHeaderAnimation = (
	buttonRef: RefObject<HTMLDivElement | null>
) => {
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		const btn = buttonRef.current;
		if (!btn) return;

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
	}, []);
};
