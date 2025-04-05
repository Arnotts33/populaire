"use client";

import styles from "./SideNav.module.css";
import { motion } from "framer-motion";
import { menuSlide, slide } from "./animation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import mascotte from "@/assets/images/mascotte-animate.gif";
import { useHandleNavigation } from "@/utils/useHandleNavigation";
import Image from "next/image";
import { navItems } from "@/constants/navItems";

const SideNav = ({ toggleMenu }: { toggleMenu: () => void }) => {
	const pathname = usePathname();
	const handleNavigation = useHandleNavigation(pathname, toggleMenu);

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
						<p className={styles.navTitle}>On va où ?</p>
					</div>
					<ul>
						{navItems.map((item, index) => (
							<motion.li
								key={index}
								custom={index}
								variants={slide}
								animate="enter"
								exit="exit"
								initial="initial"
							>
								<Link
									href={item.href}
									onClick={(event) => handleNavigation(event, item)}
									className={styles.link}
								>
									{item.title}
								</Link>
							</motion.li>
						))}
					</ul>
					<Image src={mascotte} alt="Mascotte" className={styles.mascotte} />
				</nav>
				<div className={styles.menuFooter}>
					<a
						href="https://www.instagram.com/populairedwitcherie/?hl=fr"
						target="_blank"
					>
						Instagram
					</a>
					<a href="https://lefooding.com/restaurants/populaire" target="_blank">
						Le Fooding
					</a>
				</div>
			</div>
		</motion.div>
	);
};

export default SideNav;
