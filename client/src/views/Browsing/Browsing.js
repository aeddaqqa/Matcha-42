import {
    BrowsingContainer,
    StyledSearchContainer,
    StyledDataContainer,
} from "./Browsing.style";
import LeftSide from "./LeftSide";
// import Content from "./Content";
import UserCard from "./UserCard";
import { Button } from "antd";
import { Input } from "antd";
import { Slider, InputNumber, Row, Col } from "antd";
import { useState } from "react";

const Browsing = () => {
    const [inputValue, setInputValue] = useState(1);

    const onChange = (newValue) => {
        setInputValue(newValue);
    };
    return (
        <BrowsingContainer>
            {/* <LeftSide /> */}
            <StyledSearchContainer>
                <h1>Search</h1>
                <div className="search">
                    <Input
                        className="search--input"
                        placeholder="Basic usage"
                    />
                    <Button className="search--button">Search</Button>
                </div>
                <h1>Filter</h1>
                <div className="filter">
                    <div className="filter__item">
                        <h2 className="filter__item__name">Distance</h2>
                        <div className="filter__item__content">
                            <Slider
                                min={1}
                                max={20}
                                onChange={onChange}
                                value={
                                    typeof inputValue === "number"
                                        ? inputValue
                                        : 0
                                }
                            />
                            <InputNumber
                                min={1}
                                max={20}
                                style={{
                                    margin: "0 16px",
                                }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="filter__item">
                        <h2 className="filter__item__name">Fame Rating</h2>
                        <div className="filter__item__content">
                            <Slider
                                min={1}
                                max={20}
                                onChange={onChange}
                                value={
                                    typeof inputValue === "number"
                                        ? inputValue
                                        : 0
                                }
                            />
                            <InputNumber
                                min={1}
                                max={20}
                                style={{
                                    margin: "0 16px",
                                }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="filter__item">
                        <h2 className="filter__item__name">Age</h2>
                        <div className="filter__item__content">
                            <Slider
                                min={1}
                                max={20}
                                onChange={onChange}
                                value={
                                    typeof inputValue === "number"
                                        ? inputValue
                                        : 0
                                }
                            />
                            <InputNumber
                                min={1}
                                max={20}
                                style={{
                                    margin: "0 16px",
                                }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="filter__item">
                        <h2 className="filter__item__name">
                            Multiple Interests Tags
                        </h2>
                        <div className="filter__item__content">
                            <Slider
                                min={1}
                                max={20}
                                onChange={onChange}
                                value={
                                    typeof inputValue === "number"
                                        ? inputValue
                                        : 0
                                }
                            />
                            <InputNumber
                                min={1}
                                max={20}
                                style={{
                                    margin: "0 16px",
                                }}
                                value={inputValue}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    {/* <IntegerStep /> */}
                    {/* _rating_  _l'age_ _localisation_ _number of tags_ _select Tags_*/}
                </div>
            </StyledSearchContainer>
            <StyledDataContainer>
                <UserCard />
                <UserCard />
                <UserCard />
                <UserCard />
            </StyledDataContainer>
            {/* <Content /> */}
        </BrowsingContainer>
    );
};

export default Browsing;
