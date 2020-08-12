import styled from '@emotion/styled'
import { ContainerStyleProps } from '.'

export const ContainerStyled = styled.div<ContainerStyleProps>`
    margin: 0 auto;
    padding: 0 20px;
    max-width: ${(props) => props.size};
`
