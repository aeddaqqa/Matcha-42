import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NavStyle = styled(motion.nav)`
    flex: 0 0 20%;
    height: 100%;
    /* background-image: ${(props) => props.theme.background.secondary}; */
    position: relative;
    .background {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 300px;
        /* height: 100%; */
        background: #fff;
    }
    button {
        outline: none;
        border: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        cursor: pointer;
        position: absolute;
        top: 18px;
        left: 15px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
    }
    .items-nav {
        position: absolute;
        /* margin-top: 100px; */
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 80%;
        /* background: red; */
    }
`;
