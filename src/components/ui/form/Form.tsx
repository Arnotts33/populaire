"use client";
import { useWeb3Form } from "@/hooks/useWeb3Form";
import styles from "./Form.module.css";
import Image from "next/image";
import mascotte from "@/assets/images/mascotte-animee.webp";

const ACCESS_KEY = "a87862b9-ab28-401d-a411-e79a25d02ef9";

const Form = () => {
	const { handleSubmit, isSubmitting, status, message } =
		useWeb3Form(ACCESS_KEY);

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
				{isSubmitting ? (
					<Image
						src={mascotte}
						alt="Mascotte animée"
						className={styles.mascotte}
						unoptimized
					/>
				) : (
					<button
						className={styles.button}
						type="submit"
						aria-label="Envoyer le formulaire"
					>
						{" "}
						Envoyer
					</button>
				)}
				{status !== "idle" && <p className={styles.messageResult}>{message}</p>}
			</div>
		</form>
	);
};
export default Form;
