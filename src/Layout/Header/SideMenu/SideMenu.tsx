import React, { useRef } from 'react'
import Button from '../../../components/Button/Button'
import useFocusTrap from '../../../hooks/useFocusTrap'
import NavItems from '../NavItems/NavItems'
import classes from './SideMenu.module.css'

interface Props {
    buttonRef: React.RefObject<HTMLButtonElement>
    open: boolean,
    close: () => void
}

const SideMenu: React.FC<Props> = props => {
    const navRef = useRef<HTMLElement>(null)
    useFocusTrap(props.buttonRef, navRef, props.close)
    return (
        <aside className={`${classes.SideMenu} ${props.open ? classes.Open : ""}`}>
            <nav ref={navRef}>
                <NavItems closeSideMenu={props.close} />
                <Button customClass={classes.ResumeButton} link="/Karim Shalapy_Front-end.pdf">Resume</Button>
            </nav>
        </aside>
    )
}

export default SideMenu
