import styled from '@emotion/styled'
import React, { ReactNode, useState } from 'react'

import { HandleSlideChange, useSlideChange } from './hooks/useSlideChange'

type Slides = ReactNode[]

type CarouselContext = {
    slides: Slides
    setSlides: React.Dispatch<React.SetStateAction<Slides>>
    activeSlideIndex: number
    handleSlideChange: HandleSlideChange
}

const CarouselContainer = styled.section`
    position: relative;
`

export const CarouselContext = React.createContext<CarouselContext>(undefined!)

export const Carousel: React.FC = ({ children }) => {
    const [slides, setSlides] = useState<Slides>([])
    const { activeSlideIndex, handleSlideChange } = useSlideChange()

    return (
        <CarouselContainer>
            <CarouselContext.Provider
                value={{
                    activeSlideIndex,
                    handleSlideChange,
                    slides,
                    setSlides,
                }}
            >
                {children}
            </CarouselContext.Provider>
        </CarouselContainer>
    )
}

export * from './components/CarouselSlides'
export * from './components/CarouselNav'
