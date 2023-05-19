import React from 'react'
import InlineLink from '../../../InlineLink/InlineLink'
import classes from './AboutMeContent.module.css'

interface Props {

}

const AboutMeContent: React.FC<Props> = props => {
    return (
        <div>
            <p>Hello! I'm Karim, a front-end developer based in Egypt.</p>
            <p>I love creating things using JavaScript in general, and in React specifically. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
            <p>I graduated from <InlineLink href="http://suezuniv.edu.eg/su/index.php/en/" target="_blank" rel="noreferrer">Suez University</InlineLink> and worked as a Welding QC Engineer for 3 years. After that, I figured out that's not what I wanted to do in life, so I shifted my career to become a software engineer.</p>
            <p>Here are a few technologies I've been working with recently:</p>
            <ul className={classes.SkillsList}>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML &amp; (S)CSS</li>
                <li>Tailwind</li>
                <li>React</li>
                <li>Vue</li>
                <li>Next</li>
                <li>Nuxt</li>
                <li>Astro</li>
                <li>Apollo/Client</li>
                <li>Firebase</li>
                <li>LaTeX</li>
            </ul>
        </div>
    )
}

export default AboutMeContent
