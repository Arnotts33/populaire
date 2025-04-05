"use client";
import { useRef } from "react";
import styles from "./StMich.module.css";
import jujuCams from "@/assets/images/juju-cams.webp";
import joPlonge from "@/assets/images/jo-plonge.webp";
import dorianPorchetta from "@/assets/images/dorian-porchetta.webp";
import dorianSom from "@/assets/images/dorian-sommelier.webp";
import window from "@/assets/images/window.webp";
import wineFriends from "@/assets/images/wine-friends.webp";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const StMich = () => {
	const section = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: section,
		offset: ["start end", "end start"],
	});

	const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);

	const md = useTransform(scrollYProgress, [0, 1], [0, -150]);

	const lg = useTransform(scrollYProgress, [0, 1], [0, -250]);

	const images = [
		{ src: window, y: sm, rotate: 0 },
		{ src: joPlonge, y: md, rotate: -3 },
		{ src: dorianPorchetta, y: md, rotate: 3 },
		{ src: jujuCams, y: lg, rotate: -5 },
		{ src: wineFriends, y: lg, rotate: 6 },
		{ src: dorianSom, y: md, rotate: 3 },
	];

	return (
		<section ref={section} className={styles.stMichSection} id="st-mich">
			<div className={styles.stMichContent}>
				<div className={styles.title}>
					<h1>St Mich</h1>
				</div>
				<div className={styles.images}>
					{images.map(({ src, y, rotate }, i) => {
						return (
							<motion.div
								animate={{ rotate: rotate }}
								style={{ y }}
								key={`i_${i}`}
								className={styles.imageContainer}
							>
								<Image src={src} alt="image" />
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};
export default StMich;
