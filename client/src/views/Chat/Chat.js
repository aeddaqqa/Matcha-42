import styled from "styled-components";
import SearchBar from "../../components/chat/SearchBar";
import Chats from "../../components/chat/Chats";
import Contacts from "../../components/chat/Contacts";
import ChatBox from "../../components/chat/ChatBox";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const StyledChat = styled.div`
    height: 1200px;
    width: 1200px;
    display: flex;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
        rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
        rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
    .title {
        font-family: "Roboto Condensed", sans-serif;
        font-size: 1.1rem;
        color: #232434;
        padding-left: 20px;
        padding-top: 20px;
        letter-spacing: 1px;
    }
`;

const StyledContact = styled.div`
    height: 100%;
    width: 400px;
    background-color: #fbf8f1;
`;

const Contact = () => {
    return (
        <StyledContact>
            <SearchBar />
            <Chats />
            <Contacts />
        </StyledContact>
    );
};

const Chat = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    useEffect(() => {
        // dispatch(startConnecting());
        // dispatch(isConnected());
        console.log("pikala");
    }, []);
    return (
        <StyledChat>
            <Contact />
            <ChatBox />
        </StyledChat>
    );
};

export default Chat;
