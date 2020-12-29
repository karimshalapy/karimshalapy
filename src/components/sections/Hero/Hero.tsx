import React from 'react'
import Button from '../../Button'
import Heading from '../../Heading/Heading'
import classes from './Hero.module.css'

interface Props {

}

const Hero: React.FC<Props> = props => {
    return (
        <section id="Hero" className={classes.Hero}>
            <Heading variant="h1" size="normal">Hi, my name is</Heading>
            <Heading variant="h2" size="big">Karim Shalapy.</Heading>
            <Heading variant="h3" size="big">I build things for the web.</Heading>
            <p>I'm a software engineer based in Egypt specializing in building exceptional websites, applications.</p>
            <Button customClass={classes.Email} link="mailto:karimshalapy@gmail.com">Get In Touch</Button>
        </section>
    )
}

export default Hero
