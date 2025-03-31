"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import footerPattern from "@/assets/images/footer-pattern.svg";
import { navItems } from "@/constants/navItems";
import { handleNavigation } from "@/utils/handleNavigation";
import instagramIcon from "@/assets/icons/instagram.svg";

const Footer = () => {
	const pathname = usePathname();
	const router = useRouter();

	return (
		<footer className={styles.footer} id="footer">
			<Image
				src={footerPattern}
				alt="Footer checkered pattern"
				layout="intrinsic"
				className={styles.footerPattern}
			/>
			<div className={styles.footerContent}>
				<nav className={styles.footerNav}>
					<ul>
						{navItems
							.filter(
								(item) => item.title !== "Contact" && item.title !== "Venir"
							)
							.map((item, index) => {
								return (
									<li key={index}>
										<Link
											key={index}
											href={item.href}
											// target={item.target}
											onClick={(event) =>
												handleNavigation(event, item, pathname, router)
											}
											className={styles.footerLink}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
					</ul>
				</nav>

				<div className={styles.footerButtons}>
					{navItems
						.filter(
							(item) => item.title === "Contact" || item.title === "Venir"
						)
						.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								onClick={(event) =>
									handleNavigation(event, item, pathname, router)
								}
								className={styles.button}
							>
								{item.title}
							</Link>
						))}
				</div>
				<div className={styles.footerTitle}>
					<h1>Populaire</h1>
				</div>
				<div className={styles.footerInfo}>
					<div className={styles.footerInfoItem}>
						<h3>Adresse :</h3>
						<p>48 rue des Faures</p>
						<p>33000 Bordeaux</p>
					</div>
					<div className={styles.footerInfoItem}>
						<h3>Horaires d'ouverture :</h3>
						<p>Mercredi - Samedi : 12h - 19h30</p>
						<p>Jeudi - Vendredi : 12h - 00h</p>
						<p>Dimanche : 11h - 16h</p>
					</div>
					<div className={styles.footerInfoItem}>
						<a
							href="https://www.instagram.com/populairedwitcherie/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.instaLogo}
						>
							<Image src={instagramIcon} alt="Instagram logo" width={40} />
						</a>
					</div>
				</div>

				<div className={styles.footerCredits}>
					<span>© Populaire 2025</span>
					<span>Site Credits</span>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
