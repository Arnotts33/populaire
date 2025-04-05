import styles from "./Form.module.css";

const Form = () => {
	return (
		<form className={styles.form} name="contact" method="POST">
			<div className={styles.inputsContainer}>
				<div>
					<input
						type="text"
						placeholder="Votre nom..."
						id="name"
						name="name"
						required
					/>
					<label htmlFor="name">Nom</label>
				</div>
				<div>
					<input
						type="text"
						placeholder="Votre prénom..."
						name="firstName"
						id="firstName"
						required
					/>
					<label htmlFor="firstName">Prénom</label>
				</div>
				<div>
					<input
						type="email"
						placeholder="Votre email..."
						name="email"
						id="email"
						required
					/>
					<label htmlFor="email">Email</label>
				</div>
				<div>
					<input
						type="text"
						placeholder="06..."
						name="phoneNumber"
						id="phoneNumber"
						required
					/>
					<label htmlFor="phoneNumber">N° de téléphone...</label>
				</div>
			</div>
			<div className={styles.textareaContainer}>
				<textarea
					placeholder="Votre message"
					rows={8}
					name="message"
					id="message"
					required
				></textarea>
				<label htmlFor="message">Message</label>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Envoyer</button>
			</div>
		</form>
	);
};
export default Form;
