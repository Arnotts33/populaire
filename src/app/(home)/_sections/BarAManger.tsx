import styles from "./BarAManger.module.css";
import Image from "next/image";
import table from "@/assets/images/table.webp";
import doomsday from "@/assets/images/doomsday.webp";

const BarAManger = () => {
	return (
		<section className={styles.barAMangerSection} id="bar-a-manger">
			<div className={styles.barAMangerContent}>
				<div className={styles.topContent}>
					<div className={styles.imageContainer}>
						<Image
							src={table}
							alt="Table de restaurant"
							className={styles.barAMangerImage}
						/>
					</div>
					<div className={styles.titleContainer}>
						<div className={styles.album}>
							<Image
								src={doomsday}
								alt="Doomsday album cover"
								className={styles.albumCoverimage}
							/>
						</div>
						<div className={styles.title}>
							<h1 className={styles.titleText}>Bar à Manger</h1>
						</div>
					</div>
				</div>
				<div className={styles.bottomContent}>
					<p className={styles.descriptionText}>
						Ici, on partage des assiettes bien senties et des vins qui claquent.
						Du bon produit, du goût, une cuisine qui va à l’essentiel. Un bar à
						manger où tu viens grignoter, trinquer, traîner.
					</p>
				</div>
			</div>
		</section>
	);
};
export default BarAManger;
