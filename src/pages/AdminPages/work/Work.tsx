import { Button, Input, Table } from 'antd'
import { ColumnsType, TableProps } from 'antd/es/table'
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DispatchType, RootState } from '../../../redux/configStore'
import { deleteWorkApi, editWorkApi, getWorkApi, searchWorkApi } from '../../../redux/reducers/workReducer'
import {SearchOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons'
import { history } from '../../../index'
type Props = {}
interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}
const Work = (props: Props) => {
  const {arrWork} = useSelector((state:RootState)=>state.workReducer);
  const dispatch:DispatchType = useDispatch();

  useEffect(()=>{
    const actionApi = getWorkApi();
    dispatch(actionApi)
  })
const colums: ColumnsType<DataType> = [
  {
    title: 'id',
    dataIndex:'id',
    sortDirections:['descend','ascend'],
    // sortOrder:'descend'
    width:'15%'
  },
  {
    title: 'tenCongViec ',
    dataIndex: 'tenCongViec',
    width:'20%'
  },
  {
    title: 'giaTien ',
    dataIndex: 'giaTien',
    width:'20%'
  },
  {
    title: 'danhGia',
    dataIndex: 'danhGia',
    width:'20%'
  },
  {
    title: '',
    dataIndex: '',
    render:(text,object:any)=>{return <Fragment>
      <NavLink key={1} className=' mx-2 fs-3' to={`/admin/work/edit/${object.id}`} style={{color:'blue'}} onClick={() => {
              dispatch(editWorkApi(object.id))}}><EditOutlined></EditOutlined></NavLink>
      <Button key={2} className='fs-3' onClick={() => {
              dispatch(deleteWorkApi(object.id))
              console.log('id',object.id)
            }} style={{color:'red',border:'none'}}><DeleteOutlined></DeleteOutlined>
      </Button>
    </Fragment>
  },
  width:'25%'
}
]
const data: DataType[] = arrWork;
  
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const onSearch = (value: string) => {
    if (value) {
      dispatch(searchWorkApi(value));
    }
  };
  const onChange1 = (value:any) => {
    if (!value.target.value) {
      dispatch(getWorkApi());
    }
  };
  const { Search } = Input;

  return (
    <div className="card-body  container">
      <Button className='mt-5'onClick={()=>{
        history.push('/admin/service/addwork')
        }}>Them cong viec</Button>
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

export default Work