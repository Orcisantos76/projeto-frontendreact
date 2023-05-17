
import ProductCard from '../ProductCard'
import { Topo,Cards,Container } from './style'

function Home() {
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Cards>
            
        </Container>
    )
}

export default Home