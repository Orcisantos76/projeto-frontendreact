import Filter from './components/Filters'
import Home from './components/ProductList/Home'
import Cart from './components/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import productList from './assents/productList'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'
import { useState } from 'react'




function App() {
  // const [count, setCount] = useState(0)
  const [minFilter, setMinFilter]= useState('')
  const [maxFilter, setMaxFilter]= useState('')
  const [searchFilter, setSearchFilter]= useState('')
  const [cart, setCart]= useState('')
  const [amount, setAmount]= useState('')
 
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
