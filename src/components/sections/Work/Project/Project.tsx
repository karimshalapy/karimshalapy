import React from 'react'
import { IProjectData } from '../../../../@types/Work'
import classes from './Project.module.css'
import ProjectContent from './ProjectContent/ProjectContent'
import ProjectImage from './ProjectImage/ProjectImage'

interface Props {
    projectData: IProjectData
}

const Project: React.FC<Props> = props => {
    return (
        <article className={classes.Project}>
            <ProjectContent
                projectContentClassName={classes.ProjectContent}
                projectTechListClassName={classes.ProjectTechList}
                projectLinksClassName={classes.ProjectLinks}
                projectContentData={props.projectData.projectContent}
            />
            <ProjectImage
                projectImageClassName={classes.ProjectImage}
                url={props.projectData.projectContent.projectLinks.live}
                projectImageData={props.projectData.projectImage}
            />
        </article>
    )
}

export default Project
