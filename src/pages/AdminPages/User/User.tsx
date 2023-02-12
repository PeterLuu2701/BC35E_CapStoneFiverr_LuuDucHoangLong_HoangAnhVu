import React,{Fragment, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import { Table,Input,Button } from 'antd';
import {SearchOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useSelector,useDispatch } from 'react-redux';
import { DispatchType, RootState } from '../../../redux/configStore';
import {getadmintApi,deleteUseApi,searchUserApi, editUserApi } from '../../../redux/reducers/adminReducer'
import { history } from '../../../index';
import { Content } from 'antd/lib/layout/layout';

type Props = {}
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
export default function User({}: Props) {
  const {arrAdmin}=useSelector((state: RootState) => state.adminReducer);
  const dispatch: DispatchType = useDispatch();

  useEffect(() => {

    //call api = action thunk
    const actionApi = getadmintApi();
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
      title: 'name ',
      dataIndex: 'name',
      width:'15%'
    },
    {
      title: 'email ',
      dataIndex: 'email',
      width:'15%'
    },
    {
      title: 'birthday',
      dataIndex: 'birthday',
      width:'15%'
    },
    {
      title: 'role',
      dataIndex: 'role',
      width:'20%'
    },
    {
      title: '',
      dataIndex: '',
      render:(text,object:any)=>{return <Fragment>
        <NavLink key={1} className=' mx-2 fs-3' to={`/admin/user/edit/${object.id}`} style={{color:'blue'}} onClick={() => {
                dispatch(editUserApi(object.id))}}><EditOutlined></EditOutlined></NavLink>
        <Button key={2} className='fs-3' onClick={() => {
                dispatch(deleteUseApi(object.id))
              }} style={{color:'red',border:'none'}}><DeleteOutlined></DeleteOutlined>
        </Button>
      </Fragment>
    },
    width:'20%'
  }

  ];
  
  const data: DataType[] = arrAdmin;
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const { Search } = Input;
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searchUserApi(value));
    }
    // else if(value=== ''){
    //   dispatch(getadmintApi());
    // }
  };
  const onChange1 = (value:any) => {
    if (!value.target.value) {
      dispatch(getadmintApi());
    }
  };

  return (
      <Content>
        <Button className='my-2 btn btn-warning text-white'onClick={()=>{
          history.push('/admin/user/adduser')
        }} size="large">Add Admin</Button>
        <Search
          placeholder="input search text"
          enterButton={<SearchOutlined />}
          size="large"
          onSearch={onSearch}
          onChange={onChange1}
          />
          <Table columns={columns} dataSource={data} onChange={onChange} />
      </Content>
                
  )
}
