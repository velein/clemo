import React, { ReactNodeArray } from 'react'
import { Slide } from '../Slide'

type SlidesProps = {
    children: ReactNodeArray
}

export const Slides: React.FC<SlidesProps> = ({ children }) => {
    if (!children) {
        return null
    }

    const renderSlides = children.map((child, index) => {
        return (
            <Slide index={index} key={index}>
                {child}
            </Slide>
        )
    })

    return <div>{renderSlides}</div>
}
