import React from 'react'
import Button from '../../components/Button'
import classes from './Header.module.css'
import NavItems from './NavItems/NavItems'

interface Props {

}

const Header: React.FC<Props> = props => {
    return (
        <header className={classes.Header}>
            <nav className={classes.Navbar}>
                <p>K</p>
                <div className={classes.NavItemsContainer}>
                    <NavItems />
                    <Button customClass={classes.ResumeButton} link="/Karim Shalapy_Front-end.pdf">Resume</Button>
                </div>
            </nav>
        </header>
    )
}

export default Header
