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
						alt="Counter Dwitch"
						className={styles.counterDwitchImage}
						width={600}
					/>

					<Image
						src={grilledSun}
						alt="Grilled Sun"
						className={styles.grilledSunImage}
						width={600}
					/>

					<Image
						src={chairs}
						alt="Chairs"
						className={styles.chairsImage}
						width={600}
					/>
				</div>
			</div>
			<div className={styles.bottomSpacer}></div>
		</section>
	);
};
export default Gallery;
