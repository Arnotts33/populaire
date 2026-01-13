import styles from "./OpeningTimes.module.css";

const OpeningTimes = () => {
	return (
		<div className={styles.openingTimes}>
			<h2 className={styles.title}>Horaires d&apos;ouverture :</h2>
			<p className={styles.text}>
				Jeudi à Samedi : 12h - 15h30 / 18h30 - minuit
			</p>
			<p className={styles.text}>Dimanche : 12h - 16h</p>
		</div>
	);
};
export default OpeningTimes;
