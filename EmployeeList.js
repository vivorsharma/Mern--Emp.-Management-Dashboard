import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import './EmployeeList.css';

 
const EmployeeList = () => {
  const [posts, setPosts] = useState([]);
  const [ivalue , setIValue] = useState({
firstname: "",
lastname: "",
email: "",
phone: "",
education: "",
experience: "",  
done: ""
})
const [edit , setEdit] = useState(null);



const get_Data =(async ()=>{
  await axios.get('http://localhost:8080/getUsers')
.then((res)=>{
  setPosts(res.data.data)
})
.catch((err)=>console.log(err))
})


const handleDelete = async (id) => {
  await axios.delete(`http://localhost:8080/register/${id}`)
    .then(() => {
      // Remove the deleted post from the posts array
      const updatedPosts = posts.filter(post => post._id !== id);
      toast("Employee data deleted Successfully")
      setPosts(updatedPosts);
    })
    .catch((err) => console.log(err));
}

const handleEdit = async (id) => {
  if (edit === id) {
    await axios.put(`http://localhost:8080/register/${id}`, ivalue[id])
      .then(() => {
        // Update the user data in the posts array
        const updatedPosts = posts.map(post => {
          if (post._id === id) {
            toast.success("Employee data Edited successfully");
            return {
              ...post,
              ...ivalue[post._id]
            };
           
          }
          return post;
        });
        setPosts(updatedPosts);
      })
      .catch((err) => console.log(err));
    setEdit(null);
  } else {
    // User is not being edited, set edit state to the current id
    setEdit(id);
  }
}
  


const handleChange = (e, userData) => {
  const value = e.target.value;
  const name = e.target.name;

  setIValue({
    ...ivalue,
    [userData._id]: {
      ...ivalue[userData._id],
      [name]: value
    }
  });
}



  useEffect(() => {
    get_Data();
  },[])
  return (
    <div>
       <h1>EmployeeList</h1>   
       <table className="table table-bordered">
  <thead>
     <tr>
       <th>Sr.No</th>
       <th>First Name</th>
       <th>Last Name</th>
       <th>Email</th>
       <th>Phone No</th>
       <th>Education</th>
      <th>Experience</th>
      <th>Actions</th>
    </tr>
 </thead>
 <tbody>
 {posts.filter(el=> el.status === "approved").map((userData, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="firstname"
              value={ivalue[userData._id]?.firstname || userData.firstname}
            />
          ) : (
            <span>{userData.firstname}</span>
          )}
        </td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="lastname"
              value={ivalue[userData._id]?.lastname || userData.lastname}
            />
          ) : (
            <span>{userData.lastname}</span>
          )}
        </td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="email"
              value={ivalue[userData._id]?.email || userData.email}
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="phone"
              value={ivalue[userData._id]?.phone || userData.phone}
            />
          ) : (
            <span>{userData.phone}</span>
          )}
        </td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="education"
              value={ivalue[userData._id]?.education || userData.education}
            />
          ) : (
            <span>{userData.education}</span>
          )}
        </td>
        <td>
          {edit === userData._id ? (
            <input
              type="text"
              onChange={(e) => handleChange(e, userData)}
              name="experience"
              value={ivalue[userData._id]?.experience || userData.experience}
            />
            ) : (
                          <span>{userData.experience}</span>
                        )}
                      </td>
                      <td>
                        {edit === userData._id ? (
                          <button className='done' onClick={() => handleEdit(userData._id)}>Done</button>
                        ) : (
                          <button className='edit' onClick={() => setEdit(userData._id)}>Edit</button>
                        )}
                        <button className='delete' onClick={() => handleDelete(userData._id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              </table>
              <ToastContainer position = "top-center"/>
              
                </div>
              )
              
                }

export default EmployeeList






// import React, { useEffect, useState } from 'react';
// import './Request.css';
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';




// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [ivalue , setIValue] = useState({
// firstname: "",
// lastname: "",
// email: "",
// phone: "",
// education: "",
// experience: "",  
// done: ""
//   })
//   const [edit , setEdit] = useState(null);



// const get_Data =(async ()=>{
//   await axios.get('http://localhost:8080/getUsers')
// .then((res)=>setPosts(res.data.data))
// .catch((err)=>console.log(err))
// })

// const handleDelete = async (id) => {
//   await axios.delete(`http://localhost:8080/register/${id}`)
//     .then(() => {
//       // Remove the deleted post from the posts array
//       const updatedPosts = posts.filter(post => post._id !== id);
//       setPosts(updatedPosts);
//     })
//     .catch((err) => console.log(err));
// }

// const handleEdit = async (id) => {
//   if (edit === id) {
//     await axios.put(`http://localhost:8080/register/${id}`, ivalue[id])
//       .then(() => {
//         // Update the user data in the posts array
//         const updatedPosts = posts.map(post => {
//           if (post._id === id) {
//             toast.success("Employee Request Approved");
//             return {
//               ...post,
//               ...ivalue[post._id]
//             };
           
//           }
//           return post;
//         });
//         setPosts(updatedPosts);
//       })
//       .catch((err) => console.log(err));
//     setEdit(null);
//   } else {
//     // User is not being edited, set edit state to the current id
//     setEdit(id);
//   }
// }
  


// const handleChange = (e, userData) => {
//   const value = e.target.value;
//   const name = e.target.name;

//   setIValue({
//     ...ivalue,
//     [userData._id]: {
//       ...ivalue[userData._id],
//       [name]: value
//     }
//   });
// }



//   useEffect(() => {
//     get_Data();
//   },[])
// return(
//   <div>
//   <h1> Request</h1>
//  <table className="table table-bordered">
//   <thead>
//      <tr>
//        <th>Sr.No</th>
//        <th>First Name</th>
//        <th>Last Name</th>
//        <th>Email</th>
//        <th>Phone No</th>
//        <th>Education</th>
//       <th>Experience</th>
//       <th>Actions</th>
//     </tr>
//  </thead>
//  <tbody>
//   {posts.map((userData, index) => {
//     return (
//       <tr key={index}>
//         <td>{index + 1}</td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="firstname"
//               value={ivalue[userData._id]?.firstname || userData.firstname}
//             />
//           ) : (
//             <span>{userData.firstname}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="lastname"
//               value={ivalue[userData._id]?.lastname || userData.lastname}
//             />
//           ) : (
//             <span>{userData.lastname}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="email"
//               value={ivalue[userData._id]?.email || userData.email}
//             />
//           ) : (
//             <span>{userData.email}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="phone"
//               value={ivalue[userData._id]?.phone || userData.phone}
//             />
//           ) : (
//             <span>{userData.phone}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="education"
//               value={ivalue[userData._id]?.education || userData.education}
//             />
//           ) : (
//             <span>{userData.education}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <input
//               type="text"
//               onChange={(e) => handleChange(e, userData)}
//               name="experience"
//               value={ivalue[userData._id]?.experience || userData.experience}
//             />
//           ) : (
//             <span>{userData.experience}</span>
//           )}
//         </td>
//         <td>
//           {edit === userData._id ? (
//             <button style={{backgroundColor: "#443C68", color:"white",borderRadius:"10px"}} onClick={() => handleEdit(userData._id)}>Done</button>
//           ) : (
//             <button style={{backgroundColor: "#443C68", color:"white",borderRadius:"8px"}} onClick={() => setEdit(userData._id)}>Edit</button>
//           )}
//           <button style={{backgroundColor: "#443C68", color:"white",borderRadius:"10px"}} onClick={() => handleDelete(userData._id)}>Delete</button>
//         </td>
//       </tr>
//     );
//   })}
// </tbody>
// </table>
//         <ToastContainer  />

//   </div>
// )

//   }
//   export default App;