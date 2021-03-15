import React, { forwardRef } from 'react'
import classes from './TabButton.module.css'

interface Props {
    onClick?: (e?: React.MouseEvent) => void,
    id?: string,
    role?: string,
    tabIndex?: number,
    "aria-selected"?: boolean,
    "aria-controls"?: string,
    isActive: boolean,
    children?: any
}

const TabButton = forwardRef<HTMLButtonElement, Props>(({ isActive, children, ...rest }, nodeRef) => {
    return (
        <button ref={nodeRef} className={`${classes.TabButton} ${isActive ? classes.Active : ""}`} {...rest}>
            {children}
        </button>
    )
})

export default TabButton
