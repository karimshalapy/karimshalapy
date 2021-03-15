import React, { useCallback } from 'react'
import useWindowWidth from '../../../../../../hooks/useWindowWidth'
import classes from './TabHighlight.module.css'

interface Props {
    activeTabIndex: number
}

const TabHighlight: React.FC<Props> = ({ activeTabIndex }) => {
    const windowWidth = useWindowWidth()

    const getDisplacementStyles = useCallback(() => {
        const bodyComputedStyles = getComputedStyle(document.body)
        const tabHeight = +bodyComputedStyles.getPropertyValue("--tab-height").slice(0, -2)
        const tabWidth = +bodyComputedStyles.getPropertyValue("--tab-width").slice(0, -2)
        if (windowWidth && windowWidth > 600) {
            return {
                transform: `translateY(${activeTabIndex * tabHeight}px)`
            }
        } else {
            return {
                transform: `translateX(${activeTabIndex * tabWidth}px)`
            }
        }
    }, [activeTabIndex, windowWidth])


    return (
        <div className={classes.TabHighlight} style={getDisplacementStyles()}></div>
    )
}

export default TabHighlight
