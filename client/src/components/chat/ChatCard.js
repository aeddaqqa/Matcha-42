import styled from "styled-components";
import UserPic from "./UserPic";
const StyledChatCard = styled.div`
    height: 100px;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    display: flex;
    align-items: center;
    .content {
        height: 80%;
        flex: 0 0 220px;
        color: #303248;
        display: flex;
        flex-flow: column;
        justify-content: center;
        &-username {
            flex: 0 0 20px;
            font-size: 1rem;
        }
        .last-message {
            width: 100%;
            flex: 0 0 20px;
            overflow: hidden;
            font-size: 0.8rem;
            line-height: 1.2rem;
        }
    }
    .time-notification {
        flex: 1 1 auto;
        height: 80%;
        display: flex;
        align-items: center;
        flex-flow: column;
        justify-content: space-around;
        p {
            font-size: 0.8rem;
        }
        .notification {
            width: 24px;
            height: 26px;
            background-color: #ca7057;
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            color: white;
        }
    }
`;

const ChatCard = ({ type }) => {
    return (
        <StyledChatCard>
            <UserPic />
            <div className="content">
                <h2 className="content-username">username</h2>
                <p className="last-message">
                    {type === "message"
                        ? "last message last message last message last message"
                        : "biography"}
                </p>
            </div>
            {type === "message" ? (
                <div className="time-notification">
                    <p className="time">Oct 16</p>
                    <div className="notification">3</div>
                </div>
            ) : (
                ""
            )}
        </StyledChatCard>
    );
};

export default ChatCard;
