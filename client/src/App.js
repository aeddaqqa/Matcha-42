import { useState } from "react";
import GlobalStyle from "./globalStyles";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./utils/constants/Theme";
import "./index.css";
import Router from "./components/routing/index";

const StyledApp = styled.div`
    padding-bottom: 100px;
    /* background-color: #fffafb; */
`;

const App = () => {
    const [themeSelector, setThemeSelector] = useState(true);
    return (
        <StyledApp>
            <ThemeProvider theme={themeSelector ? theme.light : theme.dark}>
                <GlobalStyle />
                <Router />
            </ThemeProvider>
        </StyledApp>
    );
};

export default App;
