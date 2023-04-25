import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './MyProfile.css'

const MyProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: null
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make PUT request to update user profile in database
    // Use formData to send data to server
  }

   
  return (

   <>
        
  <div className="container-fluid" >
   <div className='row'>
    <div className='col-lg-12'>
     <h1 className='edit1'>  <FontAwesomeIcon icon={faUser} /> <span></span> Edit Profile</h1> <br/> <br/> <br/>
        <form method='POST' className='register_form' onSubmit={handleSubmit}>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input style={{width:300}} type="text" name='firstName' autoComplete='off'
             value={formData.firstName}
             onChange={handleInputChange}
            placeholder="Enter your First name" required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input style={{width:300}} type="text" name='lastName' autoComplete='off'
           value={formData.lastName}
           onChange={handleInputChange}
            placeholder="Enter your Last name"  required/>
          </div>
         
          <div className="input-box">
            
            <span className="details">Email</span>
            <input style={{width:300}} type="text" name='email' autoComplete='off'
          value={formData.email}
          onChange={handleInputChange}
            placeholder="Enter your email" required/>
          </div>
          
          <div className="input-box">
            <span className="details">Password</span>
            <input style={{width:300}} type="text" name='password' autoComplete='off'
           value={formData.password}
           onChange={handleInputChange}
            placeholder="Enter your Password" required/>
          </div>
          <div className="input-box">
            <span className="details">ConfirmPassword</span>
            <input style={{width:300}} type="text" name='confirmPassword' autoComplete='off'
       value={formData.confirmPassword}
       onChange={handleInputChange}
            placeholder="Confirm your Password" required/>
          </div>

          <div className="input-box">
            <span className="details">Change Profile Picture</span>
            <input style={{width:300}} type="file" name='profileImage' label="Upload Profile" autoComplete='off'
            //  value={formData.profileImage}
            //  onChange={handleInputChange}
          required/>
          </div>
        </div>
       
        <div className="button">
          <input style={{width:150}} type="submit" value="Update"
          />
        </div>
      </form>    
    </div>
    
   </div>
 
 </div>
   </>
  )
}

export default MyProfile