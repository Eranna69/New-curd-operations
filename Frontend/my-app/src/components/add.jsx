import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";

export const Add = () => {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handlesubmit = async(e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/api/create",data).then((res)=>{
        toast.success("User created successfully!") 
        navigate('/')
    }).catch((err)=>console.log(err))
  }
  const handlechange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
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
                    value={data.fname}
                    aria-describedby="fnameHelp"
                    onChange={handlechange}
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
                    value={data.lname}
                    aria-describedby="lnameHelp"
                    onChange={handlechange}
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
                    value={data.email}
                    aria-describedby="emailHelp"
                    onChange={handlechange}
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
                    value={data.password}
                    onChange={handlechange}

                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
