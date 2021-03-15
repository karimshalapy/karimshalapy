import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import TabButton from './TabButton/TabButton'
import TabHighlight from './TabHighlight/TabHighlight'
import classes from './TabList.module.css'
import KEY_CODES from '../../../../../utils/keyCodes'
import MainContext from '../../../../../MainContext'

interface Props {
    activeTabIndex: number,
    updateActiveIndex: (i: number) => void,
}



const TabList: React.FC<Props> = props => {
    const [tabFocus, setTabFocus] = useState<null | number>(null)
    const tabs = useRef<(HTMLButtonElement | null)[]>([])
    const { jobsDetails } = useContext(MainContext)

    const focusTab = useCallback(() => {

        if (typeof tabFocus === "number") {
            const currentFocusedTab = tabs.current[tabFocus]
            if (currentFocusedTab) {
                currentFocusedTab?.focus()
                return
            }
            // If we're at the end, go to the start
            if (tabFocus >= tabs.current.length) {
                setTabFocus(0)
            }
            // If we're at the start, move to the end
            if (tabFocus < 0) {
                setTabFocus(tabs.current.length - 1)
            }
        }
    }, [tabFocus])

    // Only re-run the effect if tabFocus changes
    useEffect(() => focusTab(), [focusTab])

    // Focus on tabs when using up & down arrow keys
    const keyDownHandler = (e: React.KeyboardEvent) => {
        switch (e.key) {
            case KEY_CODES.ARROW_UP:
                e.preventDefault()
                setTabFocus((tabFocus ?? 1) - 1)
                break

            case KEY_CODES.ARROW_DOWN:
                e.preventDefault()
                setTabFocus((tabFocus ?? -1) + 1)
                break

            default:
                break
        }
    }



    return (
        <div className={classes.TabList} role="tablist" aria-label="Job tabs" onKeyDown={keyDownHandler}>
            {
                jobsDetails.map(({ companyName }, i) => (
                    <TabButton
                        key={i}
                        isActive={props.activeTabIndex === i}
                        onClick={() => props.updateActiveIndex(i)}
                        ref={(el) => (tabs.current[i] = el)}
                        id={`tab-${i}`}
                        role="tab"
                        tabIndex={props.activeTabIndex === i ? 0 : -1}
                        aria-selected={props.activeTabIndex === i ? true : false}
                        aria-controls={`panel-${i}`}
                    >{companyName}</TabButton>
                ))
            }
            <TabHighlight activeTabIndex={props.activeTabIndex} />
        </div>
    )
}

export default TabList
