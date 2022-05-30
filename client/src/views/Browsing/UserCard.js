import React from "react";
import {
    StyledCardContainer,
    StyledCerclesContainer,
    StyledCercle,
    StyledContentContainer,
    StyledTag,
} from "./UserCard.style";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { useCycle } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { useState } from "react";

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

const UserCard = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    let tags = ["bigola", "pikala", "wssada", "jemama"];

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
    const variants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 },
            },
        },
        closed: {
            y: 230,
            transition: {
                y: { stiffness: 1000 },
            },
        },
    };
    return (
        <StyledCardContainer {...handlers}>
            <div className="images">
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                current === index ? "slide active" : "slide"
                            }
                        >
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
            <StyledCerclesContainer>
                <StyledCercle selected={true} />
                <StyledCercle />
                <StyledCercle />
                <StyledCercle />
            </StyledCerclesContainer>
            <StyledContentContainer
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <div className="user">
                    <div className="user__name">
                        dolor sit
                        <span>18</span>
                    </div>

                    <AiOutlineInfoCircle
                        className="icone"
                        onClick={toggleOpen}
                    />
                </div>
                <div className="tags">
                    {tags.map((item, key) => (
                        <StyledTag key={key}>{item}</StyledTag>
                    ))}
                </div>
                <div className="location">
                    <GoLocation /> location
                </div>
                <div className="biography">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat, expedita tempora? Pariatur qui saepe dignissimos
                    quam inventore explicabo.
                </div>
                <div className="link">
                    <p>view profile</p>
                </div>
            </StyledContentContainer>
        </StyledCardContainer>
    );
};
export default UserCard;
