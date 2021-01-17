import React from 'react'
import classes from './IconLink.module.css'
import * as icons from '../../assets/icons'

interface Props {
    iconType: icons.iconTypes,
    href: string,
    className?: string,
    "aria-label": string,
}
const IconLink: React.FC<Props> = ({ iconType, className, ...rest }) => {
    const Icon = icons[iconType]
    return (
        <a
            {...rest}
            className={`${classes.IconLink} ${className}`}
            target="_blank"
            rel="noreferrer"
        >
            <Icon
                className={iconType === "External" ? classes.IconLinkSVGExternal : classes.IconLinkSVG}
            />
        </a>
    )
}

export default IconLink
