import { api } from "./services/api.js"
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { ProductsList } from "./components/ProductsList"

function App() {
  // States
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  // Requests
  useEffect(() => {
    async function getAllProducts() {
      try {
        const response = await api.get('products')
        // console.log(response)
        // console.log(response.data)
        setProducts(response.data)
      } catch(error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])

  console.log(products)

  return (
    <main>
      <Header />
      <ProductsList products={products}/>
    </main>
  )
}

export default App