import React from 'react'

import { ContainerStyled } from './index.styled'

interface ContainerProps {
    size?: '1024px' | '952px' | '756px'
}
export type ContainerStyleProps = Pick<ContainerProps, 'size'>

export const Container: React.FC<ContainerProps> = ({
    children,
    size = '1024px',
}) => <ContainerStyled size={size}>{children}</ContainerStyled>
