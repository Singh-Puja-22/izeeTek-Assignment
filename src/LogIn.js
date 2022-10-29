import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const formData = async () => {
    let url = "http://localhost:8000/users";

    let response = await (state.password === state.confirmPassword
      ? axios.post(url, state)
      : "");
    if (response) {
      navigate("/dashboard", { replace: true });
    }
  };

  useEffect(() => {
    let sss = !state && !state.password != state.confirmPassword;
    console.log(sss);
  }, []);

  return (
    <div>
      <div className="container mt-4 d-flex justify-content-center ">
        <div className="col-md-4">
          {state.password != state.confirmPassword ? (
            <div class="alert alert-danger" role="alert">
              Your Password does not match!!
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="container d-flex justify-content-center mt-2">
        <div className="col-lg-5">
          <h2>Create Your Google Account</h2>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="firstName" />
              <input
                type="text"
                className="form-control"
                placeholder="FirstName"
                required
                value={state.firstName}
                onChange={(e) => {
                  setState({ ...state, firstName: e.target.value });
                }}
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="lastName" />
              <input
                type="text"
                className="form-control"
                placeholder="LastName"
                required
                value={state.lastName}
                onChange={(e) => {
                  setState({ ...state, lastName: e.target.value });
                }}
              />
            </div>

            <div>
              <div className="input-group mt-4">
                <input
                  type="email"
                  className="form-control"
                  id="validationDefaultUsername"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend2"
                  required
                  value={state.userName}
                  onChange={(e) => {
                    setState({ ...state, userName: e.target.value });
                  }}
                />
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    @gmail.com
                  </span>
                </div>
              </div>
            </div>

            <div>
              <span>You can use letters, numbers & periods</span>
            </div>

            <div>
              <a href="">Use my current email address instead</a>
            </div>

            <div className="col-md-6">
              <label htmlFor="password" />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
                value={state.password}
                onChange={(e) => {
                  setState({ ...state, password: e.target.value });
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="confirmpassword" />
              <input
                type="password"
                className="form-control"
                placeholder="Confirm"
                value={state.confirmPassword}
                onChange={(e) =>
                  setState({ ...state, confirmPassword: e.target.value })
                }
                required
              />
            </div>
            <div>
              <span>
                Use 8 or more characters with a mix of letters, numbers &
                symbols
              </span>
            </div>

            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <span className="custom-control-label" htmlFor="customCheck1">
                show password
              </span>
            </div>

            <div className="mb-3 d-flex justify-content-between">
              <div>
                <a href="">Sign In Instead</a>
              </div>
              <div>
                <button
                  disabled={
                    state.password != state.confirmPassword || !state.password
                  }
                  className="btn mt-2 btn-primary"
                  onClick={() => formData()}
                >
                  Next <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
