import styled from "styled-components";
import { motion } from "framer-motion";
import { FormStyle } from "./input.style";
export const LoginFormStyle = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    h1 {
        width: 100%;
        flex: 1 1 10%;
        color: ${(props) => props.theme.colors.title};
        font-weight: lighter;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        line-height: 140%;
        display: flex;
        flex-flow: column wrap;
        text-align: center;
    }
`;

export const HelpersStyle = styled.div`
    width: 70%;
    max-width: 450px;
    flex: 1 1 10%;
    display: flex;
    flex-flow: column nowrap;
    align-items: start;
    p {
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        color: ${(props) => props.theme.colors.text};
        margin: 0.8rem 0;
        font-weight: 400;
        span {
            margin-left: 0.5rem;
            color: ${(props) => props.theme.colors.primary};
            cursor: pointer;
        }
    }
    @media (max-width: 1100px) {
        max-width: 450px;
        width: 80% !important;
        p {
            font-size: 1rem;
        }
    }
`;

export const FooterStyle = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 30%;
    .social {
        width: 70%;
        max-width: 450px;
        min-width: 250px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        color: ${(props) => props.theme.colors.placeholder};
        p {
            text-align: center;
            width: 50%;
            z-index: 10;
            background: white;
        }
        position: relative;
        .line {
            z-index: 0;
            position: absolute;
            top: 50%;
            width: 100%;
            border-bottom: solid 1px
                ${(props) => props.theme.colors.placeholder};
        }
    }
    .google {
        width: 70%;
        min-width: 250px;
        max-width: 450px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid ${(props) => props.theme.colors.placeholder};
        border-radius: 10px;
        p {
            /* height: 100%; */
            padding: 0 1rem;
        }
        svg {
            width: 30px;
            height: 30px;
        }
    }
`;

export const LoginStyle = styled(FormStyle)`
    flex: 0 0 30%;
    padding: 1rem 0;
    .input-login {
        width: 70%;
        min-width: 250px;
        max-width: 450px;
        margin: 1rem 0;
    }
    @media (max-width: 1100px) {
        .input-login {
            max-width: 450px;
            width: 100% !important;
        }
    }
`;
