import React from 'react'
import Heading from '../../Heading/Heading'
import AvatarImage from './AvatarImage/AvatarImage'
import AboutMeContent from './AboutMeContent/AboutMeContent'
import classes from './About.module.css'

interface Props {

}

const About: React.FC<Props> = props => {
    return (
        <section id="About">
            <Heading variant="h2" size="numbered">About Me</Heading>
            <article className={classes.AboutContentWrapper}>
                <AboutMeContent />
                <AvatarImage />
            </article>
        </section>
    )
}

export default About
