import { ContentBrowsingStyle, CardContentStyle } from "./Browsing.style";
import Card from "../../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillHeart, AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosHeartDislike } from "react-icons/io";
import "swiper/css";
import "swiper/css/effect-cards";

// import './styles.css';

// import Swiper core and required modules
import SwiperCore, { EffectCards } from "swiper";
import { useState } from "react";

SwiperCore.use([EffectCards]);

const data = [
    {
        image: "https://images.unsplash.com/photo-1641193030363-ff5499786fea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
    },
    {
        image: "https://images.unsplash.com/photo-1641197383369-ea67d8171bb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
    },
    {
        image: "https://images.unsplash.com/photo-1641078864179-ba5d900e43f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
    {
        image: "https://images.unsplash.com/photo-1641057312560-51fd10113cdd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    },
];

const Content = () => {
    const [showInfo, setShowinfo] = useState([false, false, false, false]);
    const [snapIndex, setSnapIndex] = useState(0);
    return (
        <ContentBrowsingStyle>
            <Card />
            <Card />
            <Card />
            <Card />
            {/* <Swiper
                effect={"cards"}
                grabCursor={true}
                onSlideChange={(swiper) => {
                    setShowinfo([false, false, false, false]);
                    setSnapIndex(swiper.snapIndex);
                }}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <CardContentStyle
                                className={showInfo[index] ? "rotate" : ""}
                            >
                                <div
                                    className="card__front"
                                    style={{
                                        backgroundImage: `linear-gradient(
                                            to bottom,
                                            rgba(0, 0, 0, 0) 0%,
                                            rgba(0, 0, 0, 0.2) 100%
                                        ),url(${item.image})`,
                                    }}
                                ></div>
                                <div className="card__back"></div>
                            </CardContentStyle>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <div className="icon-container">
                <div className="icon-item like">
                    <AiFillHeart />
                </div>
                <div
                    className="icon-item about"
                    onClick={() => {
                        showInfo[snapIndex] = !showInfo[snapIndex];
                        setShowinfo([...showInfo]);
                    }}
                >
                    <AiOutlineInfoCircle />
                </div>
                <div className="icon-item dislike">
                    <IoIosHeartDislike />
                </div>
            </div> */}
        </ContentBrowsingStyle>
    );
};

export default Content;
