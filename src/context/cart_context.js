import { createContext, useContext, useEffect, useReducer } from "react";
import reducer  from "../reducer/cartReducer"


const CartContext =createContext();

const getLocalCartData = ()  => {
    let localCartData = localStorage.getItem("sthaCart");
    // if(localCartData === []) {
    //     return [];
    // } else{
    // return JSON.parse(localCartData);
    // }
    const parsedData = JSON.parse(localCartData);
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}
const initialState ={
   // cart:[],
    cart:getLocalCartData(),
    total_item:0,
    total_price:0,
    shipping_fee:5500,
}

const CartProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer,initialState);


const addToCart =(id,color,amount,product) => {
   dispatch({ type : "ADD_TO_CART" , payload:{id,color,amount,product}})    
    };
    

    const  setDecrement =(id) => {
        dispatch({type:"SET_DECREMENT" ,payload:id})

    }
    const  setIncrement =(id) => {
        dispatch({type:"SET_INCREMENT" ,payload:id})

    }

    const removeItem = (id) => {
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const clearCart = () => {
        dispatch({type:"CLEAR_CART"})
    }


    useEffect  (() => {
        // dispatch({ type:"CART_TOTAL_ITEMS"})
        // dispatch({ type:"CART_TOTAL_PRICE"})
        dispatch({type:"CART_ITEM_PRICE_TOTAL"});

      localStorage.setItem("sthaCart" , JSON.stringify(state.cart))
    },[state.cart])

    return(
         <CartContext.Provider value={{...state,
         addToCart,
         removeItem,
         clearCart,
         setDecrement,
         setIncrement,
         }}>
        {children}
    </CartContext.Provider>
    )
}


const useCartContext = () =>{
  return useContext(CartContext);
}
export {CartProvider,useCartContext}