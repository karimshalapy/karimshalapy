import React, { forwardRef } from 'react'
import classes from './HamburgerButton.module.css'

interface Props {
    open: boolean,
    toggle: () => void
}

const HamburgerButton = forwardRef<HTMLButtonElement, Props>((props, nodeRef) => {
    return (
        <div className={`${classes.HamburgerButtonContainer} fade`}>
            <button className={classes.HamburgerButton} onClick={props.toggle} ref={nodeRef}>
                <div className={`${classes.HamburgerBox} ${props.open ? classes.Open : ""}`}>
                    <div className={`${classes.HamburgerInner} ${props.open ? classes.Open : ""}`}></div>
                </div>
            </button>
        </div>
    )
})

export default HamburgerButton
