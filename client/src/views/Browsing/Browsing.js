import { BrowsingContainer } from "./Browsing.style";
import LeftSide from "./LeftSide";
// import Content from "./Content";
import UserCard from "./UserCard";
const Browsing = () => {
    return (
        <BrowsingContainer>
            {/* <LeftSide /> */}
            <UserCard />
            {/* <Content /> */}
        </BrowsingContainer>
    );
};

export default Browsing;
