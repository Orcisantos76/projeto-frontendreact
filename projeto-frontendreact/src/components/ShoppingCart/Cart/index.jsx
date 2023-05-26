/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Items from '../Items'
import { CartStyle } from './style'

export default function Cart({cart, setCart, amount, setAmount}) {
    
    return (
        <CartStyle>
            <h2>Cart</h2> 
            <Items/>
            <p>x0 Nome do produto</p>
            <button>Remover</button>
            <p>Valor Total<input></input></p>
        </CartStyle>
    )
}
