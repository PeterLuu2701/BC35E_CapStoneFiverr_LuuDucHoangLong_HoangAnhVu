import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import {
  DsNhomChiTietLoai,
  MenuJob,
  getCategoryApi,
  DsChiTietLoai,
} from "../../redux/reducers/jobReducer";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/configStore";
import banner from "../../assets/img/category_banner.jpg"

type Props = {
};

const JobCategory = (props: Props) => {

    const { arrCategoryJob } = useSelector(
      (state: RootState) => state.jobReducer
    );

    console.log("arrCategoryJob: ", arrCategoryJob);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   const actionAsync: any = getCategoryApi(arrCategoryJob?.maLoaiCongviec!);
    //   dispatch(actionAsync);
    // }, []);

    
    
  return (
    <div className="category">
      <div className="category_banner">
        <img src={banner} alt="banner" />
      </div>
      <div className="container category_card">
        <div className="row row-cols-1 row-cols-md-3">
          {arrCategoryJob?.map((category: DsNhomChiTietLoai, i: number) => {
            return (
              <div className="col">
                <div className="card mb-3">
                  <img
                    className="card-img-top"
                    src={category.hinhAnh}
                    alt="Title"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{category.tenNhom}</h4>
                    {category.dsChiTietLoai.map((jobTitle: DsChiTietLoai) => {
                      return (
                        <ul>
                          <li>{jobTitle.tenChiTiet}</li>
                        </ul>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
