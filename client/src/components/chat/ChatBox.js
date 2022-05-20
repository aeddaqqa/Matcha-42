import styled from "styled-components";
import { Dropdown, Menu, message } from "antd";
import UserPic from "./UserPic";
import { AiOutlineSend } from "react-icons/ai";
const StyledChatBox = styled.div`
    flex: 1 1 auto;
    height: 1400px;
    border-left: 1px solid #e9dac1;
    background: #fbf8f1;
`;

const HeaderBar = styled.div`
    height: 90px;
    width: 100%;
    display: flex;
    padding: 0 50px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e9dac1;
    .ant-btn {
        border: none;
        box-shadow: none;
    }
    .user {
        display: flex;
        align-items: center;
        height: 100%;
        h2 {
            font-size: 1.1rem;
            color: #232434;
            font-family: "Roboto Condensed", sans-serif;
            letter-spacing: 1px;
            margin: 0;
        }
    }
`;

const Header = () => {
    function handleButtonClick(e) {
        message.info("Click on left button.");
        console.log("click left button", e);
    }
    function handleMenuClick(e) {
        message.info("Click on menu item.");
        console.log("click", e);
    }
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="1">1st menu item</Menu.Item>
            <Menu.Item key="2">2nd menu item</Menu.Item>
            <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
    );

    return (
        <HeaderBar>
            <div className="user">
                <UserPic />
                <h2>username</h2>
            </div>
            <Dropdown.Button
                className="dropdown"
                onClick={handleButtonClick}
                overlay={menu}
            ></Dropdown.Button>
        </HeaderBar>
    );
};

const StyledContent = styled.div`
    width: 100%;
    height: 71%;
`;

const StyledMessage = styled.div`
    display: flex;
    height: auto;
    margin: 20px 50px;
    flex-direction: ${(props) =>
        props.position === "right" ? "row" : "row-reverse"};
    .message {
        height: auto;
        margin-top: 25px;
        /* flex: 0 0 1; */
        p {
            /* width: 100%; */
            background: #eeeeee;
            background: ${(props) =>
                props.position === "right" ? "#eeeeee" : "#f4e7d3"};
            padding: 15px;
            font-size: 0.9rem;
            border-radius: 10px;
            letter-spacing: 1px;
            text-align: justify;
        }
        max-width: 600px;
    }
`;

const Message = ({ position, children }) => {
    return (
        <StyledMessage position={position}>
            <UserPic />
            <div className="message">
                <p>{children}</p>
            </div>
        </StyledMessage>
    );
};

const Content = () => {
    return (
        <StyledContent>
            <Message position="right">
                172 packages are looking for funding 172 packages are looking
                for funding 172 packages are looking for funding 172 packages
                are looking for funding 172 packages are looking for funding 172
                packages are looking for funding.
            </Message>
            <Message>
                To address all issues (including breaking changes), run
            </Message>
        </StyledContent>
    );
};

const StyledMessageInput = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .input-text {
        flex: 1 1 50%;
        /* height: 50%; */
        border: #a6b1e1 1px solid;
        border-radius: 10px;
        padding: 10px 15px;
        font-size: 0.8rem;
        &:focus {
            outline: none;
        }
    }
    .send-button {
        color: white;
        background: #a6b1e1;
        border: none;
        outline: none;
        flex: 0 0 100px;
        margin-left: 20px;
        padding: 10px 15px;
        border-radius: 10px;
    }
`;

const MessageInpute = () => {
    return (
        <StyledMessageInput>
            <input
                className="input-text"
                type="text"
                placeholder="Type your message..."
            />
            <button className="send-button">
                Send <AiOutlineSend />
            </button>
        </StyledMessageInput>
    );
};

const ChatBox = () => {
    return (
        <StyledChatBox>
            <Header />
            <Content />
            <MessageInpute />
        </StyledChatBox>
    );
};

export default ChatBox;
