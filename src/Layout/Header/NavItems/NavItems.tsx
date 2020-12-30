import React from 'react'
import classes from './NavItems.module.css'
import { Link, animateScroll as scroll } from 'react-scroll'

interface Props {

}

const NavItems: React.FC<Props> = props => {
    return (
        <ol className={classes.NavList}>
            {
                ["About", "Work", "Contact"]
                    .map(item => (
                        <li key={item} className={classes.NavListItem}>
                            <Link
                                to={item}
                                smooth={true}
                                className={classes.NavLink}
                                isDynamic={true}
                            >{item}</Link>
                        </li>
                    ))
            }
        </ol>
    )
}

export default NavItems
