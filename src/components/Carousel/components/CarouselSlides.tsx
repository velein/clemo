import React, { useEffect, useContext, Children } from 'react'
import { CarouselContext } from '..'

/**
 * Renders carousel's slides. The navigation / arrows will be rendered based
 * on `CarouselSlides` children items.
 *
 * The slides can be accessed as `slides` within `CarouselContext`
 *
 * @example
 * <CarouselSlides>
 *     <div>Slide 1</div>
 *     <div>Slide 2</div>
 *     <div>Slide 3</div>
 * </CarouselSlides>
 */
export const CarouselSlides: React.FC = ({ children }) => {
    const { activeSlideIndex, setSlides } = useContext(CarouselContext)

    useEffect(() => {
        setSlides(Children.toArray(children))
    }, [children, setSlides])

    return (
        <>
            {Children.map(children, (child, index) => {
                if (activeSlideIndex === index) {
                    return child
                }
            })}
        </>
    )
}
