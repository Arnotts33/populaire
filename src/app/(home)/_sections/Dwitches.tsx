import styles from "./Dwitches.module.css";
import sandwich from "@/assets/images/grilled-cheese2.webp";
import daftpunk from "@/assets/images/dp.webp";
import Image from "next/image";
import ScrollingKeywords from "@/components/ui/ScrollingKeywords";

const Dwitches = () => {
	return (
		<section className={styles.dwitchesSection} id="dwitches">
			<div className={styles.keywordsChain}>
				<ScrollingKeywords />
				<ScrollingKeywords />
			</div>

			<div className={styles.dwitchesContent}>
				<div className={styles.title}>
					<h1 className={styles.titleText}>Dwitches</h1>
				</div>
				<div className={styles.albumCover}>
					<Image
						src={daftpunk}
						alt="Daft Punk album cover"
						className={styles.albumCoverimage}
					/>
				</div>
				<div className={styles.dwitchImageContainer}>
					<Image
						src={sandwich}
						alt="Grilled cheese sandwich"
						className={styles.dwitchImage}
					/>
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
