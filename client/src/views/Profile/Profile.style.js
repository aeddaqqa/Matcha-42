import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
export const StyledHistory = styled.div`
    width: 100%;
    min-height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledProfile = styled.div`
    width: 90%;
    max-width: 1600px;
    margin: 5rem auto;
    height: auto;
    min-width: 350px;
    border-radius: 20px;
    box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 24px;
    padding: 4rem 4rem 5rem 4rem;
    z-index: 50;
    @media (max-width: 750px) {
        width: 100% !important;
        padding: 1rem !important;
    }
`;

export const StyledBioAndTags = styled.div`
    width: 100%;
    margin: 3rem 0;
    height: auto;
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    .container {
        flex: 1 1 40%;
        min-width: 300px;
        background-color: #f9f9f9;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
            rgba(0, 0, 0, 0.1) 0px 10px 10px;
        border-radius: 20px;
        transition: all 0.2s ease-in-out;
        &-header {
            font-size: 1rem;
            text-align: center;
            padding: 0.5rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #f8eded;
        }
        &-content {
            /* width: 100%; */
            flex: 1 1 50%;
            min-width: 300px;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            padding: 1rem;
            overflow: hidden;
            .tag {
                padding: 0.5rem 1.5rem;
                font-size: 1rem;
                background-color: ${(props) => props.theme.colors.primary};
                color: white;
                border-radius: 20px;
                margin: 0.2rem 1rem;
                &::before {
                    content: "#";
                }
                transition: all 0.2s ease-in-out;
                &:hover {
                    background-color: ${(props) =>
                        props.theme.colors.secondary};
                    transform: scale(1.1);
                }
            }
        }
    }
`;

export const StyledFooter = styled.footer`
    width: 100%;
    min-width: 320px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 14px 28px,
        rgba(0, 0, 0, 0.1) 0px 10px 10px;
    .head {
        min-height: 5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        align-items: end;
        background-color: white;
        .label {
            flex: 1 1 auto;
            position: relative;
            font-size: 1.2rem;
            cursor: pointer;
            padding: 1rem 2rem;
            color: white;
            text-align: center;
            z-index: 10;
            color: ${(props) => props.theme.colors.placeholder};
        }
        .selected {
            color: ${(props) => props.theme.colors.primary};
            border-bottom: 1px solid ${(props) => props.theme.colors.primary};
        }
        .underline {
            position: absolute;
            bottom: -1px;
            left: 0;
            right: 0;
            height: 1px;
        }
    }
    .body {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export const StyledGelleryProfile = styled.div`
    width: 100%;
    /* min-height: 40rem; */
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 10px;
    /* align-items: center; */
    .card {
        /* border: 2px solid black; */
        z-index: 100;
        flex: 0 0 30%;
        border-radius: 20px;
        min-width: 300px;
        height: 30rem;
        background-position: center;
        background-size: cover;
    }
`;
export const StyledBody = styled(motion.div)`
    padding: 2rem;
    width: 100%;
    min-height: 60rem;
`;

export const StyledMap = styled.div`
    width: 100%;
    min-height: 60rem;
    display: flex;
    justify-content: center;
    align-items: center;
    .map-container {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 20px;
        min-width: 300px;
        flex: 1 1 auto;
        height: 41rem;
        a {
            display: none;
        }
    }
`;
