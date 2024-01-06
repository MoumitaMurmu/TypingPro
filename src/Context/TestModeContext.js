// Import necessary functions from the 'react' library
import { createContext, useContext, useState } from "react";

// Create a context named 'TestModeContext'
const TestModeContext = createContext();

// Define a context provider component
export const TestModeContextProvider = ({ children }) => {
  // Initialize state variable 'testTime' with a default value of 15
  const [testTime, setTestTime] = useState(15);

  // Create an object 'values' containing the state variable and its setter function
  const values = {
    testTime,
    setTestTime
  };

  // Return a provider component with 'values' as the context value, which wraps its children.
  return (
    <TestModeContext.Provider value={values}>
    {/* This provider makes the values accessible to all the components within its scope. */}
      {children}
    </TestModeContext.Provider>
  );
};

// Define a custom hook 'useTestMode' to access the context values
export const useTestMode = () => useContext(TestModeContext);
