import React, { useContext, useState } from 'react'
import { IProjectContent } from '../../../@types/Work'
import MainContext from '../../../MainContext'
import Button from '../../Button/Button'
import classes from './OtherProjects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

interface Props {

}
const otherProjectsDummyData = Array.from({ length: 7 }, () => (
    {
        overline: "Personal Project",
        title: "Slippers This is an E-commerce website that replicates the design of a famous E-commerce store ",
        description: "that's fully responsive on all screen sizes. It has a Nav bar with dropdown menus that shift to a side nav on smaller screens, Home page that has different sliders and a dismantling figure with subtle animations, ",
        techList: [
            "TypeScript",
            "React",
            "Firebase"
        ],
        projectLinks: {
            "github": "https://github.com/karimshalapy/slippers-react",
            "live": "https://slippers-react.web.app/"
        }
    }
))
otherProjectsDummyData.push({
    overline: "Personal Project",
    title: "Slippers This is an E-commerce website that replicates the design of a famous E-commerce store ",
    description: "that's fully responsive on all screen sizes. It has a Nav bar with dropdown menus that shift to a side nav on smaller screens, Home page that has different sliders and a dismantling figure with subtle animations, that's fully responsive on all screen sizes. It has a Nav bar with dropdown menus that shift to a side nav on smaller screens, Home page that has different sliders and a dismantling figure with subtle animations, that's fully responsive on all screen sizes. It has a Nav bar with dropdown menus that shift to a side nav on smaller screens, Home page that has different sliders and a dismantling figure with subtle animations, ",
    techList: [
        "TypeScript",
        "React",
        "Firebase"
    ],
    projectLinks: {
        "github": "https://github.com/karimshalapy/slippers-react",
        "live": "https://slippers-react.web.app/"
    }
})
const OtherProjects: React.FC<Props> = props => {
    const GRID_LIMIT = 6;
    // const { otherProjects } = useContext(MainContext)
    const [showMore, setShowMore] = useState(false)
    const renderDataMapCallback = (item: IProjectContent) => (
        <ProjectCard key={item.title} projectData={item} />
    )
    return (
        <section className={classes.OtherProjects}>
            <h2 className={classes.OtherProjectsHeading}>Other Noteworthy Projects</h2>
            <div className={classes.OtherProjectsGrid}>
                {
                    showMore
                        ?
                        otherProjectsDummyData.map(renderDataMapCallback)
                        :
                        otherProjectsDummyData.slice(0, GRID_LIMIT).map(renderDataMapCallback)
                }
            </div>
            {
                otherProjectsDummyData.length > GRID_LIMIT
                    ? <Button customClass={classes.ShowMoreBtn} clickHandler={() => { setShowMore(prev => !prev) }}>{showMore ? "Show Less" : "Show More"}</Button>
                    : null
            }
        </section>
    )
}

export default OtherProjects
