import styled from 'styled-components';
import { colors } from '../theme/colors';

type ButtonProps = {
    variant?: "primary" | "secondary"
}

export const Button = styled.button<ButtonProps>`
    background-color: ${props => !props.variant || props.variant === "primary" ? "red" : "yellow"};
    padding: 10px 24px;
    border-radius: 100px;
    border: 0;
`