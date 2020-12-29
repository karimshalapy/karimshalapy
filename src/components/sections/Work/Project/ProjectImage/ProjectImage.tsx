import React from 'react'
import { IProjectImage } from '../../../../../@types/Work'
import classes from './ProjectImage.module.css'

interface Props {
    projectImageClassName: string,
    projectImageData: IProjectImage,
    url: string
}

const ProjectImage: React.FC<Props> = props => {
    return (
        <div className={`${props.projectImageClassName} ${classes.ProjectImage}`}>
            <a href={props.url}>
                <img src={props.projectImageData.src} alt={props.projectImageData.alt} />
            </a>
        </div>
    )
}

export default ProjectImage
