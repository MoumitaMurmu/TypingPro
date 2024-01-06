// Import necessary modules from React
import { createContext, useContext, useState } from "react";
import { themeOptions } from "../Utils/themeOptions";

// Create a new context for managing the theme
const ThemeContext = createContext();

// ThemeContextProvider component definition
export const ThemeContextProvider = ({ children }) => {
  // Retrieve the default theme from localStorage or use the first theme option
  const defaultValue = JSON.parse(localStorage.getItem('theme')) || themeOptions[0].value;

  // State to manage the current theme
  const [theme, setTheme] = useState(defaultValue);

  // Values to be provided by the context
  const values = {
    theme,
    setTheme,
  };

  // Provide the values to the context for its children
  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to access the theme context values
export const useTheme = () => useContext(ThemeContext);
