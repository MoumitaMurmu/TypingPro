import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Styles/global";
import { useTheme } from "./Context/ThemeContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UserPage from "./Pages/UserPage";
import AboutUs from "./Pages/AboutUs";
import Tutorial from "./Pages/Tutorial";

function App() {
  // Extract the current theme from the ThemeContext
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      {/* ToastContainer for displaying notifications */}
      <ToastContainer />
      
      {/* Apply global styles */}
      <GlobalStyles/>

      {/* Define routes using React Router's Routes */}
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/tutorial" element={<Tutorial/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
