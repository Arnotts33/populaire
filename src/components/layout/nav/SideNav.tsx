import styles from "./SideNav.module.css";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./animation";
import { scrollToTop } from "@/utils/scrollToTop";
import Link from "next/link";

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
	return (
		<motion.div
			className={styles.menu}
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<div className={styles.menuBody}>
				<nav className={styles.nav}>
					<div className={styles.navHeader}>
						<p className={styles.navTitle}>Populaire</p>
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
									onClick={toggleMenu}
									target={item.target}
								>
									{item.title}
								</Link>
							</motion.div>
						);
					})}
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
