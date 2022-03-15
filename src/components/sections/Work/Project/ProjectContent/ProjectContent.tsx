import React from 'react'
import { IProjectContent } from '../../../../../@types/Work'
import classes from './ProjectContent.module.css'
import IconLink from '../../../../IconLink/IconLink'
import MonoTextList from '../../../../MonoTextList/MonoTextList'

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
            <MonoTextList data={props.projectContentData.techList} className={props.projectTechListClassName} />
            <div className={`${props.projectLinksClassName} ${classes.ProjectLinks}`}>
                {props.projectContentData.projectLinks?.github ?
                    <IconLink
                        aria-label={`${props.projectContentData.title} github repo`}
                        href={props.projectContentData.projectLinks.github}
                        iconType="Github"
                    /> : null
                }
                {props.projectContentData.projectLinks?.live ?
                    <IconLink
                        aria-label={`${props.projectContentData.title} live link`}
                        href={props.projectContentData.projectLinks.live}
                        iconType="External"
                    /> : null
                }
            </div>
        </div>
    )
}

export default ProjectContent
