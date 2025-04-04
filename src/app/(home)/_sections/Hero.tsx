import Image from "next/image";
import heroImg from "@/assets/images/dorian-kitchen.webp";
import styles from "./Hero.module.css";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<Image
				src={heroImg}
				alt="Kitchen"
				className={styles.heroImg}
				priority={true}
			/>
			<div className={styles.heroText}>
				<h1>Dwitcherie</h1>
				<h2>Bar à Manger, Cave à vins</h2>
			</div>
		</section>
	);
};
export default Hero;
