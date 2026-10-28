import { Link } from "react-router-dom";
import hero1 from '../assets/hero1.avif';
import hero2 from '../assets/hero2.webp';
import hero3 from '../assets/hero3.webp';
import hero4 from '../assets/hero4.avif';
import hero5 from '../assets/her05.avif';
import hero6 from '../assets/hero6.avif';

function Hero(){
    return (
        <div className="py-5 grid grid-cols-2 gap-10 w-[80%] mx-auto items-center">
            <div>
                <h2 className="text-7xl mb-5 font-medium">Get certified for the roles you want</h2>
                <p className="text-gray-600 mb-10">by the end of our courses, you will be able to use your new skills to solve real-world problems</p>
               <Link to="/Courses"  className="bg-blue-500 text-white py-2 px-6 text-sm rounded-full" >View our courses</Link>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <img src={hero1} alt="hero1img" className="w-full rounded-md h-30 object-cover mb-2" />
                    <img src={hero2} alt="hero2img" className="w-full rounded-md h-60 object-cover mb-2" />
                    <img src={hero3} alt="hero3img" className="w-full rounded-md h-60 object-cover mb-2" />
                </div>
                <div>
                    <img src={hero4} alt="hero1img" className="w-full rounded-md h-60 object-cover mb-2" />
                    <img src={hero5} alt="hero2img" className="w-full rounded-md h-60 object-cover mb-2" />
                    <img src={hero6} alt="hero3img" className="w-full rounded-md h-30 object-cover mb-2" />
                </div>

            </div>
        </div>
    );
}
export default Hero;