import styles from "./OpeningTimes.module.css";

const OpeningTimes = () => {
	return (
		<div className={styles.openingTimes}>
			<h2 className={styles.title}>Horaires d&apos;ouverture :</h2>
			<p className={styles.text}>Mercredi - Samedi : 12h - 19h30</p>
			<p className={styles.text}>Jeudi - Vendredi : 12h - 00h</p>
			<p className={styles.text}>Dimanche : 11h - 16h</p>
		</div>
	);
};
export default OpeningTimes;
