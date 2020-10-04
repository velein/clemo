import React, { ReactNode, useState } from 'react'

import { HandleSlideChange, useSlideChange } from './hooks/useSlideChange'

type Slides = ReactNode[]

type CarouselContext = {
    slides: Slides
    setSlides: React.Dispatch<React.SetStateAction<Slides>>
    activeSlideIndex: number
    handleSlideChange: HandleSlideChange
}

export const CarouselContext = React.createContext<CarouselContext>(undefined!)

export const Carousel: React.FC = ({ children }) => {
    const [slides, setSlides] = useState<Slides>([])
    const { activeSlideIndex, handleSlideChange } = useSlideChange()

    return (
        <section>
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
        </section>
    )
}

export * from './components/CarouselSlides'
export * from './components/CarouselNav'
