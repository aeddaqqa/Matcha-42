import styled from "styled-components";
export const BrowsingContainer = styled.div`
    /* background-color: red;
    NEED MORE STYLES */
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    align-items: center;
    justify-content: center;
`;

export const LeftSideStyle = styled.div`
    background-color: blue;
    min-width: 500px;
    flex: 0 0 20%;
`;

export const ContentBrowsingStyle = styled.div`
    /* flex: 0 0 80%; */
    width: 60%;
    height: 100%;
    min-width: 300px;
    display: flex;
    /* flex-flow: column nowrap; */
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    gap: 50px;
    .swiper {
        width: 500px;
        /* min-width: 500px; */
        /* width: 50%; */
        height: 800px;
    }
    .swiper-slide {
        /* box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px; */
        background-size: cover;
        background-position: center;
        border-radius: 20px;
    }
    .rotate {
        transform: rotateY(0.5turn);
    }
    .icon-container {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 600px;
        flex: 0 0 100px;
        .icon-item {
            width: 40px;
            height: 40px;
            margin: 0 1rem;
            cursor: pointer;
            svg {
                width: 100%;
                height: 100%;
            }
            &:nth-child(1) {
                svg {
                    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));
                    fill: ${(props) => props.theme.colors.primary};
                }
            }
            &:nth-child(3) {
                svg {
                    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));
                    fill: ${(props) => props.theme.colors.tertiary};
                }
            }
            &:nth-child(2) {
                svg {
                    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4));
                    fill: ${(props) => props.theme.colors.secondary};
                }
            }
        }
    }
`;
export const CardContentStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 1s ease-in-out;
    transform-style: preserve-3d;
    /* text-align: center; */
    .card__front,
    .card__back {
        border-radius: 20px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backface-visibility: hidden;
        transform-style: preserve-3d;
    }
    .card__front {
        background-color: #b7c9e5;
        background-size: cover;
        background-position: center;
        color: #333;
    }

    .card__back {
        transform: rotateY(0.5turn);
        color: #b7c9e5;
        background: ${(props) => props.theme.colors.tertiary};
    }
`;

export const StyledSearchContainer = styled.div`
    width: 80%;
    margin: auto;
    min-height: 10rem;
    /* background-color: blue; */
`;
export const StyledDataContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    /* min-height: 10rem; */
    background-color: red;
`;
