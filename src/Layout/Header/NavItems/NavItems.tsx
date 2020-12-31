import React from 'react'
import classes from './NavItems.module.css'
import { Link } from 'react-scroll'

interface Props {
    closeSideMenu: () => void,
    isInSideMenu?: boolean
}

const NavItems: React.FC<Props> = props => {
    return (
        <ol className={classes.NavList}>
            {
                ["About", "Work", "Contact"]
                    .map(item => (
                        <li key={item} className={`${classes.NavListItem} ${!props.isInSideMenu ? "fade-down" : ""}`}>
                            <Link
                                to={item}
                                smooth={true}
                                className={classes.NavLink}
                                isDynamic={true}
                                tabIndex={0}
                                href={`#${item}`}
                                onClick={() => {
                                    props.closeSideMenu()
                                    setTimeout(() => { window.location.hash = item }, 0)
                                }}
                            >{item}</Link>
                        </li>
                    ))
            }
        </ol>
    )
}

export default NavItems
