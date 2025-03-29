export function scrollToTop(
	event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
	event.preventDefault();
	window.scrollTo({ top: 0, behavior: "smooth" });
}
