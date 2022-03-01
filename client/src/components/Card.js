import { CardStyle } from './Card.style';
import { useSwipeable } from 'react-swipeable';
import { useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const data = [
    {
        image: 'https://images.unsplash.com/photo-1641193030363-ff5499786fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
        image: 'https://images.unsplash.com/photo-1641197383369-ea67d8171bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60',
    },
    {
        image: 'https://images.unsplash.com/photo-1641078864179-ba5d900e43f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
    {
        image: 'https://images.unsplash.com/photo-1641057312560-51fd10113cdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
];

const Card = () => {
    const [current, setCurrent] = useState(0);
    const length = data.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => prevSlide(),
        onSwipedRight: () => nextSlide(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
    return (
        <CardStyle {...handlers}>
            <div className="images">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                current === index ? 'slide active' : 'slide'
                            }
                        >
                            <div className="cercle">
                                {[1, 2, 3, 4].map((item, index) => {
                                    if (current === index) {
                                        return (
                                            <div className="cercle-item cercle-active" />
                                        );
                                    }
                                    return <div className="cercle-item" />;
                                })}
                            </div>
                            {current === index && (
                                <div
                                    className="card-image"
                                    style={{
                                        backgroundImage: `url(${item.image})`,
                                    }}
                                ></div>
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="details">
                <div className="details-item">
                    <div className="details-item-name">
                        lbigoliya farfana <span className="age">36</span>
                    </div>
                    <div className="details-icone">
                        more info <BsFillArrowUpCircleFill />
                    </div>
                </div>
            </div>
        </CardStyle>
    );
};

export default Card;
