import React from "react";
import {useState} from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Footer from "./components/Footer";
import "./index.scss";



export default function App() {

  const [items,setItems]=useState([
    {id:1, title:'вывеска 1',img:'1.png',desc:' описание 1',category:'текстовые',price:'100'},
    {id:2, title:'вывеска 2',img:'2.png',desc:' описание 2',category:'текстовые',price:'200'},
    {id:3, title:'вывеска 3',img:'3.png',desc:' описание 3',category:'текстовые',price:'300'},
    {id:4, title:'вывеска 4',img:'4.png',desc:' описание 4',category:'текстовые',price:'400'},
    {id:5, title:'вывеска 5',img:'5.png',desc:' описание 5',category:'текстовые',price:'500'},
    {id:6, title:'вывеска 6',img:'6.png',desc:' описание 6',category:'текстовые',price:'600'},
    {id:7, title:'вывеска 7',img:'7.png',desc:' описание 7',category:'текстовые',price:'700'},
    {id:8, title:'вывеска 8',img:'8.png',desc:' описание 8',category:'текстовые',price:'800'},
    {id:9, title:'вывеска 9',img:'9.png',desc:' описание 9',category:'текстовые',price:'900'},
    {id:10, title:'вывеска 10',img:'10.png',desc:' описание 10',category:'текстовые',price:'1000'},
  ]);

  return (
    <div className="wrapper">
      <Header/>
      <Items allItems={items}/>
      <Footer/>

    </div>
  );
}