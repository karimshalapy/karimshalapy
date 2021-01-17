import React, { useContext, useState } from 'react'
import { IProjectContent } from '../../../@types/Work'
import MainContext from '../../../MainContext'
import Button from '../../Button/Button'
import classes from './OtherProjects.module.css'
import ProjectCard from './ProjectCard/ProjectCard'

interface Props {

}
// const otherProjectsDummyData = [
//     {
//         overline: "Personal Project",
//         title: "Natours — Exciting tours for adventurous people",
//         description: "A landing page built with legacy float grid system, in it I utilize a lot of advanced SCSS features. It has a Modal, and a Sidebar all done with CSS not one line of JavaScript ",
//         techList: [
//             "HTML",
//             "S(CSS)",
//             "Node"
//         ],
//         projectLinks: {
//             "github": "",
//             "live": "https://karimshalapy.github.io/natours"
//         }
//     },
//     {
//         overline: "Personal Project",
//         title: "Trillo — Your all-in-one booking app",
//         description: "A simple application web page built to utilize the advanced CSS flexbox features",
//         techList: [
//             "HTML",
//             "S(CSS)",
//             "Node"
//         ],
//         projectLinks: {
//             "github": "",
//             "live": "https://karimshalapy.github.io/trillo"
//         }
//     },
//     {
//         overline: "Personal Project",
//         title: "Nexter — your home, your freedom",
//         description: "A landing web page built with modern CSS grid system. This webpage has almost all the features of CSS grid utilized in it in addition to not position any item in it absolutely.",
//         techList: [
//             "HTML",
//             "S(CSS)",
//             "Node"
//         ],
//         projectLinks: {
//             "github": "",
//             "live": "https://karimshalapy.github.io/nexter/"
//         }
//     },
// ]
const OtherProjects: React.FC<Props> = props => {
    const GRID_LIMIT = 6;
    const { otherProjects } = useContext(MainContext)
    const [showMore, setShowMore] = useState(false)
    const renderDataMapCallback = (item: IProjectContent) => (
        <ProjectCard key={item.title} projectData={item} showMore={showMore} />
    )
    return (
        <section className={classes.OtherProjects}>
            <h2 className={`${classes.OtherProjectsHeading} fade-up`}>Other Noteworthy Projects</h2>
            <div className={classes.OtherProjectsGrid}>
                {
                    showMore
                        ?
                        otherProjects.map(renderDataMapCallback)
                        :
                        otherProjects.slice(0, GRID_LIMIT).map(renderDataMapCallback)
                }
            </div>
            {
                otherProjects.length > GRID_LIMIT
                    ? <Button customClass={`${classes.ShowMoreBtn} fade-up`} clickHandler={() => { setShowMore(prev => !prev) }}>{showMore ? "Show Less" : "Show More"}</Button>
                    : null
            }
        </section>
    )
}

export default OtherProjects
