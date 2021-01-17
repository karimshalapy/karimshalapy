import { createContext } from 'react'
import { IAllProjectsData } from './@types/Work'

export const MainContext = createContext<IAllProjectsData>({
    projects: [],
    otherProjects: [],
})
export default MainContext