"use client";
import { useState, FormEvent } from "react";

export default function useWeb3Form(accessKey: string) {
	const [result, setResult] = useState<string>("");
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setIsSubmitting(true);

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: accessKey,
					name: formData.get("name"),
					firstName: formData.get("firstName"),
					email: formData.get("email"),
					phoneNumber: formData.get("phoneNumber"),
					message: formData.get("message"),
				}),
			});

			const result = await response.json();

			if (result.success) {
				setResult(result.message);
				form.reset();
				console.log(result);
			} else {
				setResult(result.message);
				console.log(result);
			}
		} catch (error) {
			console.error("Error:", error);
			setResult("Une erreur s'est produite lors de l'envoi du formulaire.");
		} finally {
			setIsSubmitting(false);
		}
	}
	return {
		handleSubmit,
		result,
		isSubmitting,
	};
}
