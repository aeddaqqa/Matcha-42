import { useState } from 'react';
import {
    ContainerStyle,
    LeftSideStyle,
    FromsStyle,
    CopyrightStyle,
} from './LoginRegister.style';
import Login from '../components/forms/LoginFrom';
import Register from '../components/forms/RegisterForm';
import RightSide from '../components/layout/RightSide';
import { ReactComponent as Logo } from '../assets/Logo.svg';

const Home = () => {
    const [log, setLog] = useState(true);
    return (
        <ContainerStyle>
            <LeftSideStyle>
                <Logo className="logo" />
                <FromsStyle>
                    {log ? (
                        <Login setLog={setLog} />
                    ) : (
                        <Register setLog={setLog} />
                    )}
                </FromsStyle>
                <CopyrightStyle>
                    © 2021 Matcha All Rights Reserved
                </CopyrightStyle>
            </LeftSideStyle>
            <RightSide />
        </ContainerStyle>
    );
};
export default Home;
