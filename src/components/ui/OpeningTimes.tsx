import styles from "./OpeningTimes.module.css";

const OpeningTimes = () => {
	return (
		<div className={styles.openingTimes}>
			<h3>Horaires d'ouverture :</h3>
			<p>Mercredi - Samedi : 12h - 19h30</p>
			<p>Jeudi - Vendredi : 12h - 00h</p>
			<p>Dimanche : 11h - 16h</p>
		</div>
	);
};
export default OpeningTimes;
