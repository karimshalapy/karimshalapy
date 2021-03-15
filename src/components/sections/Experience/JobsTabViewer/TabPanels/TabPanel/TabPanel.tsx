import React from 'react'
import InlineLink from '../../../../../InlineLink/InlineLink'
import classes from './TabPanel.module.css'

interface Props {
    id?: string,
    role?: string,
    tabIndex?: number,
    "aria-labelledby"?: string,
    "aria-hidden"?: boolean,
    hidden?: boolean,
    jobTitle: string,
    companyUrl: string,
    companyName: string,
    range: string,
    detailsList: string[],
}

const TabPanel: React.FC<Props> = ({ jobTitle, companyName, companyUrl, range, detailsList, ...rest }) => {
    return (
        <div className={classes.TabPanel} {...rest}>
            <h3 className={classes.TabPanelHeading}>
                <span>{jobTitle}</span>
                <span className={classes.Company}>
                    &nbsp;@&nbsp;
                    <InlineLink href={companyUrl} target="_blank" rel="noreferrer">{companyName}</InlineLink>
                </span>
            </h3>
            <p className={classes.Range}>{range}</p>
            <ul>
                {
                    detailsList.map((item) => (
                        <li key={item}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TabPanel
