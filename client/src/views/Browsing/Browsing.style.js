import styled from "styled-components";
export const BrowsingContainer = styled.div`
    /* background-color: red;
    NEED MORE STYLES */
    width: 90%;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    /* border-radius: 20px; */
    gap: 5rem;
    /* padding: 10rem; */
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
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
    padding: 2rem 6rem;
    width: 80%;
    margin: auto;
    min-height: 10rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    max-width: 1000px;
    h1 {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.2rem;
        margin: 1rem 0;
    }
    .search {
        display: flex;
        gap: 5%;
        flex-wrap: wrap;
        height: 40px;
        &--input {
            min-width: 300px;
            flex: 1 1 60%;
        }
        &--button {
            height: 100%;
            flex: 1 1 20%;
            background-color: ${(props) => props.theme.colors.primary};
            color: white;
        }
    }
    .filter {
        &__item {
            display: flex;
            align-items: center;
            gap: 5%;
            h2 {
                font-size: 1.1rem;
            }
            display: flex;
            /* gap: 5%; */
            /* flex-wrap: wrap; */
            justify-content: space-between;
            &__content {
                margin: 1rem 0;
                flex: 0 0 45%;
                display: flex;
                flex-wrap: nowrap;
                align-items: center;
                /* gap: 5%; */
                .ant-slider {
                    flex: 0 0 75%;
                }
                .ant-input-number {
                    flex: 0 0 15%;
                }
            }
        }
    }
`;
export const StyledDataContainer = styled.div`
    width: 80%;
    margin: auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    justify-content: center;
    align-items: center;
    padding: 4rem 6rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 20px;
`;
