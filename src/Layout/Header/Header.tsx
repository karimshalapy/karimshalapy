import React, { useEffect, useState } from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import Button from '../../components/Button/Button'
import useScrollDirection from '../../hooks/useScrollDirection'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import classes from './Header.module.css'
import NavItems from './NavItems/NavItems'

interface Props {

}

const Header: React.FC<Props> = props => {
    const scrollDirection = useScrollDirection({ initialDirection: "down" })
    const [scrolledToTop, setScrolledToTop] = useState(true)
    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    const handleScroll = () => {
        setScrolledToTop(window.pageYOffset < 50)
    }
    //useEffect to check if we're at top on scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    //creating a variable with the classes of the header depending on the scroll state
    const headerClasses = [classes.Header,
    scrollDirection === "down" && !scrolledToTop ? classes.ScrolledDown : "",
    scrollDirection === "up" && !scrolledToTop ? classes.ScrolledUp : "",
    ].join(" ")
    //toggling side menu
    const toggleSideMenu = () => {
        setSideMenuOpen(prev => !prev)
        document.body.classList.toggle("blur")
    }

    return (
        <>
            <header className={headerClasses}>
                <nav className={classes.Navbar}>
                    <p>K</p>
                    <div className={classes.NavItemsContainer}>
                        <NavItems />
                        <Button customClass={classes.ResumeButton} link="/Karim Shalapy_Front-end.pdf">Resume</Button>
                    </div>
                    <HamburgerButton open={sideMenuOpen} toggle={toggleSideMenu} />
                </nav>
            </header>
            <Backdrop open={sideMenuOpen} toggle={toggleSideMenu} />
        </>
    )
}

export default Header
