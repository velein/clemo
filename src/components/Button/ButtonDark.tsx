import styled from '@emotion/styled'
import { Button, buttonTransition } from '~components/Button'

export const ButtonDark = styled(Button)`
    border-radius: 25px;
    font-size: 18px;
    padding: 16px 32px;

    background-color: #000000;
    color: #ffffff;

    ${buttonTransition}

    &:hover {
        background-color: #ffcb93;
        color: #000000;
    }
`
