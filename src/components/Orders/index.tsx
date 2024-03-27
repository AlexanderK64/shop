import React from "react";
import styles from "./Orders.module.scss";
import { MdDeleteForever } from "react-icons/md";
import { useAppContext } from "./../../useAppContext.tsx";


interface Props{
    item:any;
}

const Orders:React.FC<Props>=({item})=>{

    const {deleteOrder} = useAppContext();

    return(
        <div className={styles.item}>
            <img src={"./images/"+item.img} alt="Error"/>
            <h2>{item.title}</h2>
            <b>{item.price} Rub</b>
            <MdDeleteForever onClick={()=>deleteOrder(item.id)} className={styles.deleteIcon}/>
        </div>
    );
};

export default Orders;