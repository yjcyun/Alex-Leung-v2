import { useEffect, useState } from 'react';

const useDarkMode = () => {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const preference = prefersDark ? 'dark' : 'light'

  const [theme, setTheme] = useState(preference);

  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  };

  const themeToggler = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    localTheme && setTheme(localTheme)
  }, []);

  return [theme, themeToggler]
};

export default useDarkMode