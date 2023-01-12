import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div className="container login">
      <div className="login_form_wrapper">
        <form className="login_form">
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
              // onChange={frm.handleChange}
              // onBlur={frm.handleBlur}
            />
            {/* {frm.touched.email && frm.errors.email && (
              <p className="rForm__error" id="emailError">
                {frm.errors.email}
              </p>
            )} */}
          </div>
          <div className="mb-3 password_input">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              // type={passwordType.password ? "password" : "text"}
              className="form-control"
              id="password"
              name="password"
              // onChange={frm.handleChange}
              // onBlur={frm.handleBlur}
            />
            <span
              className="password_hide"
              // onClick={() =>
              //   setPasswordType({
              //     ...passwordType,
              //     password: !passwordType.password,
              //   })
              // }
            >
              <i className="fa-solid fa-eye" />
            </span>
            {/* {frm.touched.password && frm.errors.password && (
              <p className="rForm__error" id="passwordError">
                {frm.errors.password}
              </p>
            )}  */}
          </div>
          <button type="submit" className="btn login_button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login