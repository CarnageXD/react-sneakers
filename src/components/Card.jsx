import React from 'react'

export const Card = () => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src='/img/icons/default-heart.png' alt='likedSneakers' />
            </div>
            <img width={133} height={112} src='/img/sneakers/1.jpg' alt='Nike Blazer Mid Suede' />
            <h5 className='mt-10 mb-10'>Man's Sneakers Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price: </span>
                    <strong>240$</strong>
                </div>
                <button className="button">
                    <img src='/img/icons/addButton.svg' alt='addToCardButton' />
                </button>
            </div>
        </div>
    )
}