import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./pages/Account";
import Home from "./pages/Home.jsx";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./component/ProtectedRoute";
import Footer from "./component/Footer";
// import MoviePage from "./pages/MoviePage";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          {/* <Route
            path="/movie_page/id"
            element={
              <ProtectedRoute>
                <MoviePage />
              </ProtectedRoute>
            }
          /> */}
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
};

export default App;
