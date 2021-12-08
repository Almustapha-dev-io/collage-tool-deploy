import styled from 'styled-components';

export const PageContainer = styled.div`
    margin: 0;
    padding: 2rem;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #f3f6fa;

    .content {
        width: 100%;
        height: 100%;
        margin: auto;
    }

    @media (min-width: 600px) {
        .content {
            margin-top: 5%;
            width: 500px;
            height: auto;
        }
    }
`;

export const ViewCollageContainer = styled(PageContainer)`
    padding: 1.5rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-top: 5rem;

    @media (min-width: 600px) {
        padding-top: 0;
        align-items: center;
    }
`;

export const CenteredWrapper = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ImagePreviewContainer = styled.div`
    width: 100%;
    display: grid;
    grid-column-gap: 1rem;
    grid-row-gap: .8rem;

    @media (min-width: 767.99px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const ImagePreviewItem = styled.div`
    margin: 0;
    padding: 0 ;
    box-sizing: border-box;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        margin: 0 10px 0 0;
        border-radius: 5px;
    }

    .img-name {
        margin: 0 5px 0 0;
        font-size: .8rem;
    }

    svg {
        margin-left: auto;
        fill: #a1a1a1;
        cursor: pointer;
    }

    svg:hover {
        fill: red;
    }
`;
