import React from 'react'
import { IProjectContent } from '../../../../@types/Work'
import IconLink from '../../../IconLink/IconLink'
import { Folder } from '../../../../assets/icons'
import classes from './ProjectCard.module.css'
import MonoTextList from '../../../MonoTextList/MonoTextList'

interface Props {
    projectData: IProjectContent,
    showMore: boolean
}

const ProjectCard: React.FC<Props> = ({ projectData, showMore }) => {
    return (
        <article className={`${classes.ProjectCard} ${showMore ? "" : "fade-up"}`}>
            <div>
                <header className={classes.ProjectCardHeader}>
                    <Folder className={classes.ProjectCardIcon} />
                    {projectData.projectLinks.github ? <IconLink
                        aria-label={`${projectData.title} github repo`}
                        href={projectData.projectLinks.github}
                        iconType="Github"
                    /> : null}
                    {projectData.projectLinks.live ? <IconLink
                        aria-label={`${projectData.title} live link`}
                        href={projectData.projectLinks.live}
                        iconType="External"
                    /> : null}
                </header>

                <h3 className={classes.ProjectCardHeading}>{projectData.title}</h3>
                <p className={classes.ProjectCardText}>{projectData.description}</p>
            </div>

            <footer className={classes.ProjectCardFooter}>
                <MonoTextList data={projectData.techList} />
            </footer>
        </article>
    )
}

export default ProjectCard
