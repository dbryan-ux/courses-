import { Link } from "react-router-dom";

function AdminNav(){
    return(
        <nav className="p-5 shadow-sm">
            <h1 className="text-3xl font-bold text-center my-5 ">Welcome, Admin</h1>
            <ul className="flex justify-center gap-5 items-center">
                <li><Link to="/admin" className="block p-2 hover:bg-gray-200" >Create Courses</Link></li>
                <li><Link to="/ViewCourse"  className="block p-2 hover:bg-gray-200">View Courses</Link></li>
                <li><Link className="block p-2 hover:bg-gray-200">View Users</Link></li>                
            </ul>
        </nav>
    );
}

export default AdminNav;