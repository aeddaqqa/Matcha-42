import { dataSlider } from '../utils/constants/dataSlider';
import { useState, useEffect } from 'react';
import { Content } from './layout/RightSide.style';
import { ReactComponent as LeftQuote } from '../assets/LoginSignUp/sideRight/leftQuotes.svg';
import { ReactComponent as RightQuote } from '../assets/LoginSignUp/sideRight/rightQuotes.svg';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSlideIndex((slideIndex + 1) % dataSlider.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [slideIndex]);

    return (
        <div className="SliderContainer">
            {dataSlider.map((item, index) => {
                return (
                    <Content
                        key={index}
                        className={
                            slideIndex === index ? 'slide active-anim' : 'slide'
                        }
                    >
                        <div className="head">
                            <div className="icone-quote">
                                <LeftQuote />
                            </div>
                            <div className="text">
                                <p>{item.quote}</p>
                                <strong>{item.author}</strong>
                            </div>
                            <div className="icone-quote">
                                <RightQuote />
                            </div>
                        </div>
                        <div className="image">{item.image}</div>
                    </Content>
                );
            })}
        </div>
    );
};

export default Slider;
