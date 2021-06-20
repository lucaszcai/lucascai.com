import React, { useState, useEffect } from 'react';

export default function useDarkMode(){
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    console.log(colorTheme);

    useEffect(() => {
        const root = window.document.documentElement;
   
        root.classList.remove(colorTheme);
        root.classList.add(theme);

    },[theme], colorTheme);

    return [colorTheme, setTheme];
}