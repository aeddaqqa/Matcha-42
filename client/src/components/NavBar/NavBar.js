import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import {
    MdOutlineNotifications,
    MdOutlineNightlight,
    MdOutlineLightMode,
} from "react-icons/md";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const dog =
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";
const StyledNavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 1px solid #ededed;
    background-color: #f7f7f7;
    /* background-color: #f8f3d4; */
    box-shadow: rgba(100, 100, 111, 0.1) 0px 7px 29px 0px;
    /* background-color: turquoise; */
    .navbar-logo {
        margin-left: 4rem;
        width: 120px;
        height: 100px;
        .logo {
            width: 100%;
            height: 100%;
        }
    }
    .navbar-links {
        display: flex;
        flex-wrap: wrap;
        height: 100%;
        align-items: center;
        & > * {
            cursor: pointer;
            margin: 0 1.5rem;
            font-size: 1.2rem;
            color: ${(props) => props.theme.colors.text};
            display: flex;
            align-items: center;
            height: 100%;
        }
        & > *:hover {
            color: ${(props) => props.theme.colors.primary};
        }
        .active {
            color: ${(props) => props.theme.colors.primary};
            border-bottom: 1px solid ${(props) => props.theme.colors.primary};
            /* padding-bottom: 0.5rem; */
        }
    }
    .navbar-user {
        display: flex;
        flex-wrap: wrap;
        margin-right: 4rem;
        align-items: center;
        &-pic {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-image: url(${dog});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            margin-left: 1rem;
            border: 1px solid ${(props) => props.theme.colors.primary};
        }
        &-name {
            margin-left: 2rem;
            font-size: 1.2rem;
            color: ${(props) => props.theme.colors.text};
        }
        &-notification {
            margin-left: 2rem;
            position: relative;
            display: flex;
            align-items: center;
            &-icon {
                width: 30px;
                height: 30px;
                color: ${(props) => props.theme.colors.placeholder};
            }
            &-count {
                position: absolute;
                font-size: 0.8rem;
                left: 50%;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                top: -25%;
                background-color: ${(props) => props.theme.colors.primary};
                color: ${(props) => props.theme.colors.text};
            }
        }
        &-theme-selector {
            margin-left: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &-icon {
                width: 30px;
                height: 30px;
                color: ${(props) => props.theme.colors.placeholder};
            }
        }
        &-search {
            border-radius: 20px;
            width: 300px;
        }
    }
`;

const NavBar = () => {
    const [theme, setThemeSelector] = useState(true);
    const [value, setValue] = useState("");

    const handleChange = (event) => {};

    const handleClickSearch = () => {};

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <StyledNavBar>
            <div className="navbar-logo">
                <Logo className="logo" />
            </div>
            <div className="navbar-links">
                <div className="navbar-links-messages">
                    <div>Messages</div>
                </div>
                <div className="navbar-links-browsing">
                    <div>Browsing</div>
                </div>
                <div className="navbar-links-profile">
                    <div className="active">Profile</div>
                </div>
            </div>
            <div className="navbar-user">
                <FormControl className="navbar-user-search" variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                        Search
                    </InputLabel>
                    <OutlinedInput
                        className="navbar-user-search"
                        type="text"
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickSearch}
                                    edge="end"
                                >
                                    <AiOutlineSearch />
                                </IconButton>
                            </InputAdornment>
                        }
                        label="seacrh"
                    />
                </FormControl>
                <div
                    className="navbar-user-theme-selector"
                    onClick={() => setThemeSelector(!theme)}
                >
                    {theme ? (
                        <MdOutlineLightMode className="navbar-user-theme-selector-icon" />
                    ) : (
                        <MdOutlineNightlight className="navbar-user-theme-selector-icon" />
                    )}
                </div>
                <div className="navbar-user-notification">
                    <MdOutlineNotifications className="navbar-user-notification-icon" />
                    <div className="navbar-user-notification-count">4</div>
                </div>
                <div className="navbar-user-name">farwila</div>
                <div className="navbar-user-pic" />
            </div>
        </StyledNavBar>
    );
};

export default NavBar;
