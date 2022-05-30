import styled from "styled-components";
import { motion } from "framer-motion";

const StyledCardContainer = styled.div`
    width: 300px;
    height: 500px;
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 20px;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.primary};
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 0.8)
        ),
        url("https://images.unsplash.com/photo-1653202557632-b78292edfdc6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
`;

const StyledCerclesContainer = styled.div`
    width: 100%;
    height: 40%;
    padding: 1rem;
    display: flex;
    gap: 0.5rem;
`;

const StyledCercle = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    background-color: white;
    background-color: ${({ selected }) => (selected ? "#f1f1f1" : "#f5f5f5")};
    border: 1px solid black;
`;

const StyledContentContainer = styled(motion.div)`
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1) 10%
    );
    min-height: 60%;
    height: auto;
    width: 100%;
    padding: 0rem 1rem;
    display: flex;
    flex-direction: column;
    .user {
        padding: 1.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
        color: ${({ theme }) => theme.background.primary};
        &__name {
            font-size: 1.2rem;
            span {
                margin-left: 1rem;
                font-size: 0.8rem;
                color: ${({ theme }) => theme.colors.secondaryWhite};
            }
        }
        .icone {
            cursor: pointer;
            font-size: 1.2rem;
        }
    }
    .tags {
        margin-bottom: 0.5rem;
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
    .location {
        color: ${({ theme }) => theme.colors.secondary}};
        font-size: 1rem;
        margin-bottom: 0.5rem;
    }
    .biography {
        color: ${({ theme }) => theme.colors.secondaryWhite};
        font-size: 0.8rem;
        margin-bottom: 0.5rem;
    }
    .link {
        color: ${({ theme }) => theme.colors.secondaryWhite};
        font-size: 0.9rem;
        width: fit-content;
        cursor: pointer;
        p {
            color: ${({ theme }) => theme.colors.secondary};
            padding: 0.1rem;
            border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
        }
    }
`;

const StyledTag = styled.div`
    width: auto;
    padding: 0.4rem 0.6rem;
    font-size: 0.6rem;
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.secondaryWhite};
    border: 1px solid ${({ theme }) => theme.colors.secondaryWhite};
    font-size: 0.8rem;
    /* background-color: ${({ theme }) => theme.backgroundTertiary}; */
`;

export {
    StyledCardContainer,
    StyledCerclesContainer,
    StyledContentContainer,
    StyledCercle,
    StyledTag,
};
