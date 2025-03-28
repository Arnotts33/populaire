'use client";';
import Image from "next/image";
import logoImg from "@/assets/images/logo-header.svg";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<>
			<header className={styles.header}>
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
			// Burger Menu on Scroll
			<div className={styles.headerButtonContainer}>
				<div className={styles.headerButton}>
					<div className={styles.burger}></div>
				</div>
			</div>
		</>
	);
};
export default Header;
