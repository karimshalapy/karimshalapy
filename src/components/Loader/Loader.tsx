import React, { useEffect, useState } from 'react'
import { Logo } from '../../assets/icons'
import animate from './animeConfig'
import classes from './Loader.module.css'
import './Loader.css'

interface Props {
    finishAnimating: () => void
}

const Loader: React.FC<Props> = ({ finishAnimating }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        document.body.classList.remove("hidden")
        document.body.classList.add("hidden")
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate(finishAnimating)

        return () => {
            document.body.classList.remove("hidden")
            clearTimeout(timeout)
        }
    }, [])

    return (
        <div className={classes.Loader} id="loader">
            <div className={`${classes.LogoWrapper} ${isMounted ? classes.Mounted : ""}`}>
                <Logo />
            </div>
        </div>
    )
}

export default Loader
