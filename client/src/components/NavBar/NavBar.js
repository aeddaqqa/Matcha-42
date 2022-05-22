import React, { useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
const dog =
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGRvZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60";

const StyledNavContainer = styled.div`
    width: 100vw;
    padding: 1rem 4rem;
    background-color: #f7f7f7;
    @media (max-width: 600px) {
        padding: 0 !important;
    }
`;

const StyledContnet = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 0 2rem;
    margin: 0 auto;
    .logo {
        width: 6rem;
        height: 4rem;
    }
    .logout {
        width: 30px;
        height: 30px;
        color: ${(props) => props.theme.colors.placeholder};
    }
    .navbar-user-pic {
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
    @media (max-width: 600px) {
        width: 100% !important;
        justify-content: center !important;
    }
`;

const StyledLogoBox = styled.div``;
const StyledLinksBox = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;
const StyledUserBox = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const StyledLink = styled.div`
    font-size: 1.3rem;
    padding: 0.4rem 0;
    color: ${(props) => props.theme.colors.text};
    ${({ selected, theme }) =>
        selected &&
        `
        color: ${theme.colors.primary};
        border-bottom: 1px solid ${theme.colors.primary};
  `}
    &:hover {
        color: ${(props) => props.theme.colors.primary};
        border-bottom: 1px solid ${(props) => props.theme.colors.primary};
    }
`;

const NavBar = ({ complete, selected }) => {
    let location = useLocation();
    if (!complete)
        return (
            <StyledNavContainer>
                <StyledContnet>
                    <Logo className="logo" />
                    <AiOutlineLogout className="icone" />
                </StyledContnet>
            </StyledNavContainer>
        );
    return (
        <StyledNavContainer>
            <StyledContnet>
                <StyledLogoBox>
                    <Logo className="logo" />
                </StyledLogoBox>
                <StyledLinksBox>
                    <Link to="/profile">
                        <StyledLink selected={location.pathname === "/profile"}>
                            Profile
                        </StyledLink>
                    </Link>
                    <Link to="/browsing">
                        <StyledLink
                            selected={location.pathname === "/browsing"}
                        >
                            Browsing
                        </StyledLink>
                    </Link>
                    <Link to="/messages">
                        <StyledLink
                            selected={location.pathname === "/messages"}
                        >
                            Messages
                        </StyledLink>
                    </Link>
                </StyledLinksBox>
                <StyledUserBox>
                    <div className="navbar-user-pic" />
                    <AiOutlineLogout className="logout" />
                </StyledUserBox>
            </StyledContnet>
        </StyledNavContainer>
    );
};

export default NavBar;
