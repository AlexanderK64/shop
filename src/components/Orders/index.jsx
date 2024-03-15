import React from "react";
import styles from "./Orders.module.scss";
import { MdDeleteForever } from "react-icons/md";

export default function Orders(props){
    return(
        <div className={styles.item}>
            <img src={"./images/"+props.item.img} alt="Error"/>
            <h2>{props.item.title}</h2>
            <b>{props.item.price} Rub</b>
            <MdDeleteForever onClick={()=>props.onDelete(props.item.id)} className={styles.deleteIcon}/>
        </div>
    );
}