import { RightSideStyle, EllipseLarge } from './RightSide.style';
import { ReactComponent as Background } from '../../assets/LoginSignUp/sideRight/backgroundCerc.svg';
import Slider from '../Slider';

const RightSide = () => {
    return (
        <RightSideStyle>
            <EllipseLarge />
            <Background />
            <Slider />
        </RightSideStyle>
    );
};

export default RightSide;
