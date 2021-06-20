import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import DarkModeToggle from "react-dark-mode-toggle";

export default function DarkToggle(){
    const [colorTheme, setTheme] = useDarkMode();
    return(
        <DarkModeToggle
            onChange={() =>setTheme(colorTheme)}
            checked={colorTheme==='light'}
            size={80}/>
    );
}
