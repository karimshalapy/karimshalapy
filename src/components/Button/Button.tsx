import React from 'react'
import classes from './Button.module.css'

interface Props {
    link?: string
    customClass?: string,
    clickHandler?: (e: React.MouseEvent) => void
}

const Button: React.FC<Props> = props => {
    const classeNames = [classes.Button, props.customClass ? props.customClass : ""].join(" ")
    return (
        !props.link
            ?
            <button className={classeNames} onClick={props.clickHandler}>
                {props.children}
            </button>
            :
            <a href={props.link} className={classeNames} onClick={props.clickHandler} target="_blank" rel="noreferrer">
                {props.children}
            </a>
    )
}

export default Button
