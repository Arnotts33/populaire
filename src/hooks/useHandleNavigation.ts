"use client";
import { useRouter } from "next/navigation";
import { useLenisScrollTo } from "@/hooks/useLenisScrollTo";
import { useLenis } from "lenis/react";

export function useHandleNavigation(pathname: string, toggleMenu?: () => void) {
	const router = useRouter();
	const scrollTo = useLenisScrollTo();
	const lenis = useLenis();

	const handleNavigation = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		item: { href: string; type: string }
	) => {
		event.preventDefault();

		// Function to handle navigation after any menu closing
		const performNavigation = () => {
			// For external links
			if (item.type === "external") {
				window.open(item.href, "_blank");
				return;
			}

			// For page navigation
			if (item.type === "page") {
				// If we're already on the page, scroll to top
				if (pathname === item.href) {
					if (lenis) {
						lenis.scrollTo(0, {
							duration: 1.5,
							easing: (t) => 1 - Math.pow(1 - t, 3), // Cubic ease out
						});
					} else {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}
				} else {
					// Navigate to the new page
					router.push(item.href);
				}
				return;
			}

			// For section navigation
			if (item.type === "section") {
				const sectionId = item.href.split("#")[1];

				// Check if the target element exists on the current page
				const targetElement = document.getElementById(sectionId);

				if (pathname === "/") {
					// If we're on the home page and the section exists
					if (targetElement) {
						if (lenis) {
							lenis.scrollTo(targetElement, {
								offset: 0,
								duration: 1.5,
								easing: (t) => 1 - Math.pow(1 - t, 3),
							});
						} else {
							targetElement.scrollIntoView({ behavior: "smooth" });
						}
					} else {
						// Section doesn't exist, go to top
						if (lenis) {
							lenis.scrollTo(0);
						} else {
							window.scrollTo({ top: 0, behavior: "smooth" });
						}
					}
				} else {
					// We're on a different page
					// Store the target section to scroll to after navigation
					// sessionStorage.setItem("scrollTarget", sectionId);
					router.push(item.href);
				}
			}
		};

		// If we need to close the menu first
		if (toggleMenu) {
			toggleMenu();
			// Add delay to allow menu animation to complete
			setTimeout(performNavigation, 300);
		} else {
			// No menu to close, navigate immediately
			performNavigation();
		}
	};

	return handleNavigation;
}
