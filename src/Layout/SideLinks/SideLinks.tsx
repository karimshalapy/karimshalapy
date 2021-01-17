import React from 'react'
import classes from './SideLinks.module.css'
import IconLink from '../../components/IconLink/IconLink'
import { iconTypes } from '../../assets/icons'

interface Props {
    isLeft?: boolean
    isFooter?: boolean
}
const socialLinksData: { [key in iconTypes]?: string } = {
    Github: "https://github.com/karimshalapy",
    Linkedin: "https://www.linkedin.com/in/karimshalapy/",
    Hackerrank: "https://www.hackerrank.com/karimshalapy",
    Twitter: "https://twitter.com/KarimShalapy",
    Codepen: "https://codepen.io/karimshalapy",
}

const SideLinks: React.FC<Props> = props => {
    return (
        <div className={`${classes.SideLinks} ${props.isLeft ? classes.Left : ""} ${!props.isFooter ? "fade-delayed" : ""}`}>
            {
                props.isLeft
                    ?
                    <ul>
                        {
                            Object.entries(socialLinksData).map(([key, value]) => (
                                <li key={key}>
                                    <IconLink
                                        aria-label={`karim's ${key} profile`}
                                        iconType={key as iconTypes}
                                        href={value!}
                                    />
                                </li>
                            ))
                        }
                    </ul>
                    :
                    <a aria-label="" href="mailto:karimshalapy@gmail.com">karimshalapy@gmail.com</a>
            }
        </div>
    )
}

export default SideLinks
