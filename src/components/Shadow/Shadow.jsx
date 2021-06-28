import React from 'react'
import s from './shadow.module.scss'

export const Shadow = (props) => {
    return (
        <div style={{ display: 'block' }} className={s.drawerShadow}>
            {props.children}
        </div>
    )
}
