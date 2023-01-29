import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getProfileApi, UserProfile } from "../../redux/reducers/userReducer";
import { useFormik } from "formik";
import { UserLogin } from "../login/Login";

type Props = {};

const Profile = (props: Props) => {
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  const dispatch = useDispatch<DispatchType>();
  console.log(userLogin);

  useEffect(() => {
    dispatch(getProfileApi());
  }, []);

  const frm = useFormik<UserLogin>({
    initialValues: {
      accessToken: userLogin?.accessToken || "",
      email: userLogin?.email || "",
      name: userLogin?. || "",
      id: userLogin?.id || "",
      password: userLogin?.password || "",
      phone: userLogin?.phone || "",
      birthday: userLogin?.birthday || "",
      gender: userLogin?.gender || "true",
      role: userLogin?.role || "",
      skill: userLogin?.skill || "",
      certification: userLogin?.certification || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
      dispatch(getProfileApi());
    },
  });

  return (
    <div className="profile">
      <div className="container">
        <div className="col-4">
          <div className="basic_profile">
            <img src="https://i.pravatar.cc/300" alt="" />
            <h3>{userLogin?.user.name}</h3>
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
              <form>
                <div className="modal-body">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    // aria-describedby="emailHelp"
                    name="name"
                    value={frm.values.name}
                  />
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    // aria-describedby="emailHelp"
                    name="email"
                    disabled
                    value={frm.values.email}
                  />
                  <label className="form-label">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="password"
                    // aria-describedby="emailHelp"
                    name="password"
                    value={frm.values.password}
                  />
                  <label className="form-label">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    // aria-describedby="emailHelp"
                    name="phone"
                    value={frm.values.phone}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
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
