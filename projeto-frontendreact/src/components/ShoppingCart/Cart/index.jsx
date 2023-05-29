/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Items from '../Items'
import { CartStyle } from './style'

export default function Cart({cart, setCart, amount, setAmount }) {
    function removeItem(id) {
        cart.map((produto) => {
            if (produto.id === id && produto.quantidade >= 1){
                produto.quantidade = produto.quantidade - 1;
            setCart([...cart])
            setAmount(amount - produto.value)
            }
            if (produto.quantidade === 0){
                const novoCarrinho = cart.filter(produtos => produtos.quantidade !== 0)
                setCart(novoCarrinho)
            }
    });
    }

    return (
        <CartStyle>
            <h2>Carrinho</h2>
            {cart.map((product) => {
                return (<Items key={product.id}
                    nome={product.name}
                    valor={product.value * product.quantidade}
                    quantidade={product.quantidade}
                    imagem={product.imageUrl}
                    id={product.id}
                    removeItem={removeItem}
                // imagem={product.imageUrl}
                />);
            })}
            <p>Valor Total: R$ {amount.toFixed(2).replace(".", ",")}</p>
        </CartStyle>
    )
}
