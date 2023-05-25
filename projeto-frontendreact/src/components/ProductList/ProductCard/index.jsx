/* eslint-disable react/prop-types */

import { ProductStyled,Texto,Botao} from './style'



// recebe {product como props} pra usar props.name
export function ProductCard({product}){
    console.log(product)
    return (
        <>
            <ProductStyled>                
                <img src= {product.imageUrl} alt={product.name}/>
                <Texto>
                    <p>Nome: {product.name}</p>
                    <p>Valor: {product.value}</p>                    
                </Texto>
                <Botao>
                    Adicionar ao Carrino
                </Botao>
                
            </ProductStyled>
        </>
    )
}

export default ProductCard