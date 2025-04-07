"use client";

import styles from "./Dwitches.module.css";
import { useRef } from "react";
import { useScroll } from "framer-motion";

import sandwich from "@/assets/images/grilled-cheese.webp";
import daftpunk from "@/assets/images/daftpunk.webp";
import Image from "next/image";
import SlidingKeywords from "@/components/ui/keywords/SlidingKeywords";
import { dwitchKeywords } from "@/constants/keywords";

const Dwitches = () => {
	const section = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: section,
		offset: ["start end", "end start"],
	});

	return (
		<section ref={section} className={styles.dwitchesSection} id="dwitches">
			<div className={styles.dwitchContent}>
				<div className={styles.topContent}>
					<div className={styles.titleContainer}>
						<div className={styles.albumBanner}>
							<Image
								src={daftpunk}
								alt="Daft Punk album cover"
								className={styles.albumCoverImage}
							/>
							<div className={styles.keywordsContainer}>
								<SlidingKeywords
									left={"-12%"}
									progress={scrollYProgress}
									direction={"left"}
									keywords={dwitchKeywords}
								/>
								<SlidingKeywords
									left={"-5%"}
									progress={scrollYProgress}
									direction={"right"}
									keywords={dwitchKeywords}
								/>
							</div>
						</div>
						<div className={styles.title}>
							<h1 className={styles.titleText}>Dwitches</h1>
						</div>
					</div>
					<div className={styles.imageContainer}>
						<Image
							src={sandwich}
							alt="Grilled cheese sandwich"
							className={styles.dwitchImage}
							// width={800}
						/>
					</div>
				</div>
				<div className={styles.bottomContent}>
					<p className={styles.descriptionText}>
						Du mercredi au samedi midi, on sort les dwitches. Du bon pain de
						chez Cérès, des produits de qualité, garniture aux petits soins,
						tout bien cuisiné comme il faut. Simple, efficace, ultra gourmand.
						Passe quand tu veux, ça se croque sur place ou à embarquer, selon
						l'humeur.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Dwitches;
