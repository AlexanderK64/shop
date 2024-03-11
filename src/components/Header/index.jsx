import React from "react";
import styles from "./Header.module.scss"

export default function Header(){
    return(
        <header>
            <div> <span className={styles.logo}>Неоновые вывески</span></div>
            <ul className={styles.nav}>
            <li>О нас</li>
            <li>ЛИчный кабинет</li>
            <li>контакты</li></ul>
            <div className={styles.presentation}></div>
        </header>
    );
}