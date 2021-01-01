import React, { useEffect } from 'react'
import { IProjectData } from '../../../../@types/Work'
import classes from './Project.module.css'
import ProjectContent from './ProjectContent/ProjectContent'
import ProjectImage from './ProjectImage/ProjectImage'
import ScrollReveal from 'scrollreveal'

interface Props {
    projectData: IProjectData
}

const Project: React.FC<Props> = ({ projectData }) => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            ScrollReveal().reveal(".fade-up", { interval: 50, viewFactor: 0.25, origin: "bottom", distance: "50px", delay: 200, easing: "ease-in" })
        }, 1500)
        return () => { clearTimeout(timeout) }
    }, [projectData])

    return (
        <article className={`${classes.Project} fade-up`}>
            <ProjectContent
                projectContentClassName={classes.ProjectContent}
                projectTechListClassName={classes.ProjectTechList}
                projectLinksClassName={classes.ProjectLinks}
                projectContentData={projectData.projectContent}
            />
            <ProjectImage
                projectImageClassName={classes.ProjectImage}
                url={projectData.projectContent.projectLinks.live}
                projectImageData={projectData.projectImage}
            />
        </article>
    )
}

export default Project
