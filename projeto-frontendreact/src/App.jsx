import Filter from './components/Filters'
import Home from './components/ProductList/Home'
import Cart from './components/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import productList from './assents/productList'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'
import { useEffect, useState } from 'react'

function App() {
  const [orderFilter, setOrderFilter] = useState('')
  const [minFilter, setMinFilter] = useState(0)
  const [maxFilter, setMaxFilter] = useState(0)
  const [searchFilter, setSearchFilter] = useState('')
  const [cart, setCart] = useState([])
  const [amount, setAmount] = useState(0)
  const [filteredList, setFilteredList] = useState([])

  const [startList, setStartList] = useState([...productList])

  useEffect(() => {    

    setFilteredList(
      startList.filter((item) => {
        if (minFilter) {
          if (item.value >= minFilter) {
            return item
          }
        } else {
          return item
        }
      }).filter((item) => {
        if (maxFilter) {
          if (item.value <= maxFilter) {
            return item
          }
        } else {
          return item
        }
      }).filter((item) => {
        if (searchFilter) {
          if (item.name.toLowerCase().includes(searchFilter.toLowerCase())) {
            return item
          }
        } else {
          return item
        }
      })
    )
  }, [minFilter, maxFilter, searchFilter])
  

  useEffect(() => {
    setTimeout(() => {
      localStorage.setItem("cart", JSON.stringify(cart))
      localStorage.setItem("amount", JSON.stringify(amount))

    }, 10)
  }, [cart])
  useEffect(() => {
    setCart([...JSON.parse(localStorage.getItem("cart"))])
    setAmount(JSON.parse(localStorage.getItem("amount")))
  }, [])

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
            productList={filteredList}
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
