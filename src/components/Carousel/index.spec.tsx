import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Carousel } from '.'

const { queryByText } = screen

const MockedSlides = [
    <div>Slide 1</div>,
    <div>Slide 2</div>,
    <div>Slide 3</div>,
]

const expectSlide = (index: number) => {
    expect(queryByText(`Slide ${index}`)).toBeInTheDocument()
    expect(queryByText(`Slide ${index - 1}`)).not.toBeInTheDocument()
    expect(queryByText(`Slide ${index + 1}`)).not.toBeInTheDocument()
}

describe('Carousel arrow mode', () => {
    test('shows arrows while arrow mode is set', () => {
        const { debug, getByText } = render(
            <Carousel arrows slides={MockedSlides} />,
        )

        debug()

        expectSlide(1)
        expect(getByText(/next/i)).toBeInTheDocument()
        expect(getByText(/previous/i)).toBeInTheDocument()
    })

    test('shows next slide on "next arrow click"', () => {
        const { getByText } = render(<Carousel arrows slides={MockedSlides} />)
        const arrowNext = getByText(/next/i)
        expectSlide(1)
        fireEvent.click(arrowNext)
        expectSlide(2)
        fireEvent.click(arrowNext)
        expectSlide(3)
        fireEvent.click(arrowNext)
        expectSlide(1)
    })

    test('shows previous slide on "previous arrow click"', () => {
        const { getByText } = render(<Carousel arrows slides={MockedSlides} />)
        const arrowPrevious = getByText(/previous/i)
        expectSlide(1)
        fireEvent.click(arrowPrevious)
        expectSlide(3)
        fireEvent.click(arrowPrevious)
        expectSlide(2)
        fireEvent.click(arrowPrevious)
        expectSlide(1)
    })
})
