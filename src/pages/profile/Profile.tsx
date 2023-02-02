import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import {
  getProfileApi,
  updateProfileApi,
  UserProfile,
} from "../../redux/reducers/userReducer";

type Props = {};

const Profile = (props: Props) => {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<DispatchType>();

  useEffect(() => {
    dispatch(getProfileApi(userProfile?.id!));
  }, []);

  const frm = useFormik<UserProfile>({
    initialValues: {
      email: userProfile?.email!,
      name: userProfile?.name!,
      id: userProfile?.id!,
      password: userProfile?.password!,
      phone: userProfile?.phone!,
      birthday: userProfile?.birthday!,
      gender: userProfile?.gender!,
      role: userProfile?.role!,
      skill: userProfile?.skill!,
      certification: userProfile?.certification!,
    },
    enableReinitialize: true,
    validationSchema: yup.object().shape({
      name: yup.string().trim().required("Name cannot be blank!"),
      phone: yup
        .string()
        .trim()
        .required("Phone number cannot be blank!")
        .matches(
          /((^(\+84|84|0|0084){1})(3|5|7|8|9))+([0-9]{8})$/,
          "Phone number is not valid!"
        ),
      password: yup
        .string()
        .trim()
        .required("Password cannot be blank!")
        .min(6, "Password must be between 6 - 10 characters!")
        .max(10, "Password must be between 6 - 10 characters!"),
    }),
    onSubmit: (values: UserProfile) => {
      console.log("update:", values);
      dispatch(updateProfileApi(userProfile?.id!));
      dispatch(getProfileApi(userProfile?.id!));
    },
  });

  return (
    <div className="profile">
      <div className="container">
        <div className="col-4">
          <div className="basic_profile">
            <img src="https://i.pravatar.cc/300" alt="" />
            <h3>{userProfile?.name}</h3>
            <button
              type="button"
              className="btn btn-primary btn-lg"
              data-bs-toggle="modal"
              data-bs-target="#detail_info_modal"
            >
              <i className="fa-solid fa-pen-to-square"></i>
            </button>

            <hr />
            <div className="basic_profile_country">
              <div className="basic_profile_country_left basic_profile_left">
                <i className="fa-solid fa-location-dot"></i> From
              </div>
              <div className="basic_profile_country_right basic_profile_right">
                Vietnam
              </div>
            </div>
            <div className="basic_profile_member">
              <div className="basic_profile_member_left basic_profile_left">
                <i className="fa-solid fa-user"></i> Member since
              </div>
              <div className="basic_profile_member_right basic_profile_right">
                Jan 2023
              </div>
            </div>
          </div>
          <div className="info_detail">
            <div className="info_detail_description">
              <div className="basic_profile_left">Description</div>
              <div className="basic_profile_right">Edit</div>
              <hr />
            </div>
            <div className="info_detail_languages">
              <div className="basic_profile_left">Languages</div>
              <div className="basic_profile_right">Add</div>
              <hr />
            </div>
            <div className="info_detail_accounts">
              <div className="basic_profile_left">Linked Accounts</div>
              <div className="basic_profile_right">Add</div>
              <hr />
            </div>
            <div className="info_detail_skills">
              <div className="basic_profile_left">Skills</div>
              <div className="basic_profile_right">Add</div>
              <hr />
            </div>
            <div className="info_detail_education">
              <div className="basic_profile_left">Education</div>
              <div className="basic_profile_right">Add</div>
              <hr />
            </div>
            <div className="info_detail_certification">
              <div className="basic_profile_left">Certification</div>
              <div className="basic_profile_right">Add</div>
              <hr />
            </div>
          </div>
        </div>
        <div className="col-8"></div>
      </div>

      {/* MODAL */}
      <div className="detail_info_modal">
        <div
          className="modal fade"
          id="detail_info_modal"
          tabIndex={-1}
          // data-bs-backdrop="static"
          // data-bs-keyboard="false"
          role="dialog"
          aria-labelledby="modalTitleId"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modalTitleId">
                  User Information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <form onSubmit={frm.handleSubmit}>
                <div className="modal-body">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={frm.values.name}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.touched.name && frm.errors.name && (
                    <p className="f-error" id="namelError">
                      {frm.errors.name}
                    </p>
                  )}
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    // aria-describedby="emailHelp"
                    name="email"
                    // disabled
                    value={frm.values.email}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.touched.email && frm.errors.email && (
                    <p className="f-error" id="emailError">
                      {frm.errors.email}
                    </p>
                  )}
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    name="password"
                    value={frm.values.password}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.touched.password && frm.errors.password && (
                    <p className="f-error" id="passwordError">
                      {frm.errors.password}
                    </p>
                  )}
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={frm.values.phone}
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  {frm.touched.phone && frm.errors.phone && (
                    <p className="f-error" id="phoneError">
                      {frm.errors.phone}
                    </p>
                  )}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
