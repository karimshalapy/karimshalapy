import React from 'react'
import { IProjectData } from '../../../@types/Work'
import Heading from '../../Heading/Heading'
import Project from './Project/Project'

interface Props {

}
const dummyProjectData: IProjectData[] = [
    {
        projectContent: {
            overline: "Featured Project",
            title: "OctoProfile",
            description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            techList: ["Next.js", "Chart.js", "GitHub API"],
            projectLinks: {
                github: "#",
                live: "#"
            }
        },
        projectImage: {
            src: "https://brittanychiang.com/static/76c828e964233651d4fb75f911746c90/21ecb/octoprofile.png",
            alt: "Octo Profile"
        }
    },
    {
        projectContent: {
            overline: "Featured Project",
            title: "OctoProfile",
            description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            techList: ["Next.js", "Chart.js", "GitHub API"],
            projectLinks: {
                github: "#",
                live: "#"
            }
        },
        projectImage: {
            src: "https://brittanychiang.com/static/76c828e964233651d4fb75f911746c90/21ecb/octoprofile.png",
            alt: "Octo Profile"
        }
    },
    {
        projectContent: {
            overline: "Featured Project",
            title: "OctoProfile",
            description: "A nicer look at your GitHub profile and repository stats with data visualizations of your top languages and stars. Sort through your top repos by number of stars, forks, and size.",
            techList: ["Next.js", "Chart.js", "GitHub API"],
            projectLinks: {
                github: "#",
                live: "#"
            }
        },
        projectImage: {
            src: "https://brittanychiang.com/static/76c828e964233651d4fb75f911746c90/21ecb/octoprofile.png",
            alt: "Octo Profile"
        }
    },
]
const Work: React.FC<Props> = props => {
    return (
        <section id="Work">
            <Heading variant="h2" size="numbered">Some Things I’ve Built</Heading>
            {
                dummyProjectData.map(item => (
                    <Project key={item.projectContent.title} projectData={item} />
                ))
            }
        </section>
    )
}

export default Work
