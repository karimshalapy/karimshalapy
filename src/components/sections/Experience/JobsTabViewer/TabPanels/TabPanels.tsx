import React, { useContext } from 'react'
import TabPanel from './TabPanel/TabPanel'
import classes from './TabPanels.module.css'
import { CSSTransition } from 'react-transition-group'
import MainContext from '../../../../../MainContext'

interface Props {
    activeTabIndex: number
}

const TabPanels: React.FC<Props> = props => {

    const { jobsDetails } = useContext(MainContext)

    return (
        <div className={classes.TabPanels}>
            {
                jobsDetails.map((item, i) => (
                    <CSSTransition
                        key={i}
                        in={props.activeTabIndex === i}
                        timeout={250}
                        classNames={{
                            enter: classes["fade-enter"],
                            enterActive: classes["fade-enter-active"],
                            exit: classes["fade-exit"],
                            exitActive: classes["fade-exit-active"]
                        }}>
                        <TabPanel
                            id={`panel-${i}`}
                            role="tabpanel"
                            tabIndex={props.activeTabIndex === i ? 0 : -1}
                            aria-labelledby={`tab-${i}`}
                            aria-hidden={props.activeTabIndex !== i}
                            hidden={props.activeTabIndex !== i}
                            companyName={item.companyName}
                            companyUrl={item.companyUrl}
                            range={item.range}
                            jobTitle={item.jobTitle}
                            detailsList={item.detailsList}
                        />
                    </CSSTransition>
                ))
            }
        </div>
    )
}

export default TabPanels
