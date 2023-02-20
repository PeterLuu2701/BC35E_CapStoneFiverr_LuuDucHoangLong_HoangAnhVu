import { DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { editServiceApi, updateServiceApi } from '../../../redux/reducers/typeWorkReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];


const UpdateTypeWork = (props: Props) => {

  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  const {editTypeWork} = useSelector((state: RootState) => state.typeWorkReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  useEffect(() => {
    const { id } = params;
    dispatch(editServiceApi('id'));
  }, []);


  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:editTypeWork.id,
      tenNhom:editTypeWork.tenNhom,
      maLoaiCongviec:editTypeWork.maLoaiCongviec,
      },
      onSubmit: (values:any) => {
        // const id = params.id as string;
        // const data={id,value:{...values}}
        console.log(values);
          dispatch(updateServiceApi(values))
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
    <Form.Item label="ID"rules={[{ required: true, message: 'Please input your maLoaiCongviec number!' },]}>
      <Input name='id' onChange={formik.handleChange} value={editTypeWork.id}  />
      
    </Form.Item>
    <Form.Item label="tenNhom"rules={[{ required: true, message: 'Please input your tenNhom number!' },]}>
      <InputNumber name='tenNhom'onChange={formik.handleChange} value={formik.values.tenNhom} />
    </Form.Item>
    <Form.Item label="maLoaiCongviec" rules={[{ required: true, message: 'Please input your maLoaiCongviec number!' },]}>
      <InputNumber name='maLoaiCongviec' onChange={formik.handleChange}value={formik.values.maLoaiCongviec} />
    </Form.Item>
    
    {/* <Form.Item label="ngayThue">
      <DatePicker name='ngayThue' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={moment(formik.values.ngayThue)}/>
    </Form.Item> */}
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update TypeWork</button>
    </Form.Item>
  </Form>
  )
}

export default UpdateTypeWork