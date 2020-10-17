import styled from '@emotion/styled'
import { Button, buttonTransition } from '~components/Button'

export const ButtonLight = styled(Button)`
    background-color: #ffffff;
    border-radius: 25px;
    font-size: 18px;
    padding: 16px 32px;

    ${buttonTransition}

    &:hover {
        background-color: #ffcb93;
    }
`
