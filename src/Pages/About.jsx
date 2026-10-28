import { use, useEffect } from "react";
import Nav from "../component/Nav";
import axios from "axios";

function About () {
// const [products, setproducts] = useState([])
// useEffect(() => (
//         const getproduct = async () => {
//         try{
//             // const resp = await fetch("https://fakestoreapi.com/products", {method:"GET"});
//             // const data = await resp.json();
//             const resp = await axios.get("https://fakestoreapi.com/products");
//             const data = await resp.data;
//             setproducts(data);
//         } catch(err){
//             console.log(err)
//         }
//     };
//     getproduct();
// ),[]);
    return (
        <div>
           <Nav/>
            <h1>Welcome to my About Page</h1>
        </div>
    )

}
export default About;