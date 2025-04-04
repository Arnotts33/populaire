import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./_sections/Hero";
import About from "./_sections/About";
import Dwitches from "./_sections/Dwitches";
import Gallery from "./_sections/Gallery";
import BarAManger from "./_sections/BarAManger";
import StMich from "./_sections/StMich";

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Dwitches />
			<Gallery />
			<BarAManger />
			{/* <StMich /> */}
		</>
	);
}
