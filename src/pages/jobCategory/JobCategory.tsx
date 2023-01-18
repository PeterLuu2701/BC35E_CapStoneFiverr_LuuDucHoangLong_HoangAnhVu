import React from "react";
import { useSelector } from "react-redux";
import { DsNhomChiTietLoai, MenuJob } from "../../redux/reducers/jobReducer";

type Props = {
  job: MenuJob;
  show: boolean;
};

const JobCategory = (props: Props) => {

  const { job, show } = props;

  return (
    <div className="category">
      <div className="category_banner">
        <img src="./img/category_banner.jpg" alt="" />
      </div>
      <div className="container category_card">
        <div className="row">
          <div className="col-4">
            {job.dsNhomChiTietLoai.map((category: DsNhomChiTietLoai, i: number) => {
              return (
                <div className="card">
                  <img
                    className="card-img-top"
                    src={category.hinhAnh}
                    alt="Title"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{category.tenNhom}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
