import React, { useContext } from 'react'
import MainContext from '../../../MainContext'
import Heading from '../../Heading/Heading'
import Project from './Project/Project'

interface Props {

}

const Work: React.FC<Props> = props => {
    const { projects } = useContext(MainContext)
    return (
        <section id="Work" className="fade-up">
            <Heading variant="h2" size="numbered">Some Things I’ve Built</Heading>
            {
                projects.map(item => (
                    <Project key={item.projectContent.title} projectData={item} />
                ))
            }
        </section>
    )
}

export default Work
