import styled from "styled-components";
import ChatCard from "./ChatCard";
const StyledChats = styled.div`
    height: auto;
    width: 100%;
    overflow: hidden;
`;
const StyledChatCards = styled.div`
    height: auto;
`;

const Chats = () => {
    return (
        <StyledChats>
            <h1 className="title">Chats</h1>
            <StyledChatCards>
                <ChatCard type="message" />
                <ChatCard type="message" />
                <ChatCard type="message" />
            </StyledChatCards>
        </StyledChats>
    );
};

export default Chats;
