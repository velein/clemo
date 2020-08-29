import React, { useContext } from 'react'
import { CarouselContext } from '~components/Carousel'
import { Dot, DotsWrapper } from './styled'

export type DotStyledProps = {
    active: boolean
}

export const Dots: React.FC = () => {
    const { slides, setCurrentSlide, currentSlide } = useContext(
        CarouselContext,
    )

    return (
        <DotsWrapper>
            {slides.map((slide, index) => {
                return (
                    <Dot
                        key={index}
                        active={currentSlide === index}
                        onClick={() => setCurrentSlide(index)}
                    />
                )
            })}
        </DotsWrapper>
    )
}
