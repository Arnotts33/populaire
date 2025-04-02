"use client";

import { useRef } from "react";
import styles from "./ScrollingKeywords.module.css";

const ScrollingKeywords = () => {
	const marquee = useRef<HTMLDivElement>(null);
	return (
		<div className={styles.marquee}>
			<div className={styles.marqueeInner}>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
				<div ref={marquee} className={styles.marqueePart}>
					grilled cheese • smash • tacos •
				</div>
			</div>
		</div>
	);
};
export default ScrollingKeywords;
