import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const RejectList = () => {
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
const [edit ] = useState(null);
const get_Data =(async (id)=>{
  await axios.get('http://localhost:8080/getUsers')
.then((res)=>setPosts(res.data.data))
.catch((err)=>console.log(err))
})


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


  useEffect(() => {
    get_Data();
  },[])
  return (
    <div>
        <h1>This is our logs section</h1>
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
 {posts.filter((el)=>el.status === "rejected").map((userData, index) => {
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
          
            {/* <button style={{backgroundColor: "#443C68", color:"white",borderRadius:"8px"}}>Edit</button> */}
          
          <button style={{backgroundColor: "#443C68", color:"white"}}  onClick={() => handleDelete(userData._id)}>Delete</button>
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

export default RejectList;