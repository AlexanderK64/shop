import React from "react";
import styles from "./Header.module.scss"
import { FaBasketShopping } from "react-icons/fa6";
import {useState} from "react";


export default function Header(){
    let [cartOpen,setCartOpen]=useState(false);

    return(
        <header>
            <div> 
            <span className={styles.logo}>Неоновые вывески</span>
            <ul className={styles.nav}>
                <li>О нас</li>
                <li>ЛИчный кабинет</li>
                <li>контакты</li>
            </ul>
            <FaBasketShopping onClick={()=>setCartOpen(cartOpen= !cartOpen)} className={`${styles.shopCartButton} ${cartOpen ? styles.active : ''}`}/>
            
            {cartOpen &&(
                <div className={styles.shopCart}>
                
                </div>
            )}
            </div>
            <div className={styles.presentation}></div>
            
        </header>
    );
}