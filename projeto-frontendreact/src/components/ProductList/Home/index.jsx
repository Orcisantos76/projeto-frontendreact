/* eslint-disable react/prop-types */

import { useState } from 'react'
import ProductCard from '../ProductCard'
import { Topo,Cards,Container } from './style'

function Home({productList}) {
    const [ordination, setOrdination]= useState('')

    const onChangeOrdination = (event)=>{
        setOrdination(event.target.value)
    }

    return (  


        <Container>

            <Topo>
                <div>
                    <p>Quantidade de produtos:</p>
                </div>
                
                <div className='ordenacao'>
                    <p>Ordenação</p>
                    <form type="select">
                        <select value={ordination} onChange={onChangeOrdination}>
                            <option>Crescente</option>
                            <option>Decrescente</option>
                        </select>
                    </form>
                </div>
            </Topo>
            <Cards>    
                {productList.map((product)=>(
                    <ProductCard key={product.id} product={product}/>
                    ))
                }

            </Cards>
            
        </Container>
    )
}

export default Home