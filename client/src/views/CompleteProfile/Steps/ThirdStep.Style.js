import styled from "styled-components";

export const ThirdStepStyle = styled.div`
    width: 100%;
    min-height: 100%;
    /* background-color: blue; */
    padding: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .map-container {
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border: 2px solid ${(props) => props.theme.colors.primary};
        border-radius: 20px;
        min-width: 300px;
        width: 100%;
        height: 500px;
        a {
            display: none;
        }
    }
`;
