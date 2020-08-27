import React, { useContext } from 'react'
import { CarouselContext } from '~components/Carousel'

import { SlideStyled } from './styled'

export type SlideStyledProps = {
    index: number
}

export const Slide: React.FC<SlideStyledProps> = ({ index, children }) => {
    const { currentSlide } = useContext(CarouselContext)

    return currentSlide === index ? <SlideStyled>{children}</SlideStyled> : null
}
