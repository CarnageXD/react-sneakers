import React from 'react'
import s from './cardDrawer.module.scss'

export const CartDrawer = (props) => {
    return (
        <div className={s.drawer}>
            <h2>Shopping Bag</h2>
            <div className={`${s.items} mt-10 mb-10`}>
                <div className={`${s.cartItem} d-flex align-center mt-30 p-10`}>
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
                    <div>
                        <p className='mb-5'>Man's Sneakers Nike Blazer Mid Suede</p>
                        <strong>240$</strong>
                    </div>
                    <img className={s.removeBtn} src="/img/icons/remove-item.svg" alt="Remove item" />
                </div>
                <div className={`${s.cartItem} d-flex align-center mt-30 p-10`}>
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" />
                    <div>
                        <p className='mb-5'>Man's Sneakers Nike Blazer Mid Suede</p>
                        <strong>240$</strong>
                    </div>
                    <img className={s.removeBtn} src="/img/icons/remove-item.svg" alt="Remove item" />
                </div>
            </div>
            <div className={`${s.cartTotalBlock} d-flex flex-column`}>
                <ul className='mb-15'>
                    <li>
                        <span>Summary:</span>
                        <div></div>
                        <strong>499$</strong>
                    </li>
                    <li>
                        <span>Tax 3.95%:</span>
                        <div></div>
                        <strong>19$</strong>
                    </li>
                </ul>
                <button className={s.actionGreenBtn}>Checkout
                    <img src="/img/icons/checkout-arrow.svg" alt="checkout-arrow" />
                </button>
            </div>
        </div>
    )
}