"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cubicBezier, motion, AnimatePresence } from "framer-motion";
import { useHandleNavigation } from "@/hooks/useHandleNavigation";
import { navItems } from "@/constants/navItems";
import SideNav from "../nav/SideNav";
import logoImg from "@/assets/images/logo-header.svg";
import { useHeaderAnimation } from "@/hooks/useHeaderAnimation";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";

const Header = () => {
	const buttonRef = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();
	const handleNavigation = useHandleNavigation(pathname);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

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
						<Image src={logoImg} alt="Logo" className={styles.logo} />
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
					<button
						className={styles.mobileBurger}
						onClick={handleToggleMenu}
						aria-controls="mobile-menu"
						aria-expanded={isActive}
					>
						<svg
							className={`${styles.hamburger} ${
								isActive ? styles.mobileBurgerActive : ""
							}`}
							viewBox="0 0 100 100"
							width={50}
						>
							<rect
								className={styles.topLine}
								width={80}
								height={10}
								x={10}
								y={25}
							></rect>
							<rect
								className={styles.middleLine}
								width={80}
								height={6}
								x={10}
								y={52}
							></rect>
							<rect
								className={styles.middleLine}
								width={80}
								height={6}
								x={10}
								y={42}
							></rect>
							<rect
								className={styles.bottomLine}
								width={80}
								height={10}
								x={10}
								y={65}
							></rect>
						</svg>
					</button>
				</div>
			</header>

			{/* Burger Menu on Scroll */}
			<div ref={buttonRef} className={styles.headerButtonContainer}>
				<div onClick={handleToggleMenu} className={styles.headerButton}>
					<div
						className={`${styles.burger} ${
							isActive ? styles.burgerActive : ""
						}`}
					></div>
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
