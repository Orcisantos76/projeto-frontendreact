/* eslint-disable react/prop-types */

import ProductCard from '../ProductCard'
import { Topo,Cards,Container } from './style'

function Home({productList}) {
    return (  


        <Container>

            <Topo>
                <div>
                    <p>Quantidade de produtos:</p>
                </div>
                
                <div className='ordenacao'>
                    <p>Ordenação</p>
                    <form type="select">
                        <select>
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