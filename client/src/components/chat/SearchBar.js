import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import UserPic from "./UserPic";
const StyledSearchBar = styled.div`
    height: 90px;
    overflow: hidden;
    display: flex;
    align-items: center;
    padding: 10px 40px 10px 5px;
    border-bottom: 1px solid #e9dac1;
    cursor: pointer;
    .input {
        flex: 1 1 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        &-field {
            padding: 0px 20px;
            width: 100%;
            font-size: 0.7rem;
            border-radius: 50px;
            border: solid 1px white;
            height: 50%;
            transition: all 0.3s ease-in-out;
            :focus {
                margin-left: -5px;
                width: 110%;
                height: 55%;
                background: white;
                color: black;
                outline: none;
            }
        }
        &-icon-box {
            width: 20px;
            display: flex;
            align-items: center;
            margin-left: -40px;
            background: white;
            backface-visibility: hidden;
        }
        &__icon {
            color: #b8bad0;
            width: 20px;
            height: 20px;
        }
    }
`;

const SearchBar = () => {
    return (
        <StyledSearchBar>
            <UserPic />
            <div className="input">
                <input
                    placeholder="search user"
                    className="input-field"
                    type="text"
                />
                <div className="input-icon-box">
                    <AiOutlineSearch className="input__icon" />
                </div>
            </div>
        </StyledSearchBar>
    );
};

export default SearchBar;
