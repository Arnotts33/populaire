import styles from "./Dwitches.module.css";
import sandwich from "@/assets/images/grilled-cheese.webp";
import daftpunk from "@/assets/images/daftpunk.webp";
import Image from "next/image";

const Dwitches = () => {
	return (
		<section className={styles.dwitchesSection} id="dwitches">
			<div className={styles.dwitchesContent}>
				<div className={styles.keywordsChain}>
					<p>
						grilled cheese • smash • tacos • bao • baguette • grilled cheese
					</p>
					<p>baguette • grilled cheese • smash • tacos • bao • baguette</p>
				</div>
				<div className={styles.albumCover}>
					<Image
						src={daftpunk}
						alt="Daft Punk album cover"
						className={styles.albumCoverimage}
						width={160}
					/>
				</div>
				<div className={styles.dwitchImageContainer}>
					<Image
						src={sandwich}
						alt="Grilled cheese sandwich"
						className={styles.dwitchImage}
						width={600}
						height={800}
					/>
				</div>
				<div className={styles.title}>
					<h1 className={styles.titleText}>Dwitches</h1>
				</div>
				<div className={styles.text}>
					<p>
						Du mercredi au samedi midi, on sort les Dwitches. Du bon pain de
						chez Cérès, des produits de qualité, garniture aux petits soins,
						tout bien cuisiné comme il faut. Simple, efficace, ultra gourmand.
						Passe quand tu veux, ça se croque sur place ou à embarquer, selon
						l’humeur.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Dwitches;
