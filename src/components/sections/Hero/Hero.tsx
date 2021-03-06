import React from 'react'
import Button from '../../Button/Button'
import Heading from '../../Heading/Heading'
import classes from './Hero.module.css'

interface Props {

}

const Hero: React.FC<Props> = props => {
    return (
        <section id="Hero" className={classes.Hero}>
            <Heading variant="h1" size="normal" customClass="fade-up-delayed" >Hi, my name is</Heading>
            <Heading variant="h2" size="big" customClass="fade-up-delayed" >Karim Shalapy.</Heading>
            <Heading variant="h3" size="big" customClass="fade-up-delayed" >I am a front-end developer</Heading>
            <p className="fade-up-delayed">Building websites can be a challenge, but I am up for any challenge. I am a front-end developer based in Egypt specializing in building exceptional websites, applications.</p>
            <div className="fade-up-delayed">
                <Button customClass={classes.Email} link="mailto:karimshalapy@gmail.com">Get In Touch</Button>
            </div>
        </section>
    )
}

export default Hero
