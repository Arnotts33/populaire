import styles from "./Form.module.css";

const Form = () => {
	return (
		<form className={styles.form} name="contact" method="POST">
			<div className={styles.inputsContainer}>
				<input type="text" placeholder="Votre nom" name="name" required />
				<input type="email" placeholder="Votre email" name="email" required />
			</div>
			<div className={styles.textareaContainer}>
				<textarea
					placeholder="Votre message"
					rows={8}
					name="message"
					required
				></textarea>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Envoyer</button>
			</div>
		</form>
	);
};
export default Form;
