// import React, { useState } from "react";
// import Create from "./Create";
// import axios from "axios";
// export default function Lookup(){
//     const [v,setValue]=useState(0);
//     const [getdata,setgetdata]=useState([]);
//     const submitted=()=>{
//             axios.get('http://localhost:8080/api/find/'+v)
//             .then((response) => {
//                 setgetdata(response.data);
//             });
//     }
//     console.log(getdata);
//     return(
//         <form className="search-user">
//             <input type="number" placeholder="search..." onChange={(e) => setValue(e.target.value)}/>
//             <input type="submit" value="search" onSubmit={submitted}/>
//             <button type="submit" value="serach" onSubmit={submitted}/>
//         </form>
//     )
// }