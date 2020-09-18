import React, {
    Children,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
} from 'react'
import { CarouselContext } from '~components/Carousel'

type CaruselSlidesProps = {
    children: ReactNode | ReactNode[]
}

export const CarouselSlides: React.FC<CaruselSlidesProps> = ({ children }) => {
    const { activeSlideIndex, setSlidesMaxIndex } = useContext(CarouselContext)

    useEffect(() => {
        setSlidesMaxIndex(Children.count(children))
    }, [setSlidesMaxIndex, children])

    const renderActiveSlide = useCallback(() => {
        return Children.map(children, (child, index) => {
            if (activeSlideIndex === index) {
                return child
            }
        })
    }, [activeSlideIndex, children])

    return <>{renderActiveSlide()}</>
}
