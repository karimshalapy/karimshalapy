import React from 'react'
import classes from './SideLinks.module.css'
import { ReactComponent as Github } from '../../assets/icons/github.svg'
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg'
import { ReactComponent as Hackerrank } from '../../assets/icons/hackerrank.svg'
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg'
import { ReactComponent as Codepen } from '../../assets/icons/codepen.svg'

interface Props {
    isLeft?: boolean
}

const SideLinks: React.FC<Props> = props => {
    return (
        <div className={`${classes.SideLinks} ${props.isLeft ? classes.Left : ""} fade-delayed`}>
            {
                props.isLeft
                    ?
                    <ul>
                        <li><a href="https://github.com/karimshalapy" target="_blank" rel="noreferrer"><Github /></a></li>
                        <li><a href="https://www.linkedin.com/in/karimshalapy/" target="_blank" rel="noreferrer"><Linkedin /></a></li>
                        <li><a href="https://www.hackerrank.com/karimshalapy" target="_blank" rel="noreferrer"><Hackerrank /></a></li>
                        <li><a href="https://twitter.com/KarimShalapy" target="_blank" rel="noreferrer"><Twitter /></a></li>
                        <li><a href="https://codepen.io/karimshalapy" target="_blank" rel="noreferrer"><Codepen /></a></li>
                    </ul>
                    :
                    <a href="mailto:karimshalapy@gmail.com">karimshalapy@gmail.com</a>
            }
        </div>
    )
}

export default SideLinks
