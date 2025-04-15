"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { cubicBezier, motion, AnimatePresence } from "framer-motion";
import { useHandleNavigation } from "@/hooks/useHandleNavigation";
import { navItems } from "@/constants/navItems";
import SideNav from "../nav/SideNav";
import logoImg from "@/assets/images/logo-header.svg";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import BurgerButton from "@/components/ui/burgerButton/BurgerButton";

const Header = () => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();
	const handleNavigation = useHandleNavigation(pathname);

	// DISABLE SCROLL ON BODY WHEN MENU IS OPEN
	useBodyScrollLock(isActive);

	// GSAP ANIMATION FOR MENU BUTTON ON SCROLL
	useHeaderAnimation(buttonRef);

	function handleToggleMenu() {
		setIsActive(!isActive);
	}

	return (
		<>
			<header id="header" className={styles.header}>
				<div>
					<Link href="/">
						<Image
							src={logoImg}
							alt="Logo"
							className={styles.logo}
							priority={true}
						/>
					</Link>
				</div>

				<nav>
					<ul className={styles.nav}>
						{navItems
							.filter((item) => item.title !== "Accueil")
							.map((item, index) => {
								return (
									<li key={index} className={styles.el}>
										<Link
											href={item.href}
											onClick={(event) => handleNavigation(event, item)}
											className={styles.link}
										>
											{item.title}
										</Link>
										<div className={styles.indicator}></div>
									</li>
								);
							})}
					</ul>
				</nav>

				{/* Burger Menu on Small Devices */}
				<div className={styles.mobileMenuContainer}>
					<BurgerButton toggleMenu={handleToggleMenu} isActive={isActive} />
				</div>
			</header>

			{/* Burger Menu on Scroll */}
			<div ref={buttonRef} className={styles.headerButtonContainer}>
				<div onClick={handleToggleMenu} className={styles.headerButton}>
					<BurgerButton toggleMenu={handleToggleMenu} isActive={isActive} />
				</div>
			</div>

			<AnimatePresence mode="wait">
				{isActive && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{
							duration: 0.8,
							ease: cubicBezier(0.25, 0.1, 0.25, 1),
						}}
						className={styles.overlay}
						onClick={handleToggleMenu}
					></motion.div>
				)}
			</AnimatePresence>

			<AnimatePresence mode="wait">
				{isActive && <SideNav toggleMenu={handleToggleMenu} />}
			</AnimatePresence>
		</>
	);
};
export default Header;
