import Form from "@/components/ui/form/Form";
import styles from "./page.module.css";

const Contact = () => {
	return (
		<>
			<main className={styles.contactMain}>
				<div className={styles.contactTitle}>
					<h1 className={styles.title}>Contact</h1>
					<p className={styles.description}>
						Une question, une collab, ou juste envie d&apos;échanger ?
						Écris-nous, on sera ravis de te répondre. Que ce soit pour en savoir
						plus, travailler ensemble ou juste parler cuisine, on est là.
					</p>
				</div>
				<div className={styles.contactFormContainer}>
					<Form />
				</div>
			</main>
		</>
	);
};
export default Contact;
