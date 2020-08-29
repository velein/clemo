import React, {
    Dispatch,
    ReactNodeArray,
    SetStateAction,
    useState,
} from 'react'
import { Arrows } from './components/Arrows'
import { Dots } from './components/Dots'
import { Slides } from './components/Slides'
import { SliderWrapper } from './styled'

type CarouselProps = {
    arrows?: boolean
    dots?: boolean
    slides: ReactNodeArray
}

type HandleChange = (
    type: 'next' | 'previous' | 'index',
    index?: number,
) => void

type CarouselContextType = {
    currentSlide: number
    setCurrentSlide: Dispatch<SetStateAction<number>>
    slidesMaxIndex: number
    setSlidesMaxIndex: Dispatch<SetStateAction<number>>
    handleChange: HandleChange
    slides: ReactNodeArray
}

export const CarouselContext = React.createContext({} as CarouselContextType)

export const Carousel: React.FC<CarouselProps> = ({ arrows, dots, slides }) => {
    const [currentSlide, setCurrentSlide] = useState<number>(0)
    const [slidesMaxIndex, setSlidesMaxIndex] = useState<number>(0)

    const handleChange: HandleChange = (type, index) => {
        switch (type) {
            case 'next':
                if (currentSlide === slidesMaxIndex) {
                    setCurrentSlide(0)
                } else {
                    setCurrentSlide(currentSlide + 1)
                }
                break
            case 'previous':
                if (currentSlide === 0) {
                    setCurrentSlide(slidesMaxIndex)
                } else {
                    setCurrentSlide(currentSlide - 1)
                }
                break
            case 'index':
                if (index) {
                    setCurrentSlide(index)
                }
                break
        }
    }

    const value: CarouselContextType = {
        currentSlide,
        setCurrentSlide,
        slidesMaxIndex: slidesMaxIndex,
        setSlidesMaxIndex: setSlidesMaxIndex,
        handleChange,
        slides,
    }

    return (
        <CarouselContext.Provider value={value}>
            <SliderWrapper>
                <Slides />
                {dots && <Dots />}
            </SliderWrapper>
            {arrows && <Arrows />}
        </CarouselContext.Provider>
    )
}
