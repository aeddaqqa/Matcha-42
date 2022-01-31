import styled from 'styled-components';

export const ContainerStyle = styled.div`
    width: 90%;
    max-width: 1800px;
    /* height: 1000px; */
    height: 80%;
    min-height:800px
    max-height: 1000px;
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: space-between;
    /* justify-content: space-around; */
    border-radius: 20px;
    /* overflow: hidden; */
`;

export const LeftSideStyle = styled.div`
    flex: 1 1 50%;
    max-height: 1200px;
    min-height: 1000px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    .logo {
        flex: 1 1 10%;
    }
`;

export const FromsStyle = styled.div`
    width: 100%;
    flex: 1 1 80%;
`;

export const CopyrightStyle = styled.div`
    color: ${(props) => props.theme.colors.placeholder};
    font-size: 1.2rem;
    letter-spacing: 0.5px;
    flex: 1 1 10%;
    width: 100%;
    display: flex;
    justify-content: center;
    @media (max-width: 1000px) {
        /* max-width: 450px; */
        width: 80% !important;
        /* margin: auto; */
        font-size: 1rem;
        p {
        }
    }
`;
