import styles from "./Keywords.module.css";

const Keywords = ({ keywords }: { keywords: string }) => {
	return (
		<div className={styles.container}>
			<p className={styles.keywords}>{keywords}</p>
		</div>
	);
};
export default Keywords;
