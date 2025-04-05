"use client";
import { useRouter } from "next/navigation";
import { useLenisScrollTo } from "@/utils/useLenisScrollTo";

export function useHandleNavigation(pathname: string, toggleMenu?: () => void) {
	const router = useRouter();
	const scrollTo = useLenisScrollTo();

	const handleNavigation = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		item: { href: string; type: string }
	) => {
		event.preventDefault();

		if (item.type === "external") {
			window.open(item.href, "_blank");
		}

		if (item.type === "page") {
			if (pathname !== item.href) {
				router.push(item.href);
			} else {
				scrollTo("body");
			}
		}

		if (item.type === "section") {
			const sectionId = item.href.split("#")[1];

			if (pathname === "/") {
				scrollTo(`#${sectionId}`);
			} else {
				router.push(item.href);
			}
		}

		if (toggleMenu) toggleMenu();
	};

	return handleNavigation;
}
