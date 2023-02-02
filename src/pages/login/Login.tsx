import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { DispatchType, RootState } from "../../redux/configStore";
import { loginApi } from "../../redux/reducers/userReducer";
import { http } from "../../utils/config";

export type UserLogin = {
  email: string;
  password: string;
  accessToken: string;
};

type Props = {};

const Login = (props: Props) => {
  const [passwordType, setPasswordType] = useState({
    password: true,
  });
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch<DispatchType>();
  const { userRegister } = useSelector((state: RootState) => state.userReducer);

  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      accessToken: "",
      //     user: {
      //         id: 0,
      // name: '',
      // email: '',
      // password: '',
      // phone: '',
      // birthday: '',
      // gender: true,
      // role: '',
      // skill: [],
      // certification: [],
      //     }
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email cannot be blank")
        .email("Email is invalid"),
      password: yup.string().trim().required("Password cannot be blank!"),
    }),
    onSubmit: (values: UserLogin) => {
      console.log('password' ,values);
      const actionAsync = loginApi(values);
      dispatch(actionAsync);
    },
  });

  useEffect(() => {
    if (userProfile) navigate("/");
  }, [userProfile]);

  return (
    <div className="container login">
      <div className="login_form_wrapper">
        <form className="login_form" onSubmit={frm.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            {frm.touched.email && frm.errors.email && (
              <p className="rForm__error" id="emailError">
                {frm.errors.email}
              </p>
            )}
          </div>
          <div className="mb-3 password_input">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type={passwordType.password ? "password" : "text"}
              className="form-control"
              id="password"
              name="password"
              onChange={frm.handleChange}
              onBlur={frm.handleBlur}
            />
            <span
              className="password_hide"
              onClick={() =>
                setPasswordType({
                  ...passwordType,
                  password: !passwordType.password,
                })
              }
            >
              <i className="fa-solid fa-eye" />
            </span>
            {frm.touched.password && frm.errors.password && (
              <p className="rForm__error" id="passwordError">
                {frm.errors.password}
              </p>
            )}
          </div>
          <button type="submit" className="btn login_button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
