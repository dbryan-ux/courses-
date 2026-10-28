
import Hero from "../component/Hero";
import Nav from "../component/Nav";
import { Link } from "react-router-dom";

import nav1 from '../assets/nav1.avif'
import nav2 from '../assets/nav2.avif'



function Home () {

    return (
        <div>
         <Nav/>
         
         <div className="py-10 bg-gray-100">
                     <div className="grid grid-cols-2 gap-10 mt-10 w-[80%] mx-auto">
            <div>
                <img src={nav1} alt="" className="w-full rounded-md" />
            </div>
            <div>
                <h4 className="uppercase text-xs fony-thin mb-19">For Proffestionals</h4>
                <h3 className="text-7xl font-thin mb-10">Get certified for the roles want</h3>
                <p className="leading-7 text-gray-600 mb-10">
                    we know you dont want to spend years in school learning new creative skills. That's why  we created an online UI/UX bootcamp that will teach you new skills in just few weeks 
                </p>
                <Link to="/Courses" className="bg-blue-500 text-white text-sm py-2 px-6 rounded-full" >View our corses</Link>
            </div>

         </div>
         </div>
            <div className="grid grid-cols-2 gap-10 mt-10 w-[80%] mx-auto">

            <div>
                <h4 className="uppercase text-xs fony-thin mb-19">Learn with ease</h4>
                <h3 className="text-7xl font-thin mb-10">Discover a new way to learn</h3>
                <p className="leading-7 text-gray-600 mb-10">
                    we know you dont want to spend years in school learning new creative skills. That's why  we created an online UI/UX bootcamp that will teach you new skills in just few weeks 
                </p>
                <Link to="/Courses" className="bg-blue-500 text-white text-sm py-2 px-6 rounded-full" >View our corses</Link>
            </div>
                        <div>
                <img src={nav2} alt="" className="w-full rounded-md" />
            </div>

         </div>


        </div>

     
    );

}
export default Home;