"use client";
import Image from "next/image";
import logoImg from "@/assets/images/logo-header.svg";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
	const header = useRef<HTMLDivElement>(null);
	const button = useRef<HTMLDivElement>(null);
	const [isActive, setIsActive] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		if (isActive) setIsActive(false);
	}, [pathname]);

	return (
		<>
			<header ref={header} className={styles.header}>
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
						<a href="#">Dwitches</a>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<a href="#">Bar à Manger</a>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<a href="#">Contact</a>
						<div className={styles.indicator}></div>
					</div>

					<div className={styles.el}>
						<a href="#">Venir</a>
						<div className={styles.indicator}></div>
					</div>
				</nav>
			</header>

			{/* Burger Menu on Scroll */}
			<div ref={button} className={styles.headerButtonContainer}>
				<div className={styles.headerButton}>
					<div className={styles.burger}></div>
				</div>
			</div>
		</>
	);
};
export default Header;
