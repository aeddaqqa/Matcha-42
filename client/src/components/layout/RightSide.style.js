import styled from 'styled-components';
export const RightSideStyle = styled.div`
    flex: 1 1 50%;
    height: 100%;
    max-height: 1200px;
    min-height: 1000px;
    position: relative;
    border-radius: 20px;
    background: ${(props) => props.theme.background.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    .SliderContainer {
        flex: 0 0 80%;
        height: 80%;
        position: relative;
        .active-anim {
            opacity: 1;
        }
    }
    &::before {
        content: '';
        position: absolute;
        box-shadow: inset 2000px 2000px 2000px rgba(255, 255, 255, 0.2);
        filter: blur(10px);
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 20px;
        z-index: 50;
    }
    &::after {
        content: '';
        opacity: 0.6;
        position: absolute;
        width: 80%;
        height: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        outline: 2px white solid;
        border-radius: 20px;
        z-index: 50;
    }
    svg {
        position: absolute;
        top: 30%;
        left: -50%;
        z-index: 10;
        opacity: 0.8;
    }
    overflow: hidden;
    @media (max-width: 1100px) {
        display: none !important;
    }
`;

export const EllipseLarge = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    z-index: 0;
    position: absolute;
    top: 5%;
    right: 5%;
    background: rgba(255, 255, 255, 0.2);
`;

export const Content = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    display: flex;
    flex-flow: column nowrap;
    padding: 2rem;
    .head {
        z-index: 100;
        width: 100%;
        flex: 0 0 50%;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
        .text {
            height: 70%;
            padding: 1rem;
            display: flex;
            flex-flow: column nowrap;
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.2rem;
            p {
                flex: 0 0 80%;
                text-align: center;
                display: flex;
                align-items: center;
            }
            strong {
                font-size: 1.2rem;
                display: flex;
                justify-content: flex-end;
                color: rgba(255, 255, 255, 0.9);
                font-weight: bold;
            }
        }
        .icone-quote {
            width: 100%;
            height: 10%;
            position: relative;
            svg {
                position: absolute;
                top: 0;
                left: 0;
                width: 40px;
                height: 40px;
                & > * {
                    fill: rgba(255, 255, 255, 0.8);
                }
            }
            &:nth-child(3) {
                svg {
                    left: 90%;
                }
            }
        }
    }
    .image {
        width: 100%;
        flex: 0 0 50%;
        display: flex;
        flex-flow: column nowrap;
        position: relative;
        z-index: 100;
        svg {
            opacity: 1;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    }
`;
