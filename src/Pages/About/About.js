import React from 'react'
import { homeObjTwo} from './Data'
import { InfoSection, Products } from '../../components'

const About = () => {
    return (
        <>
            {/* <InfoSection {...homeObjOne}/> */}
            <InfoSection {...homeObjTwo}/>
            {/* <InfoSection {...homeObjThree}/> */}
            <Products />

        </>
    )
}

export default About
