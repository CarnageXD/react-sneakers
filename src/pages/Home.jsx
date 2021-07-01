import React from 'react'
import { Card } from '../components/Card/Card'

export const Home = ({ searchValue, onChangeSearchInput, onAddToCart, sneakers, setSearchValue }) => {
    return (
        <div className='content p-40'>
            <div className='d-flex justify-between align-center'>
                <h1>{searchValue ? `Search by ${searchValue}` : 'All sneakers'}</h1>
                <div className='search-block d-flex'>
                    <img src='/img/icons/search.svg' alt='searchButtonIcon' />
                    <input value={searchValue} onChange={onChangeSearchInput} placeholder='Search...' />
                    {searchValue && <span onClick={() => setSearchValue('')} className='removeBtn'>x</span>}
                </div>
            </div>
            <div className="d-flex flex-wrap justify-between mt-20">
                {sneakers
                    .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                    .map((item, index) =>
                        <Card key={index} title={item.title} price={item.price} imageUrl={item.imageUrl} onClickAdd={(obj) => onAddToCart(obj)} />)}
            </div>
        </div>
    )
}
