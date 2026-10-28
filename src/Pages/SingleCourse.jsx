import { useEffect, useState } from "react";
import Nav from "../component/Nav"
import { useParams } from "react-router-dom"
import axios from "axios";
import { RiMapPinTimeLine } from "react-icons/ri";


function SingleCourse () {
    const { id } = useParams();
    const [course, setCourse] = useState({});

    useEffect(() => {
        const getSingleCourse = async () => {
            try {
                const resp = await axios.get(`http://localhost:5000/courses/${id}`);
                if (resp.data.id) {
                    setCourse(resp.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getSingleCourse()
}, []);

    return(
        <div>
            <Nav />
            <h1>Single Course</h1>
            
            {course.id ? (
                <div className="grid grid-cols-2 gap-10 w-[70%] my-10 mx-auto">
                    <div>
                        <img src={course.image} alt="course" className="w-full" />
                    </div>
                    <div>
                        <h2 className="text-5xl font-medium mb-5">{course.title}</h2>
                        <p className="text-gray-500 mb-5">{course.description}</p>
                        <h3 className="text-3xl font-bold mb-5">₦{course.price}</h3>
                        <div className="flex gap-1 items-center text-gray-500 mb-5">
                            <RiMapPinTimeLine/>
                            <span>{course.duration}</span>
                        </div>
                        <p className="mb-4">Level: {course.level}</p>
                        <ul className="mb-5">
                            <li className="mb-3 font-bold">What you will learn</li>
                            {course.modules.length > 0 ? course.modules.map((m) => (
                                <li className="text-gray-500 mb-2 list-disc list-inside">{m}</li>
                            )) : null}
                        </ul>
                        <ul>
                            <span className="block mb-3 font-bold">Requirements</span>
                            {course.requirement.length > 0 ? (
                                course.requirement.map((r) => (
                                    <li className="text-gray-500 mb-2 list-decimal list-inside">{r}</li>
                                ))
                            ) :  null}
                        </ul>
                    </div>
                </div>
            ) : ( 
                <p>no courses found</p>
            )}
        </div>

    );
}
export default SingleCourse;