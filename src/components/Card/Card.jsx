import React, { useState } from 'react'
import s from './card.module.scss'

export const Card = ({ imageUrl, title, price, onClickAdd }) => {
    const [isAdded, setIsAdded] = useState(false)

    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src='/img/icons/default-heart.png' alt='likedSneakers' />
            </div>
            <img width={133} height={112} src={imageUrl} alt='Nike Blazer Mid Suede' />
            <h5 className='mt-10 mb-10'>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price: </span>
                    <strong>{price}</strong>
                </div>
                <button className={s.button} onClick={() => {
                    setIsAdded(!isAdded)
                    onClickAdd({ imageUrl, title, price })
                }}>
                    <img src={isAdded ? '/img/icons/checked-plus.svg' : '/img/icons/default-plus.svg'} alt='addToCardButton' />
                </button>


            </div>
        </div>
    )
}