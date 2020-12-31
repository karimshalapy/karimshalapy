import React from 'react'
import classes from './HamburgerButton.module.css'

interface Props {
    open: boolean,
    toggle: () => void
}

const HamburgerButton: React.FC<Props> = props => {
    return (
        <button className={classes.HamburgerButton} onClick={props.toggle}>
            <div className={`${classes.HamburgerBox} ${props.open ? classes.Open : ""}`}>
                <div className={`${classes.HamburgerInner} ${props.open ? classes.Open : ""}`}></div>
            </div>
        </button>
    )
}

export default HamburgerButton
