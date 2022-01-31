import styled from 'styled-components';
import { motion } from 'framer-motion';
export const RegisterFormStyle = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-around;
    padding: 2rem;
    .header-register {
        flex: 0 0 10%;
        width: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
        h1 {
            color: ${(props) => props.theme.colors.title};
            font-weight: lighter;
            font-size: 1.5rem;
            letter-spacing: 0.1rem;
            line-height: 140%;
            text-align: center;
        }
    }
    .input-register {
        width: 70%;
        min-width: 250px;
        margin: 1rem;
        max-width: 450px;
    }
    input[type='submit'] {
        /* margin-top: 3rem; */
    }
    .form-register {
        flex: 0 0 60%;
        display: flex;
        justify-content: space-around;
    }
`;

export const SwitchToLogin = styled.div`
    margin-top: 2rem;
    background-image: linear-gradient(
        45deg,
        ${(props) => props.theme.colors.primary},
        ${(props) => props.theme.colors.secondary}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    font-size: 1rem;
    cursor: pointer;
`;
