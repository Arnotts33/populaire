"use client";
import { usePathname, useRouter } from "next/navigation";
import styles from "./Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import footerPattern from "@/assets/images/footer-pattern.svg";
import { navItems } from "@/constants/navItems";
import { useHandleNavigation } from "@/hooks/useHandleNavigation";
import instagramIcon from "@/assets/icons/instagram.svg";
import OpeningTimes from "@/components/ui/OpeningTimes";

const Footer = () => {
	const pathname = usePathname();
	const handleNavigation = useHandleNavigation(pathname);
	const router = useRouter();

	return (
		<footer className={styles.footer} id="footer">
			<Image
				src={footerPattern}
				alt="Footer checkered pattern"
				className={styles.footerPattern}
			/>
			<div className={styles.footerContent}>
				<nav className={styles.footerNav}>
					<ul className={styles.footerNavList}>
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
											onClick={(event) => handleNavigation(event, item)}
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
								onClick={(event) => handleNavigation(event, item)}
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
						<h3 className={styles.itemTitle}>Adresse :</h3>
						<p className={styles.itemText}>48 rue des Faures</p>
						<p className={styles.itemText}>33000 Bordeaux</p>
					</div>
					<div className={styles.footerInfoItem}>
						<OpeningTimes />
					</div>
					<div className={styles.footerInfoItem}>
						<a
							href="https://www.instagram.com/populairedwitcherie/"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.instaLogo}
						>
							<Image
								src={instagramIcon}
								alt="Instagram logo"
								width={40}
								height={40}
								className={styles.instaLogoImage}
							/>
						</a>
					</div>
				</div>

				<div className={styles.footerCredits}>
					<span className={styles.creditsText}>© Populaire 2025</span>
					<span className={styles.creditsText}>Site Credits</span>
				</div>
			</div>
		</footer>
	);
};
export default Footer;
