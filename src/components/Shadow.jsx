import React from 'react'

export const Shadow = (props) => {
    return (
        <div style={{ display: 'block' }} className='drawerShadow'>
            {props.children}
        </div>
    )
}
