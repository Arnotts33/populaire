// "use client";

import { useRouter } from "next/navigation";

export function handleNavigation(
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
	item: { href: string; type: string },
	pathname: string,
	router: ReturnType<typeof useRouter>,
	toggleMenu?: () => void
) {
	event.preventDefault();

	if (item.type === "external") {
		window.open(item.href, "_blank");
	} else if (item.type === "page") {
		if (pathname !== item.href) {
			router.push(item.href);
		} else {
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	} else if (item.type === "section") {
		if (pathname === "/") {
			const sectionId = item.href.split("#")[1];
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			router.push(item.href);
		}
	}

	if (toggleMenu) toggleMenu();
}
