"use client";

import styles from "./SideNav.module.css";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./animation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mascotte from "@/assets/images/mascotte-animate.gif";
import Image from "next/image";

const navItems = [
	{ title: "Accueil", href: "/", target: "_self" },
	{ title: "Contact", href: "/contact", target: "_self" },
	{
		title: "Venir",
		href: "https://maps.app.goo.gl/xeZxjjX8fh2jLzEQ8",
		target: "_blank",
	},
];

interface SideNavProps {
	toggleMenu: () => void;
}

const SideNav = ({ toggleMenu }: SideNavProps) => {
	const pathname = usePathname();

	function scrollToTop(
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: "smooth" });
		toggleMenu();
	}

	return (
		<motion.div
			className={styles.menu}
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			onClick={(e) => e.stopPropagation()}
		>
			<div className={styles.menuBody}>
				<nav className={styles.nav}>
					<div className={styles.navHeader}>
						<p className={styles.navTitle}>On va où?</p>
					</div>
					{navItems.map((item, index) => {
						return (
							<motion.div
								className={styles.link}
								key={index}
								custom={index}
								variants={slide}
								animate="enter"
								exit="exit"
								initial="initial"
							>
								<Link
									href={item.href}
									onClick={(event) => {
										if (pathname === item.href) {
											scrollToTop(event);
										} else {
											toggleMenu();
										}
									}}
									target={item.target}
								>
									{item.title}
								</Link>
							</motion.div>
						);
					})}
					<Image
						src={mascotte}
						alt="Mascotte"
						className={styles.mascotte}
					/>
				</nav>
			</div>

			<div className={styles.menuFooter}>
				<a
					href="https://www.instagram.com/populairedwitcherie/?hl=fr"
					target="_blank"
				>
					Insagram
				</a>
				<a
					href="https://lefooding.com/restaurants/populaire"
					target="_blank"
				>
					Le Fooding
				</a>
			</div>
		</motion.div>
	);
};
export default SideNav;
