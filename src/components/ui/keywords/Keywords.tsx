import styles from "./Keywords.module.css";

const Keywords = ({ keywords }: { keywords: string }) => {
	return (
		<div className={styles.container}>
			<p>{keywords}</p>
		</div>
	);
};
export default Keywords;
