"use client";
import { useState } from "react";
import { FormValues, UseWeb3FormReturn } from "@/types/form";

export const useWeb3Form = (accessKey: string): UseWeb3FormReturn => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
	const [message, setMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget;
		const data = new FormData(form);

		// honeypot check
		if (data.get("website")) {
			setStatus("error");
			setMessage("Spam détecté !");
			return;
		}

		const payload: FormValues & { access_key: string; subject: string } = {
			access_key: accessKey,
			name: data.get("name") as string,
			email: data.get("email") as string,
			message: data.get("message") as string,
			subject: "📬 Nouveau message depuis Populaire Bordeaux",
		};

		setIsSubmitting(true);
		setStatus("idle");

		try {
			const res = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(payload),
			});

			const result = await res.json();

			if (result.success) {
				setStatus("success");
				setMessage("Merci ! Votre message a bien été envoyé.");
				form.reset();
			} else {
				setStatus("error");
				setMessage("Une erreur est survenue. Merci de réessayer.");
			}
		} catch (error) {
			setStatus("error");
			setMessage("Erreur réseau. Vérifiez votre connexion.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return { isSubmitting, status, message, handleSubmit };
};
