import React from 'react'
import Button from '../../../components/Button/Button'
import NavItems from '../NavItems/NavItems'
import classes from './SideMenu.module.css'

interface Props {
    open: boolean
}

const SideMenu: React.FC<Props> = props => {
    return (
        <aside className={`${classes.SideMenu} ${props.open ? classes.Open : ""}`}>
            <nav>
                <NavItems />
                <Button customClass={classes.ResumeButton} link="/Karim Shalapy_Front-end.pdf">Resume</Button>
            </nav>
        </aside>
    )
}

export default SideMenu
