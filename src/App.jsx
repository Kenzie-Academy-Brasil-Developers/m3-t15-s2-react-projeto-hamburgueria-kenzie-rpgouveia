import { api } from "./services/api.js"
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { ProductsList } from "./components/ProductsList"
import { Cart } from "./components/Cart"
import { StyledMain } from "./styles/styles.jsx"

function App() {
  // Local Storage
  const localCurrentSale = localStorage.getItem('@HamburgueriaKenzie')
  // States
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState(localCurrentSale ? JSON.parse(localCurrentSale) : [])
  const [cartTotal, setCartTotal] = useState(0)

  // Effects
  // on Mount
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await api.get('products')
        setProducts(response.data)
      } catch(error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

  // on Update
  useEffect(() => {
    localStorage.setItem('@HamburgueriaKenzie', JSON.stringify(currentSale))

    const totalValue = currentSale.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price
    }, 0)
    setCartTotal(totalValue)
  }, [currentSale])

  // Callbacks
  function handleClick(productId) {
    const addProductFounded = products.find(item => {
        return item.id == productId
    })
    setCurrentSale([...currentSale, addProductFounded])
  }

  function removeProductFromCart(productId) {
    const newCurrentSale = currentSale.filter(item => {
      return item.id !== productId
    })
    setCurrentSale(newCurrentSale)
  }

  function removeAllProductsFromCart() {
    const resetCurrentSale = []
    setCurrentSale(resetCurrentSale)
  }

  function showProducts(product) {
    const filteredItems = products.filter(item => {
      return item.category == product.category
    })
    return setFilteredProducts([...filteredProducts, filteredItems])
  }

  return (
    <StyledMain>
      <Header />
      <section>
        <ProductsList
          products={products}
          handleClick={handleClick}
        />
        <Cart
          currentSale={currentSale}
          removeProductFromCart={removeProductFromCart}
          removeAllProductsFromCart={removeAllProductsFromCart}
          cartTotal={cartTotal}
        />
      </section>
    </StyledMain>
  )
}

export default App