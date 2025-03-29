"use client";
import Image from "next/image";
import logoImg from "@/assets/images/logo-header.svg";
import styles from "./Header.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { cubicBezier, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import SideNav from "../nav/SideNav";
import Link from "next/link";

const Header = () => {
	const button = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	// DISABLE SCROLL ON BODY WHEN MENU IS OPEN
	useEffect(() => {
		if (isActive) document.body.classList.add("no-doc-scroll");

		return () => {
			document.body.classList.remove("no-doc-scroll");
		};
	}, [isActive]);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	// GSAP ANIMATION FOR MENU BUTTON ON SCROLL
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(button.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: window.innerHeight,

				onLeave: () => {
					gsap.to(button.current, {
						scale: 1,
						duration: 0.25,
						ease: "power1.out",
					});
				},

				onEnterBack: () => {
					gsap.to(button.current, {
						scale: 0,
						duration: 0.25,
						ease: "power1.out",
					});
				},
			},
		});
	}, []);

	function handleToggleMenu() {
		setIsActive(!isActive);
	}

	return (
		<>
			<header id="header" className={styles.header}>
				<div>
					<a href="/">
						<Image
							src={logoImg}
							alt="Logo"
							className={styles.logo}
						/>
					</a>
				</div>

				<nav className={styles.nav}>
					<div className={styles.el}>
						<Link href="/#dwitches">Dwitches</Link>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<Link href="/#bar-a-manger">Bar à Manger</Link>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<Link href="/contact">Contact</Link>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<a
							href="https://maps.app.goo.gl/xeZxjjX8fh2jLzEQ8"
							target="_blank"
						>
							Venir
						</a>
						<div className={styles.indicator}></div>
					</div>
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
							width={60}
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
								height={10}
								x={10}
								y={45}
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
			<div ref={button} className={styles.headerButtonContainer}>
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
