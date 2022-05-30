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

const Browsing = () => {
    return (
        <BrowsingContainer>
            {/* <LeftSide /> */}
            <StyledSearchContainer>
                <div className="search">
                    <Input placeholder="Basic usage" />
                    <Button>Search</Button>
                </div>
                <div className="filter"></div>
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
