import styles from "./BurgerButton.module.css";

type BurgerButtonProps = {
	isActive: boolean;
	toggleMenu: () => void;
};

const BurgerButton = ({ toggleMenu, isActive }: BurgerButtonProps) => {
	return (
		<button
			className={styles.mobileBurger}
			onClick={toggleMenu}
			aria-controls="mobile-menu"
			aria-expanded={isActive}
		>
			<svg
				className={`${styles.hamburger} ${
					isActive ? styles.mobileBurgerActive : ""
				}`}
				viewBox="0 0 100 100"
				width={50}
			>
				<rect
					className={styles.topLine}
					width={80}
					height={10}
					x={10}
					y={25}
				></rect>
				<rect
					className={styles.middleLine}
					width={80}
					height={6}
					x={10}
					y={52}
				></rect>
				<rect
					className={styles.middleLine}
					width={80}
					height={6}
					x={10}
					y={42}
				></rect>
				<rect
					className={styles.bottomLine}
					width={80}
					height={10}
					x={10}
					y={65}
				></rect>
			</svg>
		</button>
	);
};
export default BurgerButton;
