import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

export const useBodyScrollLock = (isActive: boolean) => {
	const lenis = useLenis();
	const scrollPosRef = useRef(0);

	useEffect(() => {
		if (isActive) {
			scrollPosRef.current = window.scrollY;
			if (lenis) lenis.stop();

			document.body.classList.add("no-scroll");
			document.body.style.top = `-${scrollPosRef.current}px`;
		} else {
			document.body.classList.remove("no-scroll");
			document.body.style.top = "";

			if (lenis) {
				lenis.start();
				setTimeout(() => {
					window.scrollTo(0, scrollPosRef.current);
				}, 25);
			}
		}

		return () => {
			document.body.classList.remove("no-scroll");
			document.body.style.top = "";
			if (lenis) lenis.start();
		};
	}, [isActive, lenis]);
};
