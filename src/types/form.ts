type FormValues = {
	Nom: string;
	Prénom: string;
	email: string;
	Téléphone: string;
	message: string;
};

type UseWeb3FormReturn = {
	isSubmitting: boolean;
	status: "idle" | "success" | "error";
	message: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type { FormValues, UseWeb3FormReturn };
