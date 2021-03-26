// import * as ReactBootStrap from "react-bootstrap";
// import {useEffect,useState} from 'react';
// import axios from 'axios';

// const MyProfile = () => {
//     const [MyProfile,Setmyprofile]= useState([]);

//     useEffect(()=>{
//         postDatatoServer(MyProfile);
//     },[])

//     const postDatatoServer= (data)=> {
//         axios.post(`http://localhost:8080/MyProfile`).then(
//           (response)=>{
//             console.log(response);
//             Setmyprofile(response.data);
//           },(error)=>{
//             console.log(error);
//           }
    
//         )
//       }

  

//   return (
//     <div className="App">
//       <ReactBootStrap.Table striped bordered hover variant="dark">
//         <div>
//            {  MyProfile &&
//            MyProfile.map((item)=>{
//            return (
//               <tr>
//                 <td>{item.registration_id} </td>
//                 <td>{item.username} </td>
//                 <td>{item.role}</td>
//                 <td>{item.user_email} </td>
//                 <td>{item.mobile_no}</td>
//                 <td>{item.to_date}</td>
                
//               </tr>
//             )})
//             } 

//         </div> 
//       </ReactBootStrap.Table>
//     </div>
//   );
// };

// export default MyProfile;