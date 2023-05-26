/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import ProductCard from '../ProductCard'
import { Topo,Cards,Container } from './style'

function Home({productList, 
    amount, 
    setAmount,
    cart,
    setCart,
    minFilter,
    MaxFilter,
    searchFilter}){

    const [ordination, setOrdination]= useState('')

    const onChangeOrdination = (event)=>{        
        setOrdination(event.target.value)
    }
    // ----------------------------------------------
    function addToCart(product){        
        const newProduct = cart.find(
            (produtoCallback)=> product.id === produtoCallback.id);

            if (newProduct === undefined){
                product ={...product,quantidade: 1};
                setCart([...cart, product]);
                const valorTotal = amount + product.value
                // setCart é a mudança, vai receber o array cart, e adicionar product a ele, usando spreed operator
                setAmount(valorTotal) 
                
            }else {
                const novoCarrrinho = cart.map((product)=>{
                    if (product.id === newProduct.id){
                        const valorTotal  = amount + product.value;
                        setAmount(valorTotal)
                        return {...newProduct,quantidade: product.quantidade + 1};
                    } else {
                        return product;
                    }
                });
                setCart(novoCarrrinho);
                
            }
    }console.log("Valor total",amount)

    // -----------------------------------------------
    return (  

        <Container>

            <Topo>
                <div>
                    <p>Quantidade de produtos: {productList.length}</p>
                </div>
                
                <div className='ordenacao'>
                    <p>Ordenação</p>
                    <form type="select">
                        <select value={ordination} onChange={onChangeOrdination}>
                            <option>Selecione</option>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </form>
                </div>
            </Topo>
            <Cards>
                {productList.map((product)=>{
                return <ProductCard 
                        key={product.id} 
                        product={product} 
                        adicionarAoCarrinho={addToCart}/>
                })
                // chamada do componente utilizando o map
                }

            </Cards>
            
        </Container>
    )
}

export default Home