"use client";
import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
	return <ReactLenis root>{children}</ReactLenis>;
};

export default SmoothScrollProvider;
