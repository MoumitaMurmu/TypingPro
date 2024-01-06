// Import necessary modules and components from React and external libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TestModeContextProvider } from './Context/TestModeContext';
import { ThemeContextProvider } from './Context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

// Create a root for ReactDOM to render the application into the 'root' element in the HTML
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application with React StrictMode enabled
root.render(
  <React.StrictMode>
    {/* Provide the theme context to the entire application */}
    <ThemeContextProvider>
      {/* Provide the test mode context to the entire application */}
      <TestModeContextProvider>
        {/* Enable client-side routing with BrowserRouter */}
        <BrowserRouter>
          {/* Render the main application component */}
          <App />
        </BrowserRouter>
      </TestModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
