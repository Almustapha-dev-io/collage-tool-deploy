import styled from 'styled-components';
import { boxShadow } from 'util/styles';

const Card = styled.div`
    padding: 0;
    margin: 0;
    box-shadow: ${boxShadow};
    border-radius: 6px;

    background: #fff;
`;

export const CollageFormCard = styled(Card)`
    padding: 1.5rem;
    box-sizing: border-box;

    h2 {
        margin-top: 0;
    }

    form {
        width: 100%;
        height: 100%;
    }

    .upload-header {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #5596f6;
        svg {
            fill: #5596f6;
            margin: 0 15px 0 0;
        }

        p {
            margin: 0;
        }
    }
`;

export const CollageViewCard = styled(Card)`
    width: 400px;
    max-width: 100%;
    margin: 0;
    padding: 3rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
        margin-top: 0;
    }

    img {
        margin: auto;
        max-height: 200px;
    }
`;
