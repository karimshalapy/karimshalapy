import React from 'react'
import InlineLink from '../../../InlineLink/InlineLink'
import classes from './AboutMeContent.module.css'

interface Props {

}

const AboutMeContent: React.FC<Props> = props => {
    return (
        <div>
            <p>Hello! I'm Brittany, a software engineer based in Boston, MA.</p>
            <p>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
            <p>Shortly after graduating from <InlineLink href="https://www.ccis.northeastern.edu">Northeastern University</InlineLink>, I joined the engineering team at <InlineLink href="https://www.upstatement.com">Upstatement</InlineLink> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={classes.SkillsList}>
                <li>JavaScript (ES6+)</li>
                <li>HTML &amp; (S)CSS</li>
                <li>React</li>
                <li>Vue</li>
                <li>Node.js</li>
                <li>WordPress</li>
            </ul>
        </div>
    )
}

export default AboutMeContent
