//This is where we'll manager any context that needs to be used across our applications. 
//Below we've created a component that contains multiple states. We can later wrap a component with this one to give it access to all our different contexts

import { useState } from "react"


export const ContextProvider = ({children})=> {
    const [sample,setSample] = useState ("")
    const [sample2,setSample2] = useState ("")
    const [sample3,setSample3] = useState ("")

}

