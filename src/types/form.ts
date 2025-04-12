type FormValues = {
	name: string;
	email: string;
	message: string;
	website?: string; // champ honeypot
};

type UseWeb3FormReturn = {
	isSubmitting: boolean;
	status: "idle" | "success" | "error";
	message: string;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export type { FormValues, UseWeb3FormReturn };
