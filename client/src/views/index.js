import Router from '../components/routing/index';
import styled from 'styled-components';

const MainContentStyle = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MainContent = () => {
    return (
        <MainContentStyle>
            <Router />
        </MainContentStyle>
    );
};

export default MainContent;
