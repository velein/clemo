import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react'

import { CarouselDots } from './components/CarouselDots'
import { CarouselSlide } from './components/CarouselSlide'
import { CarouselSlides } from './components/CarouselSlides'
import { HandleSlideChange, useSlideChange } from './services/useSlideChange'
import { SliderWrapper } from './styled'

type CarouselProps = {
    children: ReactNode[] | ReactNode
}

type CarouselContextType = {
    activeSlideIndex: number
    slidesMaxIndex: number
    setSlidesMaxIndex: Dispatch<SetStateAction<number>>
    handleSlideChange: HandleSlideChange
}

export const CarouselContext = React.createContext({} as CarouselContextType)

export const Carousel: React.FC<CarouselProps> = ({ children, ...props }) => {
    const [slidesMaxIndex, setSlidesMaxIndex] = useState<number>(0)
    const { activeSlideIndex, handleSlideChange } = useSlideChange()

    const value: CarouselContextType = {
        activeSlideIndex,
        slidesMaxIndex,
        setSlidesMaxIndex,
        handleSlideChange,
    }

    return (
        <CarouselContext.Provider value={value}>
            <SliderWrapper {...props}>{children}</SliderWrapper>
        </CarouselContext.Provider>
    )
}

export { CarouselDots, CarouselSlide, CarouselSlides }
