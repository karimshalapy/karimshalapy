import React from 'react'
import classes from './InlineLink.module.css'

interface Props {
    href: string,
    target?: string,
    rel?: string
}

const InlineLink: React.FC<Props> = ({ children, ...rest }) => (
    <a {...rest} className={classes.InlineLink}>{children}</a>
)

export default InlineLink
