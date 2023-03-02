import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";
import Characters from "../../views/Characters";
import CharacterDetails from "../../views/CharactersDetails";
import Students from "../../views/Students";
import Staff from "../../views/Staff";
import Spells from "../../views/Spells";
import Landing from "../../views/LandingPage";
import StudentsDetails from "../../views/StudentsDetails";
import StaffDetails from "../../views/Staff Details";
import Navbar from "../../components/Navbar";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/students" element={<Students />}></Route>
        <Route path="/staff" element={<Staff />}></Route>
        <Route path="/spells" element={<Spells />}></Route>
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/student/:id" element={<StudentsDetails />} />
        <Route path="/staff/:id" element={<StaffDetails />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
