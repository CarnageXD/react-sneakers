import React from 'react'
import s from './header.module.scss'

export const Header = () => {
    return (
        <header className={`${s.header} d-flex justify-between align-center p-40`}>
            <div className="d-flex align-center">
                <img width={40} height={40} src='/img/logo.png' alt='mainLogo' />
                <div>
                    <h3 className='text-uppercase'>Carnage's Sneakers</h3>
                    <p className='opacity-5'>The best sneakers ever for you!</p>
                </div>
            </div>
            <div className='headerRight'>
                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img src='/img/icons/cart.svg' alt='cartIcon' />
                        <span>450$</span>
                    </li>
                    <li>
                        <img src='/img/icons/user.svg' alt='userProfileIcon' />
                    </li>
                </ul>
            </div>
        </header>
    )
}
