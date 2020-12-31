import React from 'react'
import classes from './Heading.module.css'

enum headingSize { "big", "medium", "numbered", "normal" }
interface Props {
    size: "big" | "medium" | "numbered" | "normal",
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
    customClass?: string
}
const Heading: React.FC<Props> = props => {
    const headingClasses = [classes.BigHeading, classes.MediumHeading, classes.NumberedHeading, ""]
    const classNames = `${headingClasses[headingSize[props.size]]} ${props.customClass}`
    if (props.variant === "h1") return <h1 className={classNames}>{props.children}</h1>
    if (props.variant === "h2") return <h2 className={classNames}>{props.children}</h2>
    if (props.variant === "h3") return <h3 className={classNames}>{props.children}</h3>
    if (props.variant === "h4") return <h4 className={classNames}>{props.children}</h4>
    if (props.variant === "h5") return <h5 className={classNames}>{props.children}</h5>
    if (props.variant === "h6") return <h6 className={classNames}>{props.children}</h6>
    return null
}

export default Heading
