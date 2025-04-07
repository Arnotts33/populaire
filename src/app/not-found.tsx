import styles from "./not-found.module.css";

const NotFound = () => {
	return (
		<div className={styles.notFound}>
			<h1 className={styles.notFoundText}>404 - Page Not Found</h1>
		</div>
	);
};
export default NotFound;
