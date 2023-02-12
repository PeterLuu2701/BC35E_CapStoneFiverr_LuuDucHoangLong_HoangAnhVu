// tsraf ce

import { DatePicker, Form, Input, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { TypeOf } from 'yup'
import { DispatchType } from '../../../redux/configStore';
import { addServiceApi } from '../../../redux/reducers/serviceReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];

const AddService = (props: Props) => {
    const dispatch: DispatchType = useDispatch();
    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
    const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
    }
    const formik = useFormik({
        initialValues:{
            id:'',
            maCongViec:'',
            maNguoiThue:'',
            ngayThue:'',
            hoanThanh:false
            },
            onSubmit: (values:any) => {
                console.log(values);
                dispatch(addServiceApi(values))
            }
    })
    const handleChangeDatePicker=(value:any)=>{
        let ngayThue=moment(value).format('DD/MM/YYYY');
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
    <Form.Item label="ID">
      <Input name='id' onChange={formik.handleChange} />
    </Form.Item>
    <Form.Item label="maCongViec">
      <Input name='maCongViec'onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="maNguoiThue">
      <Input name='maNguoiThue' onChange={formik.handleChange}/>
    </Form.Item>
    
    <Form.Item label="Ngay Thue">
      <DatePicker name='ngayThue' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker}/>
    </Form.Item>
    <Form.Item label="Cong viec">
        <Radio.Group name='hoanThanh'onChange={formik.handleChange}>
          <Radio value={true}> Hoan thanh </Radio>
          <Radio value={false}> Chua hoan thanh </Radio>
        </Radio.Group>
    </Form.Item>
    <Form.Item label="Nghiep vu">
      <button type='submit'className='btn btn-success'>add Service</button>
    </Form.Item>
  </Form>
    )
}

export default AddService
