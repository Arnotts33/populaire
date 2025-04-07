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
			<Image
				src={heroImg}
				alt="Kitchen"
				className={styles.heroImg}
				priority={true}
			/>
			<div className={styles.heroText}>
				<div className={styles.stickerWrapper}>
					<Image
						ref={sticker}
						src={pinkSticker}
						alt="Sticker"
						className={styles.sticker}
					/>
				</div>
				<h1>Dwitcherie</h1>
				<h2>Bar à Manger, Cave à vins</h2>
			</div>
		</section>
	);
};
export default Hero;
