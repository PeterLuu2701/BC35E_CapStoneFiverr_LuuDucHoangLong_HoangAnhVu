import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { registerApi } from "../../redux/reducers/userReducer";
import { DispatchType, RootState } from "../../redux/configStore";

export type UserRegister = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  phone: string;
}

type Props = {};

const Register = (props: Props) => {

  const [passwordType, setPasswordType] = useState({
    password: true,
    passwordConfirm: true,
  });

  const { userRegister } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<DispatchType>();

  const frm = useFormik<UserRegister>({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phone: "",
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .trim()
        .required("Email cannot be blank!")
        .email("Email is invalid!"),
      password: yup
        .string()
        .trim()
        .required("Password cannot be blank!")
        .min(6, "Password must be between 6 - 10 characters!")
        .max(10, "Password must be between 6 - 10 characters!"),
      passwordConfirm: yup
        .string()
        .trim()
        .required("Confirm password cannot be blank!")
        .oneOf([yup.ref("password")], "Passwords must match"),
      name: yup.string().trim().required("Name cannot be blank!"),
      phone: yup
        .string()
        .trim()
        .required("Phone number cannot be blank!")
        .matches(
          /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/,
          "Phone number is not valid!"
        ),
    }),
    onSubmit: (values: UserRegister) => {
      dispatch(registerApi(values));
    },
  });

  return (
    <div className="register container">
      <form className="register_form" onSubmit={frm.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
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
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type={passwordType.passwordConfirm ? "password" : "text"}
            className="form-control"
            id="passwordConfirm"
            name="passwordConfirm"
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
          <span
            onClick={() =>
              setPasswordType({
                ...passwordType,
                passwordConfirm: !passwordType.passwordConfirm,
              })
            }
          >
            <i className="fa-solid fa-eye" />
          </span>
          {frm.touched.passwordConfirm && frm.errors.passwordConfirm && (
            <p className="rForm__error" id="passwordConfirmError">
              {frm.errors.passwordConfirm}
            </p>
          )}
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
                id="name"
                name="name"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.touched.name && frm.errors.name && (
                <p className="rForm__error" id="nameError">
                  {frm.errors.name}
                </p>
              )}
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
                id="phone"
                name="phone"
                onChange={frm.handleChange}
                onBlur={frm.handleBlur}
              />
              {frm.touched.phone && frm.errors.phone && (
                <p className="rForm__error" id="phoneError">
                  {frm.errors.phone}
                </p>
              )}
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
