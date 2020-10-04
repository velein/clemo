import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react'

import { Carousel, CarouselSlides } from '.'
import { CarouselNav } from './components/CarouselNav'
import { Dot } from './styled'

describe('Carousel ', () => {
    it('renders carousel initially with first slide visible', () => {
        const { queryByText } = render(
            <Carousel>
                <CarouselSlides>
                    <div>Content 1</div>
                    <div>Content 2</div>
                    <div>Content 3</div>
                </CarouselSlides>
            </Carousel>,
        )

        expect(queryByText(/Content 1/i)).toBeInTheDocument()
        expect(queryByText(/Content 2/i)).not.toBeInTheDocument()
        expect(queryByText(/Content 3/i)).not.toBeInTheDocument()
    })

    it('renders carousel navigation', () => {
        const { queryByText, getByLabelText } = render(
            <Carousel>
                <CarouselSlides>
                    <div>Content 1</div>
                    <div>Content 2</div>
                </CarouselSlides>
                <CarouselNav renderItem={(props) => <Dot {...props} />} />
            </Carousel>,
        )

        expect(queryByText(/Content 1/i)).toBeInTheDocument()
        expect(queryByText(/Content 2/i)).not.toBeInTheDocument()
        expect(getByLabelText(/go to slide 0/i)).toBeInTheDocument()
        expect(getByLabelText(/go to slide 1/i)).toBeInTheDocument()
    })

    it('changes carousel slide on navigation item click', () => {
        const { queryByText, getByLabelText } = render(
            <Carousel>
                <CarouselSlides>
                    <div>Content 1</div>
                    <div>Content 2</div>
                </CarouselSlides>
                <CarouselNav renderItem={(props) => <Dot {...props} />} />
            </Carousel>,
        )

        expect(queryByText(/Content 1/i)).toBeInTheDocument()
        expect(queryByText(/Content 2/i)).not.toBeInTheDocument()

        fireEvent.click(getByLabelText(/go to slide 1/i))

        expect(queryByText(/Content 1/i)).not.toBeInTheDocument()
        expect(queryByText(/Content 2/i)).toBeInTheDocument()

        fireEvent.click(getByLabelText(/go to slide 0/i))

        expect(queryByText(/Content 1/i)).toBeInTheDocument()
        expect(queryByText(/Content 2/i)).not.toBeInTheDocument()
    })
})
