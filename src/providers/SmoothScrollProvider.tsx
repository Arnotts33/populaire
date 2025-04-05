"use client";
import { ReactLenis } from "lenis/react";

interface SmoothScrollProviderProps {
	children: React.ReactNode;
}

const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrollProvider;
