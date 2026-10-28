import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="bg-blue-500 flex justify-between p-3 text-white">
      <h1><Link to="/">Logo</Link></h1>
      <ul className='flex gap-5'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Courses">Courses</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
};
export default Nav;