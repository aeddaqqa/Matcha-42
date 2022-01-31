import { useState } from 'react';
import GlobalStyle from './globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/constants/Theme';
import MainContent from './views/index';
import './index.css';

const App = () => {
    const [themeSelector, setThemeSelector] = useState(true);
    return (
        <>
            <ThemeProvider theme={themeSelector ? theme.light : theme.dark}>
                <GlobalStyle />
                <MainContent />
            </ThemeProvider>
        </>
    );
};

export default App;
