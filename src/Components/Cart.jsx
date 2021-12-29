import React from 'react'
import {products} from './products';
import {createContext, useReducer, useEffect} from "react";
import {Reducer} from './Reducer';
import Navbar from './Navbar';


export const CartContext = createContext();

const initialState = {
    item: products,
    totalAmount: 0,
    totalItem: 0,
}

const Cart= () => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    const removeItem = (id) => {
        return dispatch({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    const clearCart = () => {
        return dispatch({ type: "CLEAR_CART" });
    };

    const increment = (id) => {
        return dispatch({
            type: "INCREMENT",
            payload: id,
          });
    }

    const decrement = (id) => {
        return dispatch({
          type: "DECREMENT",
          payload: id,
        });
      };

      useEffect(() => {
        dispatch({ type: "GET_TOTAL" });
        
      }, [state.item]);

      return (
          <CartContext.Provider
          value={{...state, removeItem, clearCart, increment, decrement}}
          >
              <Navbar/>
          </CartContext.Provider>
      )
}

export default Cart;






















