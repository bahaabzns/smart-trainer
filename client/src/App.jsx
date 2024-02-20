import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignInUser from "./pages/SignInUser";
import AddNewUser from "./pages/AddNewUser";
import EditUser from "./pages/EditUser";
import Users from "./pages/Users";
import Header from "./components/Header";
import AddNewAccount from "./pages/AddNewAccount";
import EditAccount from "./pages/EditAccount";
import Accounts from "./pages/Accounts";

export default function App() {
  return (
    
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-in" element={<SignInUser />}/>
        <Route path="/add-new-user" element={<AddNewUser />}/>
        <Route path="/edit-user" element={<EditUser />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/add-new-account" element={<AddNewAccount />}/>
        <Route path="/edit-account" element={<EditAccount />}/>
        <Route path="/accounts" element={<Accounts />}/>

      </Routes>
    </BrowserRouter>
  )
}
