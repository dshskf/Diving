import { createContext } from 'react'

export const SlideHandler = createContext({    
    index: 0,
    tooglePrev: () => { },
    toogleNext: () => { }
})