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
						className={styles.formInput}
					/>
					<label className={styles.inputLabel} htmlFor="name">
						Nom
					</label>
				</div>
				<div>
					<input
						type="text"
						placeholder="Votre prénom..."
						name="firstName"
						id="firstName"
						required
						className={styles.formInput}
					/>
					<label className={styles.inputLabel} htmlFor="firstName">
						Prénom
					</label>
				</div>
				<div>
					<input
						type="email"
						placeholder="Votre email..."
						name="email"
						id="email"
						required
						className={styles.formInput}
					/>
					<label className={styles.inputLabel} htmlFor="email">
						Email
					</label>
				</div>
				<div>
					<input
						type="text"
						placeholder="06..."
						name="phoneNumber"
						id="phoneNumber"
						required
						className={styles.formInput}
					/>
					<label className={styles.inputLabel} htmlFor="phoneNumber">
						N° de téléphone...
					</label>
				</div>
			</div>
			<div className={styles.textareaContainer}>
				<textarea
					className={styles.textarea}
					placeholder="Votre message"
					rows={8}
					name="message"
					id="message"
					required
				></textarea>
				<label className={styles.textareaLabel} htmlFor="message">
					Message
				</label>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Envoyer</button>
			</div>
		</form>
	);
};
export default Form;
