import React from 'react'
import { IProjectData } from '../../../../@types/Work'
import classes from './Project.module.css'
import ProjectContent from './ProjectContent/ProjectContent'
import ProjectImage from './ProjectImage/ProjectImage'

interface Props {
    projectData: IProjectData
}

const Project: React.FC<Props> = ({ projectData }) => {
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
