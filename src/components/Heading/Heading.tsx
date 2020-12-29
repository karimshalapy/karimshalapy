import React from 'react'
import classes from './Heading.module.css'

enum headingSize { "big", "medium", "numbered", "normal" }
interface Props {
    size: "big" | "medium" | "numbered" | "normal",
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}
const Heading: React.FC<Props> = props => {
    const headingClasses = [classes.BigHeading, classes.MediumHeading, classes.NumberedHeading, ""]
    if (props.variant === "h1") return <h1 className={headingClasses[headingSize[props.size]]}>{props.children}</h1>
    if (props.variant === "h2") return <h2 className={headingClasses[headingSize[props.size]]}>{props.children}</h2>
    if (props.variant === "h3") return <h3 className={headingClasses[headingSize[props.size]]}>{props.children}</h3>
    if (props.variant === "h4") return <h4 className={headingClasses[headingSize[props.size]]}>{props.children}</h4>
    if (props.variant === "h5") return <h5 className={headingClasses[headingSize[props.size]]}>{props.children}</h5>
    if (props.variant === "h6") return <h6 className={headingClasses[headingSize[props.size]]}>{props.children}</h6>
    return null
}

export default Heading
