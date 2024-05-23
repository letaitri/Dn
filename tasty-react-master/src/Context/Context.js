import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'

export const Context = createContext(null);
    const getDefaultCart = () =>{
        let cart = {};
        for (let index = 0; index < all_product.length+1; index++)
            {
                cart[index] = 0;
            }
            return cart;
    }

const ContextProvider = (props)=>{
    const [cartItems, setCartItems] = useState (getDefaultCart());
    

    const addToCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }

    const RemoveFromCart = (itemId) =>{
        setCartItems((prev) =>({...prev,[itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmoiunt = 0;
        for(const item in cartItems)
        {
            if(cartItems[item]>0)
                {
                    let itemInfo = all_product.find((product)=> product.id===Number(item))
                    totalAmoiunt += itemInfo.new_price * cartItems[item];
                }
              
        }  return totalAmoiunt;}
        const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem+= cartItems[item];
                    }
            }
            return totalItem;
    
    
    }

    const ContextValue = {getTotalCartItems,getTotalCartAmount,all_product,cartItems,addToCart,RemoveFromCart}
    return(
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;