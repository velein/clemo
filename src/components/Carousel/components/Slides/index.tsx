import React, { useContext, useEffect } from 'react'
import { CarouselContext } from '~components/Carousel'
import { Slide } from '../Slide'

export const Slides: React.FC = () => {
    const { slides, setSlidesMaxIndex } = useContext(CarouselContext)

    console.log('slides?', slides)

    useEffect(() => {
        setSlidesMaxIndex(slides.length - 1)
    }, [slides, setSlidesMaxIndex])

    if (!slides) {
        return null
    }

    return (
        <div>
            {slides.map((slide, index) => (
                <Slide index={index} key={index}>
                    {slide}
                </Slide>
            ))}
        </div>
    )
}
