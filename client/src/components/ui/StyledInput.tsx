import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
    0% {
        opacity: 0;
        transform: scale(.5);
    }
    50% {
        opacity: .25;
    }
    100% {
        opacity: 0;
        transform: scale(1.75);
    }
`;

export const StyledRadio = styled.div`
    display: flex;
    gap: 2rem;
    margin: 15px 0;

    label {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        input {
            position: absolute;
            transform: scale(0);
        }

        .radio-pulse {
            position: absolute;
            display: none;
            top: -5px;
            left: -5px;
            z-index: 0;
            opacity: 0;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #5596f6;
            animation: ${pulse} 0.5s linear;
        }

        .radio-button {
            position: relative;
            z-index: 1;
            display: grid;
            place-items: center;
            width: 20px;
            height: 20px;
            padding: 2px;
            box-sizing: border-box;
            border-radius: 50%;
            border: 2px solid #5596f6;

            .radio-button-inner {
                display: block;
                position: relative;
                z-index: 2;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                background: #5596f6;
                visibilty: hidden;
                opacity: 0;
                transform: scale(0);
                transition: all 0.35s;
            }
        }

        .radio-label {
            font-size: 0.8rem;
        }

        input:checked ~ .radio-button {
            .radio-button-inner {
                visibility: visible;
                opacity: 1;
                transform: scale(1);
            }
        }

        input:checked ~ .radio-pulse {
            display: block;
        }

        input:checked ~ .radio-button {
            border-color: #5596f6;
        }
    }
`;

interface IStyledInputProps {
    width?: string;
    margin?: string;
};

export const StyledInput = styled.input<IStyledInputProps>`
    min-height: 2.8rem;
    width: ${(props) => (props.width ? props.width : '100%')};
    margin: ${(props) => (props.margin ? props.margin : '0')};
    max-width: 100%;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1.5px solid #212121;
    outline: none;
    font-family: inherit;
    font-weight: 500;
    transition: outline 0.3s ease;
    resize: none;
    color: #212121;

    &:focus {
        border: 2px solid #5596f6;
    }
`;


export const FormGroup = styled.div`
    &:not(:last-of-type) {
        margin: 0 0 10px;
    }

    label {
        display: block;
        font-family: inherit;
        font-size: 0.8rem;
        font-weight: 500;
        color: #212121;
    }
`;


export const FormContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: .3rem;
`;