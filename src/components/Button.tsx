import React from 'react'
import classes from './Button.module.css'

interface Props {
    link?: string
    customClass?: string
}

const Button: React.FC<Props> = props => {
    const classeNames = [classes.Button, props.customClass ? props.customClass : ""].join(" ")
    return (
        !props.link
            ?
            <button className={classeNames}>
                {props.children}
            </button>
            :
            <a href={props.link} className={classeNames} target="_blank" rel="noreferrer">
                {props.children}
            </a>
    )
}

export default Button
