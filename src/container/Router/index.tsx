import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";
import Characters from "../../views/Characters";
import Students from "../../views/Students";
import Staff from "../../views/Staff";
import Spells from "../../views/Spells";
import Landing from "../../views/LandingPage";
import StudentsDetails from "../../views/StudentsDetails";
import StaffDetails from "../../views/StaffDetails";
import Navbar from "../../components/Navbar";
import { getToken } from "../../services/storage";
import { useLocation, Navigate } from "react-router-dom";
import Profile from "../../views/Profile";
import CharacterEdit from "../../views/CharacterEdit";
import StudentEdit from "../../views/StudentEdit";

const Router: FC = () => {
  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (!token || token === null) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
    return children;
  };

  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (token) {
      if (
        location.pathname === "/signup" ||
        location.pathname === "/login" ||
        location.pathname === "/"
      ) {
        return <Navigate to="/landing" replace state={{ from: location }} />;
      }
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HandleSession>
              <Welcome />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <HandleSession>
              <LoginForm />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <HandleSession>
              <SignupForm />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/landing"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Landing />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/characters"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Characters />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/students"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Students />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/staff"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Staff />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/spells"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Spells />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/characters/:id"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <CharacterEdit />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/students/:id"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <StudentEdit />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/staff/:id"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <StaffDetails />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Profile />
              </>
            </ProtectedRoutes>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
