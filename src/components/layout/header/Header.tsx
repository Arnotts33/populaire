"use client";
import Image from "next/image";
import logoImg from "@/assets/images/logo-header.svg";
import styles from "./Header.module.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";
import SideNav from "../nav/SideNav";
import Link from "next/link";

const Header = () => {
	const button = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

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
						<Link href="#">Dwitches</Link>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<Link href="#">Bar à Manger</Link>
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
				{isActive && <SideNav toggleMenu={handleToggleMenu} />}
			</AnimatePresence>
		</>
	);
};
export default Header;
