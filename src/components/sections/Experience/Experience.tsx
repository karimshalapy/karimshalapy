import React from 'react'
import Heading from '../../Heading/Heading'
import classes from './Experience.module.css'
import JobsTabViewer from './JobsTabViewer/JobsTabViewer'

interface Props {

}

const Experience: React.FC<Props> = props => {
    return (
        <section id="Experience" className={`${classes.Experience} fade-up`}>
            <Heading variant="h2" size="numbered">Where I’ve Worked</Heading>
            <JobsTabViewer />
        </section>
    )
}

export default Experience
