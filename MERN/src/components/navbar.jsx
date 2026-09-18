import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex flex-row justify-left py-2 px-4 bg-violet-400 text-white gap-4">
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/add-student">Add Student</Link>
    </nav>
  );
}