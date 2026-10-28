import { Link } from "react-router-dom";
import AdminNav from "../component/AdminNav";
import axios from "axios";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { TfiTrash } from "react-icons/tfi";


function ViewCourse (){
    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [modules, setModules] = useState("");
    const [description, setDescription] = useState("");
    const [requirement, setRequirement] = useState("");
    const [courses, setCourses] = useState([]);
    const [model, setModel] = useState(false);
    const [id, setId] = useState("");

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
}, [model]);

const deletecourse = async (id) => {
    try{
        const resp = await axios.delete(`http://localhost:5000/courses/${id}`);
        const data = await resp.data;
        if (data.id) {
            alert("Course deleted successfully");
        }
    } catch (err) {
        console.log(err);
    }
};

const triggermodel = (data) => {
    setId(data.id);
    setModel(true);
    setTitle(data.title);
    setDuration(data.duration);
    setCategory(data.category);
    setLevel(data.level);
    setDescription(data.description);
    setPrice(data.price);
    setImage(data.image);
    setModules(data.modules.join(","));
    setRequirement(data.requirement.join(","));
};

const updateCourse = async (e) => {
    e.preventDefault();
        try{
            const course_obj = {
                title: title,
                duration: duration,
                price: price,
                category: category,
                level: level,
                image: image,
                description: description,
                modules: modules.split(","),
                requirement: requirement.split(",")
            };
            const resp = await axios.put(`http://localhost:5000/courses/${id}`, course_obj);
            if (resp.data.id) {
                alert("course updated successfully");
            }

        } catch (err) {
            console.log(err);
        }
}
    return (
        <div>
            <AdminNav />
                <div className=" my-5 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-[90%] mx-auto">
      <div className="p-5 border-b border-gray-200 w-[90%] mx-auto items-center text-center">
        <h2 className="text-3xl font-bold text-gray-800 ">Products</h2>
      </div>
<table className="w-full text-left ">
  <thead className="">
    <tr className="bg-blue-100 text-sm text-gray-400 uppercase font-semibold text-left">
      <th className="p-3">Image</th>
      <th className="p-3">Name</th>
      <th className="p-3">Price</th>
      <th className="p-3">Category</th>
      <th className="p-3">Duration</th>
      <th className="p-3 ">Level</th>
      <th className="p-3 ">Edit</th>
      <th className="p-3 ">Delete</th>
    </tr>
  </thead>
  <tbody>
    {courses.map((course) => (
      <tr key={course.id} className="bg-white shadow-sm">
        <td className="p-3 align-top text-blue-600 font-[500] "><img src={course.image} className="w-15 h-15 object-cover rounded-md" /></td>
        <td className="p-3 align-top text-blue-600 font-[500] text-blue-900">{course.title}</td>
        <td className="p-3 align-top text-blue-600 font-[500]">{course.price}</td>
        <td className="p-3 align-top text-blue-600 font-[500]">{course.category}</td>
        <td className="p-3 align-top text-blue-600 font-[500]">{course.duration}</td>
        <td className="p-3 align-top  text-blue-600 font-[500] ">{course.level}</td>
        <td className="p-3 align-top  text-blue-600 font-[500]">
            <button className="text-green-500 cursor-pointer" onClick={() => triggermodel(course)}>
                <GrEdit className="text-green-500" />
            </button>
        </td>
        <td className="p-3 align-top  text-blue-600 font-[500]">
            <button className="text-green-500 cursor-pointer" onClick={() => deletecourse(course.id)}>
                <TfiTrash className="text-red-500" />
            </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>

    {model == true ? (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-[linear-gradient(rgba(0,0,0,0.5))] flex justify-center items-center p-5 overflow-y-auto">
                        <form className=" bg-white w-[50%] mx-auto p-2 shadow-sm mt-5">
                            <div className="border-b border-gray-200 pb-3 flex justify-between items-center gap-5 mb-5">
                                <h4 className="text-center text-xl font-medium">Update Course</h4>
                                <button className="text-4xl cursor-pointer" onClick={() => setModel(false)}>
                                    X
                                </button>
                            </div>
                <div className="grid grid-cols-2 gap-5">
                    <div >
                    <label htmlFor="title">Title</label>
                    <input type="text" className="border border-gray-200 p-2 w-full " value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div >
                    <label htmlFor="duration">Duration</label>
                    <input type="text" className="border border-gray-200 p-2 w-full " value={duration} onChange={(e) => setDuration(e.target.value)} />
                    </div>
                    <div >
                    <label htmlFor="category">Category</label>
                    <select className="border border-gray-200 p-2 w-full " value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="Select Category"></option>
                        <option value="web">Web</option>
                        <option value="data">Data</option>
                        <option value="design">Design</option>
                        <option value="engineering">Engineering</option>
                        <option value="ai">AI</option>
                    </select>
                    </div>
                    <div >
                    <label htmlFor="level">Level</label>
                    <select className="border border-gray-200 p-2 w-full " value={level} onChange={(e) => setLevel(e.target.value)}>
                        <option value="Select Level"></option>
                        <option value="beginner">Beginner</option>
                        <option value="intermidate">Intermidate</option>
                        <option value="advanced">Advanced</option>
                        <option value="ai">AI</option>
                    </select>
                    </div>
                    <div >
                    <label htmlFor="price">Price</label>
                    <input type="text" className="border border-gray-200 p-2 w-full " value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div >
                    <label htmlFor="image">Image URL</label>
                    <input type="text" className="border border-gray-200 p-2 w-full " value={image} onChange={(e) => setImage(e.target.value)}/>
                    </div>
                    <div >
                    <label htmlFor="discription">Description</label>
                    <textarea className="border border-gray-200 p-2 w-full " value={description} onChange={(e) => setDescription(e.target.value)} ></textarea>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="modules">Modules (sperate with comma)</label>
                     <textarea className="border border-gray-200 p-2 w-full " value={modules} onChange={(e) => setModules(e.target.value)} ></textarea>
                    </div>
                    <div className="col-span-2">
                    <label htmlFor="requirement">Requirement (sperate with comma)</label>
                     <textarea className="border border-gray-200 p-2 w-full " value={requirement} onChange={(e) => setRequirement(e.target.value)} ></textarea>
                    </div>
                </div>
                <button className="bg-blue-500 text-white py-1 px-3 text-sm" onClick={updateCourse}>Create Course</button>
            </form>
        </div>
    ) : null}
        </div>

    );
}
export default ViewCourse;







