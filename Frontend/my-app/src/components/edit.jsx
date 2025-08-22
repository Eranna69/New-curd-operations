import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

export const Edit = () => {
  const data = {
    fname: "",
    lname: "",
    email: "",
    password: "",
  };

  const {id}=useParams()
  const [users,setUsers]=useState(data)

  const inputChangeHandler = (e)=>{
    const {name,value}=e.target;
    setUsers({...users,[name]:value})
  }

  const navigate = useNavigate()

  const handlesubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`,users).then((res)=>{
        toast.success("User created successfully!") 
        navigate('/')
    }).catch((err)=>console.log(err))
  }
  useEffect(()=>{
     axios.get(`http://localhost:8080/api/getone/${id}`).then((res)=>{
      setUsers(res.data)
     }).catch((error)=>{
      console.log(error)
     })
  },[id])
 
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <Link
                to="/"
                className="text-decoration-none  fs-4 text-secondary"
              >
                Back
              </Link>
              <form onSubmit={handlesubmit}>
                <div className="mb-3">
                  <label htmlFor="fname" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    id="fname"
                    value={users.fname}
                    aria-describedby="fnameHelp"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lname" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lname"
                    id="lname"
                    value={users.lname}
                    aria-describedby="lnameHelp"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={users.email}
                    aria-describedby="emailHelp"
                    onChange={inputChangeHandler}
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={users.password}
                    onChange={inputChangeHandler}

                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Update User
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
