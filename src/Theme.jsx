import { useEffect, useState, createContext } from 'react';

const ThemeContext = createContext();

const getTheme = () => {
  const theme = localStorage.getItem('theme');
  if (!theme) {
    localStorage.setItem('theme', 'theme-01');
    return 'theme-01';
  } else {
    return theme;
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  const toggleTheme = () => {
    if (theme !== 'theme-01') {
      setTheme('theme-01');
    } else if (theme !== 'theme-02') {
      setTheme('theme-02');
    } else setTheme('theme-03');
  };

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem('theme', theme);
    };
    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
