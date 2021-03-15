import React, { useState } from 'react'
import classes from './JobsTabViewer.module.css'
import TabList from './TabList/TabList'
import TabPanels from './TabPanels/TabPanels'

interface Props {

}

const JobsTabViewer: React.FC<Props> = props => {
    const [activeTabIndex, setActiveTabIndex] = useState(0)
    const updateActiveIndex = (index: number) => {
        setActiveTabIndex(index)
    }

    return (
        <div className={classes.JobsTabViewer}>
            <TabList activeTabIndex={activeTabIndex} updateActiveIndex={updateActiveIndex} />
            <TabPanels activeTabIndex={activeTabIndex} />
        </div>
    )
}

export default JobsTabViewer
