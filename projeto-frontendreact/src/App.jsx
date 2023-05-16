
import Filter from './componentes/Filters/filter'
import Home from './componentes/ProductList/Home/home'
import Cart from './componentes/ShoppingCart/Cart/cart'
import { Container } from './componentes/ShoppingCart/Cart/cart'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1>Orci</h1>
      
      <Container>
        <Filter />
        <Home />
        <Cart />
      </Container>
    </>
  )
}

export default App
