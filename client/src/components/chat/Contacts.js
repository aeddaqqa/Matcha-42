import styled from "styled-components";
import ChatCard from "./ChatCard";
const StyledContacts = styled.div`
    height: 800px;
    width: 400px;
    background-color: #fbf8f1;
`;

const Contacts = () => {
    return (
        <StyledContacts>
            <h1 className="title">Users</h1>
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
            {/* <ChatCard /> */}
            {/* <ChatCard /> */}
        </StyledContacts>
    );
};

export default Contacts;
