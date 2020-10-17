import React from 'react'

import { ContainerStyled } from './styled'

interface ContainerProps {
    size?: '1188px' | '952px' | '756px'
}
export type ContainerStyleProps = Pick<ContainerProps, 'size'>

export const Container: React.FC<ContainerProps> = ({
    children,
    size = '1188px',
}) => <ContainerStyled size={size}>{children}</ContainerStyled>
