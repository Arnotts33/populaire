import { useEffect } from "react";
import { useLenis } from "lenis/react";

export const useScrollLockWithLenis = (isLocked: boolean) => {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		if (isLocked) {
			lenis.stop();
			document.body.classList.add("no-doc-scroll");
		} else {
			lenis.start();
			document.body.classList.remove("no-doc-scroll");
		}
	}, [isLocked, lenis]);
};
