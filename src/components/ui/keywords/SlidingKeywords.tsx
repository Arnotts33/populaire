"use client";
import { useTransform } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./SlidingKeywords.module.css";
import Keywords from "./Keywords";

const SlidingKeywords = ({
	left,
	progress,
	direction,
}: {
	left: string;
	progress: any;
	direction: string;
}) => {
	const leftDirection: any = direction === "left" ? -1 : 1;
	const translateX = useTransform(
		progress,
		[0, 1],
		[150 * leftDirection, -150 * leftDirection]
	);

	return (
		<motion.div
			className={styles.lineContainer}
			style={{ x: translateX, left: left }}
		>
			<Keywords />
			<Keywords />
			<Keywords />
		</motion.div>
	);
};
export default SlidingKeywords;
