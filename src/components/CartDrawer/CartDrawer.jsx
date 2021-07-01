import React from 'react'
import s from './cardDrawer.module.scss'

export const CartDrawer = ({ items = [], onDelete, onClickBack }) => {
    return (
        <div onClick={(e) => e.stopPropagation()} className={s.drawer}>
            <h2>Shopping Bag</h2>
            {items.length > 0
                ?
                <>
                    <div className={`${s.items} mt-10 mb-10`}>
                        {items.map(item => (<div key={item.id} className={`${s.cartItem} d-flex align-center mt-30 p-10`}>
                            <img className='mr-15' width={70} height={70} src={`${item.imageUrl}`} alt="Sneakers" />
                            <div>
                                <p className='mb-5'>{item.title}</p>
                                <strong>{item.price}</strong>
                            </div>
                            <img onClick={() => onDelete(item.id)} className={s.removeBtn} src="/img/icons/remove-item.svg" alt="Remove item" />
                        </div>))}
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
                </>
                :
                <div className={`${s.emptyCart} d-flex align-center justify-center flex-column flex`}>
                    <img className="mb-20" width={120} height={120} src='/img/icons/emptyCart.jpg' alt="emptyCartImg" />
                    <h2>Cart is empty</h2>
                    <p className="opacity-6">Add at least one pair of sneakers to make order!</p>
                    <button onClick={onClickBack} className={s.actionGreenBtn}>Back to shopping</button>
                </div>

            }

        </div>
    )
}
