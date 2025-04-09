import ButterPanel from "@/components/ui//butterPanel/ButterPanel";
import styles from "./Gallery.module.css";
import chairs from "@/assets/images/chairs.webp";
import grilledSun from "@/assets/images/grilled-sun.webp";
import counterDwitch from "@/assets/images/counter-dwitch.webp";
import Image from "next/image";

const Gallery = () => {
	return (
		<section className={styles.gallerySection} id="gallery">
			<div className={styles.panelContainer}>
				<ButterPanel />
			</div>
			<div className={styles.galleryContent}>
				<div className={styles.galleryImagesContainer}>
					<Image
						src={counterDwitch}
						alt="Grilled cheese sur le comptoir"
						className={styles.counterDwitchImage}
					/>

					<Image
						src={grilledSun}
						alt="Grilled cheese sur une table au soleil"
						className={styles.grilledSunImage}
					/>

					<Image
						src={chairs}
						alt="Chaises au comptoir"
						className={styles.chairsImage}
					/>
				</div>
			</div>
			<div className={styles.bottomSpacer}></div>
		</section>
	);
};
export default Gallery;
