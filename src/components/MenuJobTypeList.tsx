import Button from "@mui/material/Button";
import { DsChiTietLoai, DsNhomChiTietLoai, getCategoryApi, MenuJob } from "../redux/reducers/jobReducer";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

type Props = {
  job: MenuJob;
  show: boolean;
};

const MenuJobTypeList = (props: Props) => {
  const { job, show } = props;

  return (
    <Box position="relative" className="menu_job_type_list">
      <NavLink to={`/category/${job?.id}`}>
        <Button style={{ color: "#74767e" }}>{job.tenLoaiCongViec}</Button>
      </NavLink>

      {job.dsNhomChiTietLoai.length > 0 && (
        <Box
          sx={{
            border: "1px solid #ccc",
            padding: "5%",
            borderTop: "none",
            backgroundColor: "#fff",
          }}
          display="flex"
          position="absolute"
          hidden={!show}
          zIndex="100"
        >
          {job.dsNhomChiTietLoai.map((el: DsNhomChiTietLoai, i: number) => {
            return (
              <Box width="max-content" mr={3}>
                <Box fontWeight={"600"}>{el.tenNhom}</Box>
                {el.dsChiTietLoai.map((el: DsChiTietLoai) => {
                  return <Box>{el.tenChiTiet}</Box>;
                })}
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default MenuJobTypeList;
