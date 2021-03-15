import { createContext } from 'react'
import { IAllAppData } from './@types/Work'

export const MainContext = createContext<IAllAppData>({
    projects: [],
    otherProjects: [],
    jobsDetails: [],
})
export default MainContext