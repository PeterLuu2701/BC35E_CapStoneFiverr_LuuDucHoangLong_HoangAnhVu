import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,

} from 'antd';
import type { RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { DispatchType, RootState } from '../../../redux/configStore';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { addAdminApi } from '../../../redux/reducers/adminReducer';

type Props = {}
const { Option, OptGroup } = Select;
type SizeType = Parameters<typeof Form>[0]['size'];

export default function AddUser({}: Props) {
  const dispatch: DispatchType = useDispatch();
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  const formik=useFormik({
    initialValues:{
      id:'',
      email:'',
      name:'',
      birthday:'',
      gender:false,
      phone:'',
      role:''
      },
      onSubmit: (values:any) => {
          console.log(values);
          dispatch(addAdminApi(values))
      }
  },
)
const handleChangeDatePicker=(value:any)=>{
  let birthday=moment(value).format('DD/MM/YYYY');
  formik.setFieldValue('birthday',birthday)
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
    <Form.Item label="ID">
      <Input name='id' onChange={formik.handleChange} />
    </Form.Item>
    <Form.Item label="Name">
      <Input name='name'onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="Email">
      <Input name='email' type="email" onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="Role">
        <Radio.Group name='role'onChange={formik.handleChange}>
          <Radio value="ADMIN"> admin</Radio>
          <Radio value="USER"> user </Radio>
        </Radio.Group> 
    </Form.Item>
    <Form.Item label="Birthday">
      <DatePicker name='birthday' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}/>
    </Form.Item>
    <Form.Item label="Gender">
        <Radio.Group name='gender'onChange={formik.handleChange}>
          <Radio value={true}> Male</Radio>
          <Radio value={false}> Female </Radio>
        </Radio.Group> 
    </Form.Item>
    <Form.Item label="Phone">
      <InputNumber name='phone'/>
    </Form.Item>
    <Form.Item label="Nghiep vu">
      <button type='submit'className='btn btn-success'>Add user</button>
    </Form.Item>
  </Form>
 
);
}