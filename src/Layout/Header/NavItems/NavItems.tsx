import React from 'react'
import classes from './NavItems.module.css'

interface Props {

}

const NavItems: React.FC<Props> = props => {
    return (
        <ol className={classes.NavList}>
            {
                ["About", "Work", "Contact"]
                    .map(item => (
                        <li key={item} className={classes.NavListItem}>
                            <a href={`#${item}`} className={classes.NavLink}>{item}</a>
                        </li>
                    ))
            }
        </ol>
    )
}

export default NavItems
