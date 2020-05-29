import { createContext } from 'react'

export const ShowSideBar = createContext({
    hidden: false,
    toogleHidden: () => { }
})