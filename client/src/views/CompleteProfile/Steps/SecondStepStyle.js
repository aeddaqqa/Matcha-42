import styled from "styled-components";

export const StyledSecondStep = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    .profile-picture {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        .cercle {
            width: 200px;
            height: 200px;
            border-radius: 50%;

            background-color: #30336b;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            margin: 2rem 0 1rem 0;
        }
        .indice {
            position: absolute;
            left: 70%;
            top: 44%;
            width: 100%;
            transform: translate(-50%, -50%);
            font-size: 1.5rem;
            color: #dff9fb;
        }
        .profile-pic {
            color: ${(props) => props.theme.colors.tertiary};
            font-size: 1.5rem;
        }
    }
    .galerie {
        border-radius: 10px;
        padding: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        .gallery {
            width: 300px;
            height: 500px;
            margin: 1rem;
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
        }
        &--image__footer {
            flex: 0 0 10%;
            display: flex;
            justify-content: space-around;
            align-items: space-around;
            p {
                margin: 0 1rem;
                font-size: 1rem;
                cursor: pointer;
            }
        }
        &--image {
            border-radius: 10px;
            flex: 0 0 90%;
            width: 300px;
            /* height: 00px; */
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
        .add-card {
            width: 300px;
            height: 455px;
            align-self: start;
            /* height: 500px; */
            cursor: pointer;
            margin: 1rem;
            box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
            border-radius: 10px;
            position: relative;
            .galerie--image--add {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                position: absolute;
                width: 100px;
                height: 100px;
                fill: white;
            }
            z-index: 1;
            input[type="file"] {
                cursor: pointer;
                width: 100%;
                height: 100%;
                opacity: 0;
            }
        }
    }
`;
