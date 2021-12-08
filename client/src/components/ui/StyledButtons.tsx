import styled from 'styled-components';

const ButtonBase = styled.button`
    min-height: 2.8rem;
    padding: 0 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-weight: 600;
    font-size: 0.9rem;
    letter-spacing: 1px;
    border-radius: 5px;
    border: none;
    outline: none;
    transition: all 0.3s ease;
    cursor: pointer;
    outline-offset: 1px;
    text-decoration: none;

    resize: none;

    &:hover:not(:disabled) {
        border-radius: 20px;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const PrimaryButton = styled(ButtonBase)`
    background: #5596f6;
    color: #fff;

    &:focus {
        outline: 3px solid #5596f6;
    }

    &:disabled {
        color: #f5f5f5;
        background: #5b7baa;
    }
`;

export const SecondaryButton = styled(ButtonBase)`
    background: #fff;
    color: #5596f6;
    border: 3px solid #5596f6;

    &:focus {
        outline: 3px solid #5596f6;
    }

    &:disabled {
        color: #f5f5f5;
        background: #5596f638;
    }
`;

export const FileUploadButton = styled(ButtonBase)`
    background: #ffffff;
    color: #5596f6;
    letter-spacing: 0.5px;

    span {
        margin-left: 4px;
    }
    svg {
        fill: #5596f6;
        circle {
            stroke: #fff;
        }
    }

    &:focus {
        background: #5596f638;
    }

    &:hover {
        background: #5596f638;
    }
`;
