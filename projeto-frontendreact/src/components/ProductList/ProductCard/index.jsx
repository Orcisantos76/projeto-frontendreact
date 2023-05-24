/* eslint-disable react/prop-types */

import { ProductStyled,Texto,Botao} from './style'



// recebe {product como props} pra usar props.name
export function ProductCard({product}){
    // console.log(product)
    return (
        <>
            <ProductStyled>                
                <img src= {product.imageUrl} alt={product.name}/>
                <Texto>
                    <p>{product.name}</p>
                    <p>{product.value}</p>                    
                </Texto>
                <Botao>
                    <button>Adicionar ao Carrino</button>
                </Botao>
                
            </ProductStyled>
        </>
    )
}

export default ProductCard