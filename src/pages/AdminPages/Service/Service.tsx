// tsraface

import { ColumnsType, TableProps } from 'antd/es/table';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { deleteServiceApi, editServiceApi, getServiceApi, searcServiceApi } from '../../../redux/reducers/serviceReducer';
import { Table, Input, Button } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { history } from '../../../index';

type Props = {}

interface DataType {
    key: React.Key;
    name: string;
    chinese: number;
    math: number;
    english: number;
}


const Service = (props: Props) => {

    const { arrService } = useSelector((state: RootState) => state.serviceReducer)

    const dispatch: DispatchType = useDispatch()

    useEffect(() => {
        const actionApi = getServiceApi()
        dispatch(actionApi)
    }, [])

const colums: ColumnsType<DataType> = [
    {
        title: "id",
        dataIndex: "id",
        sortDirections: ["descend", "ascend"],
        width: "15%",
      },
      {
        title: "maCongViec ",
        dataIndex: "maCongViec",
        width: "20%",
      },
      {
        title: "maNguoiThue ",
        dataIndex: "maNguoiThue",
        width: "20%",
      },
      {
        title: "ngayThue",
        dataIndex: "ngayThue",
        width: "20%",
      },
      {
        title: "",
        dataIndex: "",
        render: (text, object: any) => {
          return (
            <Fragment>
              <NavLink
                key={1}
                className=" mx-2 fs-3"
                to={`/admin/service/edit/${object.id}`}
                style={{ color: "blue" }}
                onClick={() => {
                  dispatch(editServiceApi(object.id));
                }}
              >
                <EditOutlined></EditOutlined>
              </NavLink>
              <Button
                key={2}
                className="fs-3"
                onClick={() => {
                  dispatch(deleteServiceApi(object.id));
                  console.log("id", object.id);
                }}
                style={{ color: "red", border: "none" }}
              >
                <DeleteOutlined></DeleteOutlined>
              </Button>
            </Fragment>
          );
        },
        width: "25%",
      },
];

const data: DataType[] = arrService;

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  const { Search } = Input;
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searcServiceApi(value));
    }
  };
  const onChange1 = (value: any) => {
    if (!value.target.value) {
      dispatch(getServiceApi());
    }
  };
    return (
        <div className="card-body  container">
        <Button
          className="mt-5"
          onClick={() => {
            history.push("/admin/service/addservice");
          }}
        >
          Add Service
        </Button>
        <Search
          placeholder="input search text"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          onChange={onChange1}
        />
        <Table columns={colums} dataSource={data} onChange={onChange} />
      </div>
    )
}

export default Service