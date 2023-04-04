// components/DarkModeToggle.js
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const handleToggle = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('darkMode', !isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <button onClick={handleToggle} className="focus:outline-none text-xl">
            <FontAwesomeIcon
                icon={isDarkMode ? faSun : faMoon}
                className={isDarkMode ? 'text-yellow-300' : 'text-gray-900'}
            />
        </button>
    );
};

export default DarkModeToggle;
