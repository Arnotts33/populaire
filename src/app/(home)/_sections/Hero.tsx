"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import heroImg from "@/assets/images/dorian-kitchen.webp";
import styles from "./Hero.module.css";
import pinkSticker from "@/assets/images/sticker-pink.svg";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const Hero = () => {
	const sticker = useRef<HTMLImageElement>(null);
	const section = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		gsap.registerPlugin(Draggable);

		Draggable.create(sticker.current, {
			bounds: section.current,
			type: "x,y",
		});
	}, [sticker.current]);

	return (
		<section ref={section} className={styles.hero}>
			<div className={styles.heroContent}>
				<div className={styles.heroImgWrapper}>
					<Image
						src={heroImg}
						alt="Dorian en cuisine"
						className={styles.heroImg}
						priority={true}
						sizes="(max-width: 540px) 100vw, 1536px"
					/>
				</div>
				<div className={styles.heroText}>
					<div className={styles.stickerWrapper}>
						<Image
							ref={sticker}
							src={pinkSticker}
							alt="Sticker"
							className={styles.sticker}
							priority={true}
						/>
					</div>
					<h1 className={styles.mainTitle}>Dwitcherie</h1>
					<h2 className={styles.subTitle}>bar à manger, cave à vins</h2>
				</div>
			</div>
		</section>
	);
};
export default Hero;
