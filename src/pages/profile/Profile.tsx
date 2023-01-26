import React from "react";

type Props = {};

const Profile = (props: Props) => {
  return (
    <div className="profile">
      <div className="container">
        <div className="col-4">
          <div className="basic_profile">
            <img src="https://i.pravatar.cc/300" alt="" />
            <h3>Long</h3>
            <i className="fa-solid fa-pen-to-square"></i>
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
    </div>
  );
};

export default Profile;
