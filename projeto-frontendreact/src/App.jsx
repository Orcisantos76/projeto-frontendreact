import Filter from './componentes/Filters'
import Home from './componentes/ProductList/Home'
import Cart from './componentes/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'




function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <GlobalStyles />
      <Container>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <HomeContainer>
          <Home />
        </HomeContainer>
        <CartContainer>
          <Cart />
        </CartContainer>

      </Container>

    </>
  )
}

export default App
