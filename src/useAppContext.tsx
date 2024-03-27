import React,{useState,useEffect,useContext} from "react";

const AppContext=React.createContext<any>(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Ошибка при получени параметров в use AppContext");
    }
    return context;
}

const AppProvider:React.FC<{children:React.ReactNode}> = ({children}) =>{

    const [items,setItems]=useState<any[]>([
        {id:1, title:'вывеска 1',img:'1.png',desc:' описание 1',category:'one',price:'100'},
        {id:2, title:'вывеска 2',img:'2.png',desc:' описание 2',category:'текстовые',price:'200'},
        {id:3, title:'вывеска 3',img:'3.png',desc:' описание 3',category:'текстовые',price:'300'},
        {id:4, title:'вывеска 4',img:'4.png',desc:' описание 4',category:'текстовые',price:'400'},
        {id:5, title:'вывеска 5',img:'5.png',desc:' описание 5',category:'five',price:'500'},
        {id:6, title:'вывеска 6',img:'6.png',desc:' описание 6',category:'текстовые',price:'600'},
        {id:7, title:'вывеска 7',img:'7.png',desc:' описание 7',category:'текстовые',price:'700'},
        {id:8, title:'вывеска 8',img:'8.png',desc:' описание 8',category:'текстовые',price:'800'},
        {id:9, title:'вывеска 9',img:'9.png',desc:' описание 9',category:'nine',price:'900'},
        {id:10, title:'вывеска 10',img:'10.png',desc:' описание 10',category:'текстовые',price:'1000'},
      ]);
    
      const [orders,setOrders]=useState<any[]>([]);
      const [currentItems,setCurrentItems]=useState<any[]>([]);
      const [showFullItem,setShowFullItem]=useState<boolean>(false);
      const [fullItem,setFullItem]=useState<any>({});
    
      useEffect(()=>{
        setCurrentItems(items);
      },[items]);
    
    const deleteOrder = (id:number) =>{
      setOrders(orders.filter((el)=> el.id!==id));
    }
    
      const addToOrder=(item:any)=>{
        if(!orders.some((el)=>el.id===item.id)){
            setOrders([...orders,item]);
        }
      }
    
      const chooseCategory = (category:string)=>{
        if(category==="all"){
          setCurrentItems(items);
        }
        else{
          setCurrentItems(items.filter((el)=>el.category===category));
        }
      }
    
    const onShowItem = (item:any) =>{
      setFullItem(item);
      setShowFullItem(!showFullItem);
    }
    
    const contextValue={
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setShowFullItem,
        showFullItem,
        fullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;
