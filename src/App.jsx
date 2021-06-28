import React from 'react'
import { Card } from './components/Card/Card'
import { CartDrawer } from './components/CartDrawer/CartDrawer'
import { Header } from './components/Header/Header'
import { Shadow } from './components/Shadow/Shadow'

const App = () => {
  const arr = [
    { title: "Man's Sneakers Nike Blazer Mid Suede", price: "$240", imageUrl: "/img/sneakers/1.jpg" },
    { title: "Man's Sneakers Nike Air Max 270", price: "$270", imageUrl: "/img/sneakers/2.jpg" },
    { title: "Man's Sneakers Nike Blazer Mid Suede", price: "$200", imageUrl: "/img/sneakers/3.jpg" },
    { title: "Man's Sneakers Puma X Aka Boku Future Rider", price: "$175", imageUrl: "/img/sneakers/4.jpg" }]

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
          {arr.map(card => <Card title={card.title} price={card.price} imageUrl={card.imageUrl} />)}
        </div>
      </div>
    </div>
  )
}

export default App
