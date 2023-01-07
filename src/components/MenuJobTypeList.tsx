import Button from "@mui/material/Button";
import { DsNhomChiTietLoai } from "../redux/reducers/jobReducer";
import { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
type Props = {
  job: any;
  show: boolean;
};

const MenuJobTypeList = (props: Props) => {
  const { job, show } = props;

  return (
    <Box position="relative">
      <Button style={{ color: "#74767e" }}>{job.tenLoaiCongViec}</Button>
      <Box
        sx={{ border: "1px solid #ccc", padding: "5%", borderTop: "none" }}
        display="flex"
        position="absolute"
        hidden={!show}
      >
        {job.dsNhomChiTietLoai.map((el: DsNhomChiTietLoai, i: number) => {
          return (
            <Box width="max-content" mr={3}>
              <Box fontWeight={"600"}>{el.tenNhom}</Box>
              {el.dsChiTietLoai.map((el: any) => {
                return <Box>{el.tenChiTiet}</Box>;
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default MenuJobTypeList;
