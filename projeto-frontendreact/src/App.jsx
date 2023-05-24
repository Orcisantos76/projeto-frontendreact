import Filter from './components/Filters'
import Home from './components/ProductList/Home'
import Cart from './components/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import productList from './assents/productList'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'
import { useState } from 'react'




function App() {
  
  const [orderFilter, setOrderFilter] = useState('')
  const [minFilter, setMinFilter]= useState('')
  const [maxFilter, setMaxFilter]= useState('')
  const [searchFilter, setSearchFilter]= useState('')
  const [cart, setCart]= useState('')
  const [amount, setAmount]= useState('')

  return (
    <>
      <GlobalStyles />
      <Container>
        <FilterContainer>
          <Filter 
          minFilter={minFilter}
          setMinFilter={setMinFilter}
          maxFilter={maxFilter}
          setMaxFilter={setMaxFilter}
          searchFilter={searchFilter}
          setSearchFilter={setSearchFilter}
          />
        </FilterContainer>
        <HomeContainer>
          <Home 
          productList={productList}
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          orderFilter={orderFilter}
          setOrderFilter={setOrderFilter}
          minFilter={minFilter}
          maxFilter={maxFilter}
          searchFilter={searchFilter}

          />
        </HomeContainer>
        <CartContainer>
          <Cart
          amount={amount}
          setAmount={setAmount}
          cart={cart}
          setCart={setCart}
          />
        </CartContainer>

      </Container>

    </>
  )
}

export default App
