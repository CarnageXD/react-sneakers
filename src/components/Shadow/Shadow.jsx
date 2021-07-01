import React from 'react'
import s from './shadow.module.scss'

export const Shadow = (props) => {
    const closeShadow = (e) => {
        props.onCloseShadow()
    }
    return (
        <div onClick={closeShadow} style={{ display: 'block' }} className={s.drawerShadow}>
            {props.children}
        </div>
    )
}
