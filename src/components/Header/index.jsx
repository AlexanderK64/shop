import React from "react";
import styles from "./Header.module.scss"
import { FaBasketShopping } from "react-icons/fa6";
import {useState} from "react";
import Orders from "../Orders";




export default function Header(props){

    
    let [cartOpen,setCartOpen]=useState(false);

    
const showOrders=(props)=>{
    let summa=0;
    props.orders.forEach(el=>summa+=Number.parseFloat(el.price));
    return(
        <div>
        {props.orders.map(el=>(
            <Orders onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className={styles.summa}> Итого: {new Intl.NumberFormat().format(summa)} RUB</p>
    </div>
    );
}

const showNothing=()=>{
    return(
        <div className={styles.empty}>
            <h2>товары в корзине отсутствуют</h2>
        </div>
    );
}

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
                    {props.orders.length>0?
                        showOrders(props):showNothing()}
                </div>
            )}
            </div>
            <div className={styles.presentation}></div>
            
        </header>
    );
}