import Table, { ColumnsType, TableProps } from 'antd/es/table';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { deletTypeWorkApi, getTypeWorkApi, searchTypeWorkApi, updateServiceApi } from '../../../redux/reducers/typeWorkReducer';
import {SearchOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import { Button, Input } from 'antd';
import { history } from '../../../index';


type Props = {}
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
const TypeWork = (props: Props) => {

  const {arrTypeWork}=useSelector((state: RootState) => state.typeWorkReducer);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {

    //call api = action thunk
    const actionApi = getTypeWorkApi();
    dispatch(actionApi);
  }, []);

  const columns: ColumnsType<DataType> = [
    {
      title: 'id',
      dataIndex:'id',
      sortDirections:['descend','ascend'],
      width:'15%'
    },
    {
      title: 'tenNhom ',
      dataIndex: 'tenNhom',
      width:'20%'
    },
    {
      title: 'maLoaiCongviec ',
      dataIndex: 'maLoaiCongviec',
      width:'20%'
    },
    {
      title: 'ngayThue',
      dataIndex: 'ngayThue',
      width:'20%'
    },
    {
      title: '',
      dataIndex: '',
      render:(text,object:any)=>{return <Fragment>
        <NavLink key={1} className=' mx-2 fs-3' to={`/admin/service/edit/${object.id}`} style={{color:'blue'}} onClick={() => {
                dispatch(updateServiceApi(object.id))}}><EditOutlined></EditOutlined></NavLink>
        <Button key={2} className='fs-3' onClick={() => {
                dispatch(deletTypeWorkApi(object.id))
                console.log('id',object.id)
              }} style={{color:'red',border:'none'}}><DeleteOutlined></DeleteOutlined>
        </Button>
      </Fragment>
    },
    width:'25%'
  }

  ];
  
  const data: DataType[] = arrTypeWork;
  const { Search } = Input;
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searchTypeWorkApi(value));
    }
  };
  const onChange1 = (value:any) => {
    if (!value.target.value) {
      dispatch(getTypeWorkApi());
    }
  };
 
  return (
    <div className="card-body  container">
        <Button className='mt-5'onClick={()=>{
          history.push('/admin/service/addservice')
        }}>Them cong viec</Button>
        <Search
          placeholder="input search text"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          onChange={onChange1}
          />
        <Table columns={columns} dataSource={data} onChange={onChange} />
      </div>
  )
}

export default TypeWork