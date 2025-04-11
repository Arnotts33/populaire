"use client";
import useWeb3Form from "@/hooks/useWeb3Form";
import styles from "./Form.module.css";

const Form = () => {
	const accessKey = "49c64825-8d1a-4fde-9b75-5da2b5872dbc";
	const { handleSubmit, result, isSubmitting } = useWeb3Form(accessKey);

	return (
		<form className={styles.form} onSubmit={handleSubmit}>
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
						pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$"
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
						pattern="^0[1-9][0-9]{8}$"
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
				<button
					className={styles.button}
					type="submit"
					aria-label="Envoyer le formulaire"
				>
					{" "}
					Envoyer
				</button>
			</div>
			{isSubmitting && <p>Envoi en cours...</p>}
			{result && <p className={styles.result}>{result}</p>}
		</form>
	);
};
export default Form;
