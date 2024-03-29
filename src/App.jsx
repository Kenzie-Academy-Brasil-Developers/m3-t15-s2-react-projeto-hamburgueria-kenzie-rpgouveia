import { api } from "./services/api.js"
import { useState, useEffect } from "react"
import { Header } from "./components/Header"
import { ProductsList } from "./components/ProductsList"
import { Cart } from "./components/Cart"
import { StyledDiv } from "./styles/styles.jsx"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { StyledContainer } from "./styles/container.js"

function App() {
  const localCurrentSale = localStorage.getItem('@HamburgueriaKenzie')

  const [products, setProducts] = useState([])
  const [currentSale, setCurrentSale] = useState(localCurrentSale ? JSON.parse(localCurrentSale) : [])
  const [cartTotal, setCartTotal] = useState(0)
  const [search, setSearch] = useState('')

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

  useEffect(() => {
    localStorage.setItem('@HamburgueriaKenzie', JSON.stringify(currentSale))

    const totalValue = currentSale.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price
    }, 0)
    setCartTotal(totalValue)
  }, [currentSale])

  function handleClick(productId) {
    if (!currentSale.some(product => product.id == productId)){
      const addProductFounded = products.find(item => {
          return item.id == productId
      })
      setCurrentSale([...currentSale, addProductFounded])
      toast.success('Produto adicionado')
    } else {
      toast.error('Produto já foi adicionado!')
    }
  }

  function removeProductFromCart(productId) {
    const newCurrentSale = currentSale.filter(item => {
      return item.id !== productId
    })
    setCurrentSale(newCurrentSale)
    toast.warning('Produto removido')
  }

  function removeAllProductsFromCart() {
    if (currentSale.length === 1) {
      const resetCurrentSale = []
      setCurrentSale(resetCurrentSale)
      toast.success('Produto removido')
    } else {
      const resetCurrentSale = []
      setCurrentSale(resetCurrentSale)
      toast.success('Produtos removidos')
    }
  }

  const filteredProducts = products.filter(item => {
    return search == '' ? true : (item.name.toLowerCase()).includes(search.toLowerCase())
  })


  return (
    <StyledDiv>
      <Header setSearch={setSearch}/>
      <main>
        <StyledContainer>
          <ProductsList
            filteredProducts={filteredProducts}
            handleClick={handleClick}
          />
          <Cart
            currentSale={currentSale}
            removeProductFromCart={removeProductFromCart}
            removeAllProductsFromCart={removeAllProductsFromCart}
            cartTotal={cartTotal}
          />
        </StyledContainer>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </StyledDiv>
  )
}

export default App