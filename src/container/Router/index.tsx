import { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "../../views/Welcome";
import LoginForm from "../../views/Auth/Login";
import SignupForm from "../../views/Auth/Signup";
import Characters from "../../views/Characters";
import Details from "../../views/Details";
import Students from "../../views/Students";
import Staff from "../../views/Staff";
import Spells from "../../views/Spells";
import Edit from "../../views/Edit";
import Landing from "../../views/LandingPage";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/signup" element={<SignupForm />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/students" element={<Students/>}></Route>
        <Route path="/staff" element={<Staff/>}></Route>
        <Route path="/spells" element={<Spells/>}></Route>
         <Route path="/details/:id" element={<Details />} />
         <Route path="/edit/:id" element={<Edit />} /> 
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
