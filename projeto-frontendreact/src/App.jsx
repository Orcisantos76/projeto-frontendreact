import Filter from './components/Filters'
import Home from './components/ProductList/Home'
import Cart from './components/ShoppingCart/Cart'
import GlobalStyles from './GlobalStyles'
import productList from './assents/productList'
import { CartContainer, Container, FilterContainer, HomeContainer } from './style'
import { useEffect, useState } from 'react'




function App() {
  
  const [orderFilter, setOrderFilter] = useState('')
  const [minFilter, setMinFilter]= useState('')
  const [maxFilter, setMaxFilter]= useState('')
  const [searchFilter, setSearchFilter]= useState('')
  const [cart, setCart]= useState('')
  const [amount, setAmount]= useState('')
  const [filteredList, setFilteredList]= useState([])
  // eslint-disable-next-line no-unused-vars
  const [startList, setStartList]= useState([...productList])

  useEffect(()=>{
    console.log("Qualquer coisa dentro do useEffect")
    setFilteredList(
      startList.filter((item)=>{
        // return minFilter ? item.value >= minFilter : item

        if (minFilter){
          console.log("entrei no if")
          if(item.value >= minFilter){
            return item
          }         
        }else{
          return item
          }          
        }).filter((item)=>{
          if (maxFilter){
            if(item.value <= maxFilter){
              return item
            }
          }else{
            return item
          }
        }).filter((item)=>{
          if (searchFilter){
            if(item.name.toLowerCase().includes(searchFilter.toLowerCase())){
              return item
            }
          }else{
            return item
          }
        })
    )
  }, [minFilter,maxFilter,searchFilter])
console.log(filteredList)
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
