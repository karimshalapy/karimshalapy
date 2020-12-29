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
            <div className={classes.AboutContentWrapper}>
                <AboutMeContent />
                <AvatarImage />
            </div>
        </section>
    )
}

export default About
