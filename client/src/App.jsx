import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInUser from "./pages/SignInUser";
import AddNewUser from "./pages/AddNewUser";
import EditUser from "./pages/EditUser";
import Users from "./pages/Users";

export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignInUser />}/>
        <Route path="/add-new-user" element={<AddNewUser />}/>
        <Route path="/edit-user-profile" element={<EditUser />}/>
        <Route path="/users" element={<Users />}/>

      </Routes>
    </BrowserRouter>
  )
}
