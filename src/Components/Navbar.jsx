import styled from 'styled-components'
import React, { useContext } from "react";

import Items from "./Item";
import { CartContext } from "./Cart";


const Header = styled.nav`
    width: 100%;
    height: 100px;
    background: rgb(194, 191, 191);
    display: flex;
    justify-content: space-between;
`
const ItemDiv = styled.div`
    width: 50%;
    margin:  auto;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
`

const Navbar = ()=>{
    const {item, clearCart, totalItem, totalAmount} = useContext(CartContext)

    if(item.length === 0) {
        return (
            <>
            <Header>
               <h4>Home</h4>
               <h4>Product</h4>
               <div className="cart-icon">
               <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"  alt="cart" />
               <p className="float">{totalItem}</p>
               </div>
            </Header>
            <ItemDiv>

            </ItemDiv>

            </>
        )
    }

    return (
        <>
        <Header>
           <h4>Home</h4>
           <h4>Product</h4>
           <div className="cart-icon">
           <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-shopping-cart-cyber-monday-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"  alt="cart" />
           <p className="float">{totalItem}</p>
           </div>
        </Header>
        <ItemDiv>
        <div className="cart-items">
           
                {item.map((crntElm) => {
                   // console.log(crntElm)
                    return <Items key={crntElm.id}{...crntElm}/>;
                })}
          
        </div>
        </ItemDiv>
        <h3>
            Cart Total : <span>{totalAmount}₹</span>
          </h3>
          <button className="clear-cart" onClick={clearCart}>
            Clear Cart
          </button>
        </>
    )


}

export default Navbar;