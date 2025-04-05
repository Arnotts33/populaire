"use client";
import Image from "next/image";
import logoImg from "@/assets/images/logo-header.svg";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { cubicBezier, motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useHandleNavigation } from "@/hooks/useHandleNavigation";
import { navItems } from "@/constants/navItems";
import SideNav from "../nav/SideNav";
import Link from "next/link";
import { useLenis } from "lenis/react";

const Header = () => {
	const button = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();
	const lenis = useLenis();
	const handleNavigation = useHandleNavigation(pathname);

	// Store scroll position reference to avoid losing it
	const scrollPosRef = useRef(0);

	// DISABLE SCROLL ON BODY WHEN MENU IS OPEN
	useEffect(() => {
		if (isActive) {
			// Store current scroll position
			scrollPosRef.current = window.scrollY;

			// Lock the scroll
			if (lenis) lenis.stop();

			document.body.classList.add("no-scroll");
			document.body.style.top = `-${scrollPosRef.current}px`;
		} else {
			// Re-enable scrolling
			document.body.classList.remove("no-scroll");
			document.body.style.top = "";

			if (lenis) {
				lenis.start();
				// Restore scroll position after a brief delay
				// setTimeout(() => {
				// 	window.scrollTo(0, scrollPosRef.current);
				// }, 25);
			}
		}

		return () => {
			// Cleanup
			document.body.classList.remove("no-scroll");
			document.body.style.top = "";
			if (lenis) lenis.start();
		};
	}, [isActive, lenis]);

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	// GSAP ANIMATION FOR MENU BUTTON ON SCROLL
	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to(button.current, {
			scrollTrigger: {
				trigger: document.documentElement,
				start: 0,
				end: 400,

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

		// HIDE MENU BUTTON AT FOOTER
		gsap.to(button.current, {
			scrollTrigger: {
				trigger: "#footer",
				start: "top 25%",

				onEnter: () => {
					gsap.to(button.current, {
						scale: 0,
						duration: 0.25,
						ease: "power1.out",
					});
				},

				onLeaveBack: () => {
					gsap.to(button.current, {
						scale: 1,
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
