import axios from "axios";
import AdminNav from "../component/AdminNav";
import { useState } from "react";

function CreateCourse(){

    const [title, setTitle] = useState("");
    const [duration, setDuration] = useState("");
    const [category, setCategory] = useState("");
    const [level, setLevel] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [modules, setModules] = useState("");
    const [description, setDescription] = useState("");
    const [requirement, setRequirement] = useState("");

    const submitForm = async (e) => {
        e.preventDefault();
        if (title == "" || duration == "" || price == ""){
        alert("fields required")
     } else {
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
            const resp = await axios.post("http://localhost:5000/courses", course_obj);
            if (resp.data.id) {
                alert("course created successfully");
            }

        } catch (err) {
            console.log(err);
        }
     }
    };


    return (
        <div>
            <AdminNav />
            <form className="w-[70%] mx-auto p-2 shadow-sm mt-5">
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
                <button className="bg-blue-500 text-white py-1 px-3 text-sm" onClick={submitForm}>Create Course</button>

            </form>
        </div>
        
    );
}
export default CreateCourse;