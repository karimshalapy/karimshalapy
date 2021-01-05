import React from 'react'
import SideLinks from '../SideLinks/SideLinks'
import classes from './Footer.module.css'

interface Props {

}

const Footer: React.FC<Props> = props => {
    return (
        <footer className={`${classes.Footer} fade-up`}>
            <SideLinks isLeft isFooter />
        </footer>
    )
}

export default Footer
