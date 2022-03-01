import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import styled from "styled-components";
const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
    padding: 3rem;
    justify-content: center;
    @media (max-width: 768px) {
        padding: 0rem !important;
    }
`;

const StyledPicture = styled.div`
    flex: 1 1 auto;
    min-width: 300px;
    height: 15rem;
    /* display: none; */
    /* position: relative; */
    /* height: 100%; */
    /* height: 22rem; */
    /* min-width: 22rem; */
    /* margin-right: 2rem; */
    padding: 0.5rem;
    margin-right: 3rem;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    .pic-container {
        width: 12em;
        height: 12em;
        border-radius: 50%;
        background: white;
        position: absolute;
        /* left: 50%; */
        /* top: 50%; */
        /* transform: translate(-50%, -50%); */
        overflow: hidden;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
        .left-cercle {
            position: absolute;
            left: 30%;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to bottom right,
                #ff416c,
                #ff4b2b
            );
        }
        .right-cercle {
            position: absolute;
            left: -55%;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                to bottom right,
                #ff416c,
                #ff4b2b
            );
        }
        .background {
            width: 98%;
            height: 98%;
            border-radius: 50%;
            background-color: black;
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
    @media (max-width: 768px) {
        padding: 0rem !important;
        margin-right: 0rem !important;
    }
`;

const StyledInfo = styled.div`
    flex: 1 1 65%;
    /* min-width: 500px; */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    /* padding: 2rem 4rem; */
    margin: 0 auto;
    .item {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f8eded;
        & > * {
            font-size: 1.1rem;
            color: ${(props) => props.theme.colors.text};
        }
        .label {
        }
        .starts {
            .icone {
                font-size: 1.5rem;
                margin: 0 0.2rem;
            }
            .fill {
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }
    @media (max-width: 750px) {
        .item {
            /* padding: 0 !important; */
            & > * {
                font-size: 1rem !important;
            }
        }
        .starts {
            .icone {
                font-size: 1rem !important;
                margin: 0 0.1rem !important;
            }
            .fill {
                color: ${(props) => props.theme.colors.primary};
            }
        }
    }

        /* width: 5rem !important; */
        /* height: 5rem !important; */
    }
`;
const UserInfo = () => {
    return (
        <StyledHeader>
            <StyledPicture>
                <div className="pic-container">
                    <div className="left-cercle" />
                    <div className="right-cercle" />
                    <div
                        className="background"
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1516522973472-f009f23bba59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGdpcmxzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")`,
                        }}
                    />
                </div>
            </StyledPicture>
            <StyledInfo>
                <div className="item">
                    <div className="label">Fame Rating</div>
                    <div className="value">
                        <div className="starts">
                            {[1, 2, 3].map((item, index) => (
                                <AiFillStar
                                    key={index}
                                    className="icone fill"
                                />
                            ))}
                            {[1, 2].map((item, index) => (
                                <AiOutlineStar key={index} className="icone" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="label">User Name</div>
                    <div className="value">Farwila</div>
                </div>
                <div className="item">
                    <div className="label">Full Name</div>
                    <div className="value">Bigola Lfarwila</div>
                </div>
                <div className="item">
                    <div className="label">Gender</div>
                    <div className="value">Male</div>
                </div>
                <div className="item">
                    <div className="label">Age</div>
                    <div className="value">30</div>
                </div>
                <div className="item">
                    <div className="label">Sexual Preferences</div>
                    <div className="value">Female</div>
                </div>
            </StyledInfo>
        </StyledHeader>
    );
};

export default UserInfo;
