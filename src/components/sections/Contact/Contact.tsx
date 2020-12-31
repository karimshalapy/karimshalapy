import React from 'react'
import Button from '../../Button/Button'
import Heading from '../../Heading/Heading'
import classes from './Contact.module.css'

interface Props {

}

const Contact: React.FC<Props> = props => {
    return (
        <section id="Contact" className={`${classes.Contact} fade-up`}>
            <Heading variant="h2" size="numbered">What’s Next?</Heading>
            <Heading variant="h3" size="normal">Get In Touch</Heading>
            <p>Im currently looking for any new opportunities to put my skills to a good use and develop them even further, my inbox is always open.<br /> Whether you're interested in recruiting me, have a question, or just want to say hi, I'll get back to you ASAP!</p>
            <Button link="mailto:karimshalapy@gmail.com">Say Hello</Button>
        </section>
    )
}

export default Contact
