import styles from "./ButterPanel.module.css";
import Image from "next/image";
import star from "@/assets/icons/star.png";
import circle from "@/assets/icons/circle.png";
import bao from "@/assets/icons/bao.png";
import grilledCheese from "@/assets/icons/grilled-cheese.png";

const ButterPanel = () => {
	return (
		<div className={styles.panel}>
			<div className={styles.panelContent}>
				<p className={styles.panelTextTop}>Qui cuisine sans beurre</p>
				<p className={styles.panelTextBottom}>est un imposteur</p>
				<div className={styles.panelReflectionFirst}></div>
				<div className={styles.panelReflectionSecond}></div>
			</div>

			<Image src={star} alt="star icon" className={styles.starIcon1} />
			<Image src={star} alt="star icon" className={styles.starIcon2} />

			<Image src={circle} alt="circle icon" className={styles.circleIcon1} />
			<Image src={circle} alt="circle icon" className={styles.circleIcon2} />

			<Image src={bao} alt="bao icon" className={styles.baoIcon} />
			<Image
				src={grilledCheese}
				alt="grilled-cheese icon"
				className={styles.grilledCheeseIcon}
			/>

			<div className={styles.panelShadow}></div>
		</div>
	);
};
export default ButterPanel;
