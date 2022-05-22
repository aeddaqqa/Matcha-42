import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { MdOutlineNotifications } from "react-icons/md";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { StyledNavBar } from "./NavBar.style";

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
                <div className="navbar-user-notification">
                    <MdOutlineNotifications className="navbar-user-notification-icon" />
                    <div className="navbar-user-notification-count">4</div>
                </div>
                <div className="navbar-user-name">farwila</div>
                <div className="navbar-user-pic" />
                <AiOutlineLogout className="logout" />
            </div>
        </StyledNavBar>
    );
};

export default NavBar;
