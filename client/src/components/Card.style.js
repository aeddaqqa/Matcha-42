import styled from "styled-components";

export const CardStyle = styled.div`
    /* background-color: tomato; */
    position: relative;
    width: 300px;
    height: 500px;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 12px;
    /* background-image: linear-gradient(
        to bottom,
        #f5f5f5 50%,
        rgba(0, 0, 0, 0.8) 100%
    ); */
    overflow: hidden;
    .slide {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
    .active {
        opacity: 1;
        transition-duration: 0.2s;
        /* transform: scale(1.08); */
        /* overflow: hidden; */
    }
    .card-image {
        width: 100%;
        height: 100%;
        background-size: cover;
    }
    .details {
        position: absolute;
        color: white;
        bottom: 0;
        width: 100%;
        left: 0;
        /* background: rgba(0, 0, 0, 0.2); */
        /* height: 15%; */
        height: 100px;
        background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0.3) 100%
        );
        &-item {
            width: 90%;
            height: 100%;
            display: flex;
            flex-flow: row nowrap;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            &-name {
                font-size: 1.2rem;
            }
        }
        &-icone {
            height: 100%;
            display: flex;
            align-items: center;
            font-size: 1.2rem;
            justify-content: center;
            cursor: pointer;
            svg {
                margin: 0 0.5rem;
            }
        }
    }
    .cercle {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        height: 30px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2%;
        &-item {
            width: 20%;
            height: 10px;
            opacity: 0.5;
            background-color: rgba(255, 255, 255, 1);
            border-radius: 16px;
        }
        .cercle-active {
            opacity: 1;
            transition-duration: 0.2s;
            transform: scale(1.08);
            overflow: hidden;
        }
    }
`;
