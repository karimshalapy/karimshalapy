import React from 'react'
import Button from '../../Button/Button'
import Heading from '../../Heading/Heading'
import classes from './Contact.module.css'

interface Props {

}

const Contact: React.FC<Props> = props => {
    return (
        <section id="Contact" className={classes.Contact}>
            <Heading variant="h2" size="numbered">What’s Next?</Heading>
            <Heading variant="h3" size="normal">Get In Touch</Heading>
            <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <Button link="mailto:karimshalapy@gmail.com">Say Hello</Button>
        </section>
    )
}

export default Contact
