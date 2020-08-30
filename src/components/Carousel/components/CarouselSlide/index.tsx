import React from 'react'

export const CarouselSlide: React.FC = ({ children, ...props }) => {
    return <div {...props}>{children}</div>
}
