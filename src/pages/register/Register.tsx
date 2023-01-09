import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerApi, UserModel } from "../../redux/reducers/userReducer";
import { RootState } from "../../redux/configStore";

type Props = {};

const Register = (props: Props) => {

  const [passwordType, setPasswordType] = useState({
    password: true,
    passwordConfirm: true,
  });

  // const {newUser} = useSelector((state:RootState) => state.userReducer);
  const dispatch = useDispatch();

  return (
    <div className="register container">
      <form className="register_form">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Account
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="account"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password Confirm
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="passowrdConfirm"
          />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="name"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                name="phone"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
