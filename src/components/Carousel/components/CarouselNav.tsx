/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { ComponentType, useContext } from 'react'
import { CarouselContext } from '~components/Carousel'

export type CarouselNav = {
    renderItem: ComponentType<CarouselNavItem>
}

type CarouselNavItem = { onClick: () => void }

/**
 * Renders carousel's navigation.
 * Use `renderItem` to render specific component as a navigation item.
 *
 * - `index, isActive & onClick` will be applied to `renderItem` component props
 * implicitly. You will most likely just pass these props down to your
 * component using rest operator `{...props}`.
 * @example
 * <CarouselNav renderItem={(props) => <Dot {...props} />} />
 * <CarouselNav renderItem={(props) => <Button {...props}>Go to {props.index + 1}</Button>} />
 */
export const CarouselNav: React.FC<CarouselNav> = ({
    renderItem: CarouselNavItem,
    ...props
}) => {
    const { slides, activeSlideIndex, handleSlideChange } = useContext(
        CarouselContext,
    )

    return (
        <nav {...props}>
            {slides.map((_, index) => (
                <CarouselNavItem
                    key={index}
                    aria-label={`go to slide ${index}`}
                    onClick={() => {
                        handleSlideChange('index', index)
                    }}
                    {...(activeSlideIndex === index && {
                        css: css`
                            background-color: #000;
                        `,
                    })}
                />
            ))}
        </nav>
    )
}
