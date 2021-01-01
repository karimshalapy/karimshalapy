import { createContext } from 'react'
import { IProjectData } from './@types/Work'

export const MainContext = createContext<{ projects: IProjectData[] }>({
    projects: []
})
export default MainContext