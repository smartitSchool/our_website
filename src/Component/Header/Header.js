import React from 'react';
import Menu from './Menu/Menu';
import TopBar from './TopBar/TopBar';



const Header = () => {
    return (
        <header>
            <TopBar />
            <Menu />
        </header>
    );
};

export default Header;