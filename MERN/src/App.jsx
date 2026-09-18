import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StudentLists from "./pages/StudentLists";
import StudentDetails from "./pages/StudentDetails";
import AddStudent from "./pages/AddStudent";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentLists />} />
        <Route path="/students/:id" element={<StudentDetails />} />
        <Route path="/add-student" element={<AddStudent />} />
      </Routes>
    </BrowserRouter>
  );
}