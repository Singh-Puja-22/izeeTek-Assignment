import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const url = "http://localhost:8000/users";
      let body = await axios.get(url);
      setUserData(body);
      console.log(userData.data);
    };
    fetchUserData();
  }, []);

  const searchUser = (e) => {
    let filteredUser = userData?.data?.filter((user) => {
      return user.firstName
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setFilteredData(filteredUser);
  };

  return (
    <>
      <div className="container mt-4 d-flex justify-content-center ">
        <h1>User Dashboard</h1>
      </div>
      <div className="container mt-1 mb-2 d-flex justify-content-between">
        <div>
          <button
            className="btn btn-outline-success"
            onClick={() => handleBack()}
          >
            <i class="fa-solid fa-arrow-left" /> Back
          </button>
        </div>
        <div>
          <input
            type="search"
            placeholder="Search here..."
            className="form-control"
            onChange={searchUser}
          />
        </div>
      </div>

      <div className="container">
        <table class="table" border={2}>
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Password</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0
              ? filteredData.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.userName}</td>
                      <td>{user.password}</td>
                    </tr>
                  );
                })
              : userData?.data?.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.userName}</td>
                      <td>{user.password}</td>
                    </tr>
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;
