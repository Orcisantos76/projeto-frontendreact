import Filter from './components/Filters'
import Home from './components/ProductList/Home'
import Cart from './components/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import productList from './assents/productList'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'




function App() {
  // const [count, setCount] = useState(0)
 
  console.log(productList)

  return (
    <>
      <GlobalStyles />
      <Container>
        <FilterContainer>
          <Filter />
        </FilterContainer>
        <HomeContainer>
          <Home productList={productList}/>
        </HomeContainer>
        <CartContainer>
          <Cart />
        </CartContainer>

      </Container>

    </>
  )
}

export default App
