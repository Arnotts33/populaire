import Image from "next/image";
import styles from "./not-found.module.css";
import panier from "@/assets/images/panier-hotdog.webp";
import Link from "next/link";

const NotFound = () => {
	return (
		<main className={styles.notFound}>
			<div className={styles.notFoundContainer}>
				<h1 className={styles.leftFour}>4</h1>
				<Image
					className={styles.notFoundImage}
					src={panier}
					alt="Panier à hotdog vide"
				/>
				<h1 className={styles.rightFour}>4</h1>
			</div>
			<div className={styles.notFoundTextContainer}>
				<p className={styles.notFoundText}>
					Oups... Plus rien à manger par ici!
				</p>
				<Link href={"/"} className={styles.homeLink}>
					Retour à l'accueil
				</Link>
			</div>
		</main>
	);
};
export default NotFound;
