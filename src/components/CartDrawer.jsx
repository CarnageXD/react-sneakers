import React from 'react'

export const CartDrawer = (props) => {
    return (
        <div className='drawer'>
            <h2>Shopping Bag</h2>
            <div className='items mt-10 mb-10'>
                <div className='cartItem d-flex align-center mt-30 p-10'>
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneakers" />
                    <div>
                        <p className='mb-5'>Man's Sneakers Nike Blazer Mid Suede</p>
                        <strong>240$</strong>
                    </div>
                    <img className='removeBtn' src="/img/icons/remove-item.svg" alt="Remove item" />
                </div>
                <div className='cartItem d-flex align-center mt-25 p-10'>
                    <img className='mr-15' width={70} height={70} src="/img/sneakers/2.jpg" alt="Sneakers" />
                    <div>
                        <p className='mb-5'>Man's Sneakers Nike Blazer Mid Suede</p>
                        <strong>240$</strong>
                    </div>
                    <img className='removeBtn' src="/img/icons/remove-item.svg" alt="Remove item" />
                </div>
            </div>
            <div className='cartTotalBlock d-flex flex-column'>
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
                <button className='actionGreenBtn'>Checkout
                    <img src="/img/icons/checkout-arrow.svg" alt="checkout-arrow" />
                </button>
            </div>
        </div>
    )
}
