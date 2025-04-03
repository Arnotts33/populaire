import OpeningTimes from "@/components/ui/OpeningTimes";
import styles from "./About.module.css";
import Image from "next/image";
import mascotte from "@/assets/images/mascotte.svg";

const About = () => {
	return (
		<section className={styles.aboutSection} id="about">
			<div className={styles.aboutContent}>
				<div className={styles.contentLeftSide}>
					<p>
						Ici, on fait des sandwichs costauds: du goût, des produits frais, et
						des inspirations venues d’un périple aux 4 coins du globe. Chaque
						bouchée, c’est un petit voyage. Simple, gourmand, et franchement
						bon.
					</p>
				</div>
				<div className={styles.contentRightSide}>
					<div className={styles.openingTimes}>
						<OpeningTimes />
					</div>
					<Image
						src={mascotte}
						alt="Mascotte Populaire"
						width={325}
						className={styles.mascotte}
					/>
				</div>
			</div>
		</section>
	);
};
export default About;
