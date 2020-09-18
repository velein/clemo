import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Carousel, CarouselSlide } from '.'
import { CarouselDots } from './components/CarouselDots'
import { CarouselSlides } from './components/CarouselSlides'

const mockedCarousel = (
    <Carousel>
        <CarouselSlides>
            <CarouselSlide>Slide 1</CarouselSlide>
            <CarouselSlide>Slide 2</CarouselSlide>
            <CarouselSlide>Slide 3</CarouselSlide>
        </CarouselSlides>
        <CarouselDots />
    </Carousel>
)
const { queryByText, getByLabelText } = screen

const expectSlide = (index: number) => {
    expect(queryByText(`Slide ${index}`)).toBeInTheDocument()
    expect(queryByText(`Slide ${index - 1}`)).not.toBeInTheDocument()
    expect(queryByText(`Slide ${index + 1}`)).not.toBeInTheDocument()
}

describe('Carousel ', () => {
    it('renders mocked carousel with first slide', () => {
        render(mockedCarousel)
        expectSlide(1)
    })

    it('changes slide on navigation dot click', () => {
        render(mockedCarousel)

        const navOne = getByLabelText(/go to slide 0/i)
        const navTwo = getByLabelText(/go to slide 1/i)
        const navThree = getByLabelText(/go to slide 2/i)

        expect(navOne).toBeInTheDocument()
        expect(navTwo).toBeInTheDocument()
        expect(navThree).toBeInTheDocument()

        expectSlide(1)
        fireEvent.click(navTwo)
        expectSlide(2)
        fireEvent.click(navThree)
        expectSlide(3)
        fireEvent.click(navOne)
        expectSlide(1)
    })
})
