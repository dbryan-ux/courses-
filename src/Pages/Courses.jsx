import Nav from "../component/Nav";
import { GrCertificate } from "react-icons/gr";
import { PiStarLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



function Courses () {
const [courses, setCourses] = useState([]);

useEffect(() => {
    const getCourses = async () => {
        try{
            const resp = await axios.get("http://localhost:5000/courses");
            setCourses(resp.data);
        } catch (err) {
            console.log(err);
        }
    };
    getCourses();
}, []);

    return (
        <div>
                    <div className="py-20 bg-gray-100 text-center">
            <h2 className="text-5xl font-medium mb-3">Our Courses</h2>
            <p className="text-gray-500">Select any of our courses shown</p>
        </div>
        <div className="grid grid-cols-3 gap-5 w-[80%] mx-auto">
            {courses.length > 0 ? (
                courses.map((Course) => (
                    <div className="p-2 shadow-sm rounded-lg" key={Course.id} >
                        <img src={Course.image} alt="image" className="w-full h-80 object-cover rounded-lg" />
                        <h3 className="my-3 font-medium">{Course.title}</h3>
                        <div className="flex justify-between items-center gap-6 mb-2 border-b border-gray-200 pb-2">
                            <div className="flex gap-1">
                                <GrCertificate />
                                <span className="text-xs text-gray-500">Yes</span>
                            </div>
                            <div className="flex gap-1">
                                <PiStarLight />
                                <span className="text-xs text-gray-500">{Course.rating}</span>
                            </div>

                        </div>
                            <Link to={"/Single/" + Course.id} className="block w-full bg-gray-200 text-center p-2 rounded-sm">View more</Link>
                    </div>
                ))
            ) : (
                <p>No courses found</p>
            )}

        </div>
        </div>
        
    );

}
export default Courses;