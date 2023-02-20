import { DatePicker, Form, Input, Radio } from 'antd';
import { useFormik } from 'formik';
import moment, { isMoment } from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { editUserApi, updatUsereApi } from '../../../redux/reducers/adminReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];


const UpdateUser = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  const {editUser} = useSelector((state: RootState) => state.adminReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  useEffect(() => {
    const { id } = params;
    dispatch(editUserApi(''));
  }, []);

  
  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:editUser.id,
      email:editUser.email,
      name:editUser.name,
      phone:editUser.phone,
      gender:editUser.gender,
      role:editUser.role,
      birthday:editUser.birthday
      },
      onSubmit: (values:any) => {
        const id = params.id as string;
        const data={id,value:{...values}}
        dispatch(updatUsereApi(data))
      }
  },
)
const handleChangeDatePicker=(value:any)=>{
  let ngayThue=moment(value);
  formik.setFieldValue('ngayThue',ngayThue)
}

return (
  <Form
    onSubmitCapture={formik.handleSubmit}
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    initialValues={{ size: componentSize }}
    onValuesChange={onFormLayoutChange}
    size={componentSize as SizeType}
  >
    <Form.Item label="Form Size" name="size">
      <Radio.Group>
        <Radio.Button value="small">Small</Radio.Button>
        <Radio.Button value="default">Default</Radio.Button>
        <Radio.Button value="large">Large</Radio.Button>
      </Radio.Group>
    </Form.Item>
    <Form.Item label="ID"rules={[{ required: true, message: 'Please input your id number!' },]}>
      <Input name='id' onChange={formik.handleChange} value={editUser.id}  />
    </Form.Item>
    <Form.Item label="name"rules={[{ required: true, message: 'Please input your name number!' },]}>
      <Input name='name'onChange={formik.handleChange} value={formik.values.name} />
    </Form.Item>
    <Form.Item label="email"rules={[{ required: true, message: 'Please input your email number!' },]}>
      <Input name='email'onChange={formik.handleChange} value={formik.values.email} />
    </Form.Item>
    <Form.Item label="phone" rules={[{ required: true, message: 'Please input your phone number!' },]}>
      <Input name='phone' onChange={formik.handleChange}value={formik.values.phone} />
    </Form.Item>
    
    {/* <Form.Item label="Birthday">
      <DatePicker name='birthday' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={(formik.values.birthday)}/>
    </Form.Item> */}
    <Form.Item label="Gender">
        <Radio.Group name='gender'onChange={formik.handleChange}value={formik.values.gender}  >
          <Radio value={true}> Male </Radio>
          <Radio value={false}> Female</Radio>
        </Radio.Group>
    </Form.Item>
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update User</button>
    </Form.Item>
  </Form>
);
}

export default UpdateUser