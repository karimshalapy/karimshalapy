import React from 'react'
import classes from './Backdrop.module.css'

interface Props {
    open: boolean,
    toggle: () => void
}

const Backdrop: React.FC<Props> = props => (
    props.open ?
        <div onClick={props.toggle} className={classes.Backdrop}></div>
        : null
)
export default Backdrop
