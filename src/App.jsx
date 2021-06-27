import React from 'react'
import { Card } from './components/Card'
import { CartDrawer } from './components/CartDrawer'
import { Header } from './components/Header'
import { Shadow } from './components/Shadow'

const App = () => {
  return (
    <div className='wrapper clear'>
      <Shadow>
        <CartDrawer />
      </Shadow>
      <Header />
      <div className='content p-40'>
        <div className='d-flex justify-between align-center'>
          <h1>All sneakers</h1>
          <div className='search-block d-flex'>
            <img src='/img/icons/search.svg' alt='searchButtonIcon' />
            <input placeholder='Search...' />
          </div>
        </div>
        <div className="d-flex justify-between mt-20">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App
