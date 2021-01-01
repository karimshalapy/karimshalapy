import React from 'react'
import { IProjectContent } from '../../../../../@types/Work'
import classes from './ProjectContent.module.css'
import { ReactComponent as Github } from '../../../../../assets/icons/github.svg'
import { ReactComponent as External } from '../../../../../assets/icons/external.svg'

interface Props {
    projectContentClassName: string,
    projectTechListClassName: string,
    projectLinksClassName: string,
    projectContentData: IProjectContent
}

const ProjectContent: React.FC<Props> = props => {
    return (
        <div className={`${props.projectContentClassName} ${classes.ProjectContent}`}>
            <p className={classes.ProjectOverline}>
                {props.projectContentData.overline}
            </p>
            <h3 className={classes.ProjectTitle}>
                {props.projectContentData.title}
            </h3>
            <p className={classes.ProjectDescription}>
                {props.projectContentData.description}
            </p>
            <ul className={`${props.projectTechListClassName} ${classes.ProjectTechList}`}>
                {
                    props.projectContentData.techList.map(item => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
            <div className={`${props.projectLinksClassName} ${classes.ProjectLinks}`}>
                <a aria-label={`${props.projectContentData.title} live link`} href={props.projectContentData.projectLinks.github} target="_blank" rel="noreferrer"><Github /></a>
                <a aria-label={`${props.projectContentData.title} github repo`} href={props.projectContentData.projectLinks.live} target="_blank" rel="noreferrer" className={classes.External}><External /></a>
            </div>
        </div>
    )
}

export default ProjectContent
