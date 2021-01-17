import React, { useEffect, useRef, useState } from 'react'
import Backdrop from '../../components/Backdrop/Backdrop'
import Button from '../../components/Button/Button'
import useScrollDirection from '../../hooks/useScrollDirection'
import HamburgerButton from './HamburgerButton/HamburgerButton'
import NavItems from './NavItems/NavItems'
import SideMenu from './SideMenu/SideMenu'
import { Logo } from '../../assets/icons'
import classes from './Header.module.css'
import './Logo.css'

interface Props {

}

const Header: React.FC<Props> = props => {
    const scrollDirection = useScrollDirection({ initialDirection: "down" })
    const [scrolledToTop, setScrolledToTop] = useState(true)
    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const buttonRef = useRef<HTMLButtonElement>(null)

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
    //closing side menu
    const closeSideMenu = () => {
        setSideMenuOpen(false)
        document.body.classList.remove("blur")
    }
    //on window resize handler to close the side menu if open when the size of the window is bigger than 768 (mobile version to desktop)
    const onResize = (e: UIEvent) => {
        const target = e.currentTarget as Window
        if (target.innerWidth > 768) {
            closeSideMenu()
        }
    }
    //useEffect to set the event listener for window resize and remove it on unmount
    useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <header className={headerClasses}>
                <nav className={classes.Navbar}>
                    <a href="#content" className={classes.SkipToContent}>Skip to Content</a>

                    <div className="fade">
                        <a href="/" aria-label="home" className={classes.LogoLink}>
                            <Logo />
                        </a>
                    </div>
                    <div className={classes.NavItemsContainer}>
                        <NavItems closeSideMenu={closeSideMenu} />
                        <div className="fade-down">
                            <Button customClass={classes.ResumeButton} link="/Karim Shalapy_Front-end.pdf">Resume</Button>
                        </div>
                    </div>
                    <HamburgerButton open={sideMenuOpen} toggle={toggleSideMenu} ref={buttonRef} />
                </nav>
                <SideMenu open={sideMenuOpen} close={closeSideMenu} buttonRef={buttonRef} />
            </header>
            <Backdrop open={sideMenuOpen} toggle={closeSideMenu} />
        </>
    )
}

export default Header
