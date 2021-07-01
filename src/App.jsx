import React, { useEffect, useState } from 'react'
import { CartDrawer } from './components/CartDrawer/CartDrawer'
import { Header } from './components/Header/Header'
import { Shadow } from './components/Shadow/Shadow'
import { Home } from './pages/Home'
import axios from 'axios'
import { Route } from 'react-router-dom'

const App = () => {
  const [sneakers, setSneakers] = useState([])
  const [cartSneakers, setCartSneakers] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://60d9b9c25f7bf1001754768e.mockapi.io/items')
      .then(res => setSneakers(res.data))
  }, [])

  useEffect(() => {
    axios.get('https://60d9b9c25f7bf1001754768e.mockapi.io/cart')
      .then(res => setCartSneakers(res.data))
  }, [])

  const onAddToCart = (items) => {
    axios.post('https://60d9b9c25f7bf1001754768e.mockapi.io/cart', items)
    setCartSneakers((prev) => [...prev, items])
  }

  const onDeleteItem = (id) => {
    axios.delete(`https://60d9b9c25f7bf1001754768e.mockapi.io/cart/${id}`)
    setCartSneakers((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className='wrapper clear'>
      {
        cartOpened &&
        <Shadow onCloseShadow={() => setCartOpened(false)}>
          <CartDrawer onClickBack={() => setCartOpened(false)} items={cartSneakers} onDelete={onDeleteItem} />
        </Shadow>
      }

      <Header openCart={() => setCartOpened(true)} />

      <Route path='/'>
        <Home searchValue={searchValue} onChangeSearchInput={onChangeSearchInput} onAddToCart={onAddToCart} sneakers={sneakers} setSearchValue={setSearchValue} />
      </Route>

    </div>
  )
}

export default App
