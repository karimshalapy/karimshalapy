import React from 'react'
import classes from './MonoTextList.module.css'

interface Props {
    className?: string,
    data: string[]
}

const MonoTextList: React.FC<Props> = props => {
    return (
        <ul className={`${props.className} ${classes.MonoTextList}`}>
            {
                props.data.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}

export default MonoTextList
