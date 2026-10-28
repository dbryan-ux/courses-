import { use, useState } from "react";
import Nav from "../component/Nav";


function Contact () {
    // const [num, setNum, ] = useState(30);
    // const increaseNum = () => {
    //     setNum(num + 1) ;
    // };
    // const decreaseNum = () => {
    //    if (num > 0){
    //      setNum(num -1) ;
    //    }
    // };
    // const resetNum = () => {
    //     setNum(0) ;
    // };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNub, setPhoneNub] = useState("");
    const [email, setEmail] = useState("");
    const [male, setMale] = useState("");
    const [female, setFemale] = useState("");
    const [gender, setGender] = useState("");
    const [message, setMessage] = useState("");
    const [errorCheck, setErrorCheck] = useState(false);
    

    const submitForm = (e) => {
        e.preventDefault()
        if (firstName == "" || lastName == "" || phoneNub == "" || email == "" || male == "" || female == "" || gender == "" || message == ""  ){
            setErrorCheck(true);
        }else {
            let new_details = {
                first_name:firstName,
                last_name:lastName,
                email:email,
                phone:phoneNub,
                gender:gender,
                message:message
            }
        }

    };

    return (
        <div>
          <Nav/>
            <div className="bg-gray-100 h-[30vh] text-center p-20">
                <h2 className="text-4xl font-medium">Contact us</h2>
            </div>

            {/* <div>
                <h2 className="text-5xl">{num}</h2>
                <button className="bg-blue-500 text-white p-2 mr-2" onClick={increaseNum}>
                    increase
                </button>
                <button className="bg-blue-500 text-white p-2 mr-2" onClick={decreaseNum}>
                    decrease
                </button>
                <button className="bg-blue-500 text-white p-2" onClick={resetNum}>
                    reset
                </button>
            </div> */}
            <form className="w-[40%] mx-auto my-5 p-5 shadow-sm">
                <div className="mb-3">
                <label htmlFor="first_name">First name</label>
                <input type="text"
                 className="border border-gray-200 p-3 outline-none w-full "
                 value={firstName} 
                 onChange={(e) => setFirstName(e.target.value)}
                 /> 
                 {errorCheck == true && firstName == "" ? <span className="text-red-500 text-sm">First name Required</span> : null}
                </div>
                <div className="mb-3">
                <label htmlFor="last_name">Last name</label>
                <input type="text"
                 className="border border-gray-200 p-3 outline-none w-full"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
                 /> 
                 {errorCheck == true && lastName == "" ? <span className="text-red-500 text-sm">Last name Required</span> : null}
                 
                </div>
                <div className="mb-3">
                <label htmlFor="email">Email address</label>
                <input type="email"
                 className="border border-gray-200 p-3 outline-none w-full"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                   /> 
                 {errorCheck == true && email == "" ? <span className="text-red-500 text-sm">Email Required</span> : null}
                </div>
                <div className="mb-3">
                <label htmlFor="phone">Phone number</label>
                <input type="tel"
                 className="border border-gray-200 p-3 outline-none w-full"
                 value={phoneNub}
                 onChange={(e) => setPhoneNub(e.target.value)}
                 /> 
                 {errorCheck == true && phoneNub == "" ? <span className="text-red-500 text-sm"> Phone Number Required</span> : null}
                </div>
                <div className="mb-3">
                <label htmlFor="gender">Gender</label>
                <select className="border border-gray-200 p-3 outline-none w-full"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                >
                
                    <option value="">Select gender</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                </select>
                {errorCheck == true && gender == "" ? <span className="text-red-500 ntext-sm"> Gender Required</span> : null}
                </div>
                <div className="mb-3">
                <label htmlFor="message" >Message</label>
                <textarea className="border border-gray-200 p-3 outline-none w-full"
                value={message}
                onChange={(e) => setMessage(e.target.value)}

                ></textarea>
                {errorCheck == true && message == "" ? <span className="text-red-500 ntext-sm"> Message Required</span> : null}
                </div>
                <button onClick={submitForm} className="bg-blue-500 text-white py-1 px-3 text-sm cursor-pointer" >Submit</button>
            </form>
        </div>
    );

}
export default Contact;