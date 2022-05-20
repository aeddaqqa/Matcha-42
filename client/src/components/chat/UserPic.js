import styled from "styled-components";
const StyledUserPic = styled.div`
    height: 80px;
    width: 80px;
    position: relative;
    .avatar-pic {
        border: 1px solid white;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        width: 60px;
        height: 60px;
        background-image: url("https://images.unsplash.com/photo-1646197879190-78a962aab29b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .avatar-status {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(17px, 17px);
        border-radius: 50%;
        width: 10px;
        height: 10px;
        border: solid 1px white;
        background-color: green;
    }
`;

const UserPic = () => {
    return (
        <StyledUserPic>
            <div className="avatar-pic" />
            <div className="avatar-status" />
        </StyledUserPic>
    );
};

export default UserPic;
