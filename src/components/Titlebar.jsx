import React from "react";
import styles from "./titlebar.module.css";

const TitleBar = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>Milliman</h1>
		</header>
	);
};

export default TitleBar;
