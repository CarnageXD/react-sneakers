import React from 'react'
import s from './card.module.scss'

export const Card = (props) => {
    return (
        <div className={s.card}>
            <div className={s.favorite}>
                <img src='/img/icons/default-heart.png' alt='likedSneakers' />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt='Nike Blazer Mid Suede' />
            <h5 className='mt-10 mb-10'>{props.title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Price: </span>
                    <strong>{props.price}</strong>
                </div>
                <button className={s.button}>
                    <img src='/img/icons/addButton.svg' alt='addToCardButton' />
                </button>
            </div>
        </div>
    )
}