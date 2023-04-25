import React, { useState } from 'react'


const AddEmployee = () => {


  const [user, setUser] = useState({
    firstname:"", lastname:"", email:"", phone:"", education:"", experience:""
  });

  let name, value;

  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user,[name]:value});
  }

const PostData = async (e) => {
    e.preventDefault();

    
    const{  firstname, lastname, email, phone, education, experience } = user;

     const res = await fetch('/register',{
      method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({

          firstname, lastname, email, phone, education, experience

        })
     });

     const data = await res.json();


     if(res.status === 422 || !data){
        window.alert("INVALID REGISTRATION");
        console.log("INVALID REGISTRATION");
       }else {
        window.alert("REGISTRATION SUCCESSFUL");
        console.log("SUCCESSFUL REGISTRATION");
       }

}
    // const res = await fetch("http://localhost:8080/register", {
    //   method: "POST",
    //   headers:{
    //     "content-Type": "application/json"
    //   },
    //   body:JSON.stringify({
    //     firstname, lastname, email, phone, education, experience
    //   })
    // });

    //  const data = await res.json();

    //  if(res.status === 422 || !data){
    //   window.alert("INVALID REGISTRATION");
    //   console.log("INVALID REGISTRATION");
    //  }else {
    //   window.alert("REGISTRATION SUCCESSFUL");
    //   console.log("SUCCESSFUL REGISTRATION");
    //  }
    // const { firstname, lastname, email, phone, education, experience } = user;

    // const res = await fetch("http://localhost:8080/register", {
    //   method:"POST",
    //   headers: {
    //     "Content-Type" : "application/json"
    //   },
    //   body: JSON.stringify({

    //     firstname, lastname, email, phone, education, experience

    //   })
    // });
    

   


    //  }

    // console.log('enable employee ddition==========>')

  //   let dataIP = {"email":"sidhant12@gmail.com",  "password":"vivor" };


  //   const handleUser = (data) => {
  //     console.log(data);
  //    fetch('http://localhost:8080/register')
  //      .then(resp => resp.json())
  //      .then(data => console.log(data))
  //  };
  // console.log(handleUser)

//    fetch('http://localhost:8080/getUsers', {
//     method: 'GET',
//     headers: {
//       "access-control-allow-credentials": true,
//       "access-control-allow-methods": "*",
//       "Access-Control-Allow-Origin":"*",
//       "Content-Type": "application/json; charset=utf-8"
//              },
//        })
//        .then(results => results.json())
//        .then(data => console.log(data))


// }


  return (
     <>
     <div style={{backgroundColor:"skyblue"}} className='row'>
     <h1 style={{padding:50,marginLeft:118}}>Registration</h1>
     </div>
     
  <div className="container" style={{backgroundColor:'skyblue',width:"100%",height:"595px"}}>
   
    <div style={{marginTop:50,marginLeft:170}} className="content">
      <form method='POST' className='register_form'>
        <div className="user-details">
          <div className="input-box">
            <span className="details">First Name</span>
            <input style={{width:300}} type="text" name='firstname' autoComplete='off'
            value={user.firstname}
            onChange={handleInputs}
            placeholder="Enter your First name" required/>
          </div>
          <div className="input-box">
            <span className="details">Last Name</span>
            <input style={{width:300}} type="text" name='lastname' autoComplete='off'
            value={user.lastname}
            onChange={handleInputs}
            placeholder="Enter your Last name"  required/>
          </div>
         
          <div className="input-box">
            
            <span className="details">Email</span>
            <input style={{width:300}} type="text" name='email' autoComplete='off'
            value={user.email}
            onChange={handleInputs}
            placeholder="Enter your email" required/>
          </div>
          <div className="input-box">
            <span className="details">Phone Number</span>
            <input style={{width:300}} type="text" name='phone' autoComplete='off'
            value={user.phone}
            onChange={handleInputs}
            placeholder="Enter your number"  required/>
          </div>
          <div className="input-box">
            <span className="details">Education</span>
            <input style={{width:300}} type="text" name='education' autoComplete='off'
            value={user.education}
            onChange={handleInputs}
            placeholder="Enter your Education" required/>
          </div>
          <div className="input-box">
            <span className="details">Expeience</span>
            <input style={{width:300}} type="text" name='experience' autoComplete='off'
            value={user.experience}
            onChange={handleInputs}
            placeholder="Confirm your Experience" required/>
          </div>
        </div>
        <div className="gender-details">
          <input style={{width:300}} type="radio" name="gender" id="dot-1"/>
          <input style={{width:300}} type="radio" name="gender" id="dot-2"/>
          <input style={{width:300}} type="radio" name="gender" id="dot-3"/>
          <span className="gender-title">Gender</span>
          <div className="category">
            <label for="dot-1">
            <span className="dot one"></span>
            <span className="gender">Male</span>
          </label>
          <label for="dot-2">
            <span className="dot two"></span>
            <span className="gender">Female</span>
          </label>
          <label for="dot-3">
            <span className="dot three"></span>
            <span className="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input style={{width:150}} type="submit" value="Register" onClick={PostData}
          />
        </div>
      </form>
    </div>
  </div>


</>
  )
}

export default AddEmployee;