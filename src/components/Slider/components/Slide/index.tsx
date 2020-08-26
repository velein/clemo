import React, { useContext } from 'react'
import { SliderContext } from '~components/Slider'

import { SlideStyled } from './styled'

export type SlideStyledProps = {
    index: number
}

export const Slide: React.FC<SlideStyledProps> = ({ index, children }) => {
    const { currentSlide } = useContext(SliderContext)

    return currentSlide === index ? <SlideStyled>{children}</SlideStyled> : null
}
