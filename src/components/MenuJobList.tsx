import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import {Box} from '@mui/material'
import { DispatchType, RootState } from "../redux/configStore";
import {
  DsNhomChiTietLoai,
  getMenuJobApi,
  MenuJob,
} from "../redux/reducers/jobReducer";
import MenuJobTypeList from "./MenuJobTypeList";

type Props = {
  // loaiCongViec: MenuJob
};

const MenuJobList = (props: Props) => {
  const { arrJobTypeMenu } = useSelector(
    (state: RootState) => state.jobReducer
  );

  const dispatch: DispatchType = useDispatch();

  console.log(arrJobTypeMenu);

  useEffect(() => {
    const actionAsync = getMenuJobApi();
    dispatch(actionAsync);
  }, []);

  const [activeItem, setActiveItem] = useState<number | null>(null);

  return (
    <Box
      className="container-fluid"
      borderTop={"1px solid #ccc"}
      borderBottom={"1px solid #ccc"}
    >
      <ul className=" nav justify-content-center  ">
        {arrJobTypeMenu.map((job: any, index: number) => {
          return (
            <li
              onMouseEnter={() => setActiveItem(index)}
              onMouseLeave={() => setActiveItem(null)}
              className="nav-item"
              key={index}
            >
              <MenuJobTypeList show={index === activeItem} job={job} />
            </li>
          );
        })}
      </ul>
    </Box>
  );
};

export default MenuJobList;
