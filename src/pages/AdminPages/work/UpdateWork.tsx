import { Form, Input, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { updateServiceApi } from '../../../redux/reducers/serviceReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];
const UpdateWork = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  const {editWork} = useSelector((state: RootState) => state.workReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
  setComponentSize(size);
  }
  useEffect(()=>{
      // let{id}=props.match.params;
      // dispatch(editService(id))
  },[])

  const formik=useFormik({
    enableReinitialize:true,
    initialValues:{
      id:editWork.id,
      tenCongViec:editWork.tenCongViec,
      giaTien:editWork.giaTien,
      moTa:editWork.moTa,
      // gender:editWork.gender,
      // role:editWork.role,
      ngayThue:editWork.ngayThue,
      saoCongViec:editWork.saoCongViec
      },
      onSubmit: (values:any) => {
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
    <Form.Item label="ID"rules={[{ required: true, message: 'Please input your giaTien number!' },]}>
      <Input name='id' onChange={formik.handleChange} value={editWork.id}  />
      
    </Form.Item>
    <Form.Item label="tenCongViec"rules={[{ required: true, message: 'Please input your tenCongViec number!' },]}>
      <Input name='tenCongViec'onChange={formik.handleChange} value={formik.values.tenCongViec} />
    </Form.Item>
    <Form.Item label="giaTien" rules={[{ required: true, message: 'Please input your giaTien number!' },]}>
      <Input name='giaTien' onChange={formik.handleChange}value={formik.values.giaTien} />
    </Form.Item>
    <Form.Item label="moTa" rules={[{ required: true, message: 'Please input your moTa number!' },]}>
      <Input name='moTa' onChange={formik.handleChange}value={formik.values.moTa} />
    </Form.Item>
    <Form.Item label="saoCongViec" rules={[{ required: true, message: 'Please input your saoCongViec number!' },]}>
      <Input name='saoCongViec' onChange={formik.handleChange}value={formik.values.saoCongViec} />
    </Form.Item>
    {/* <Form.Item label="ngayThue">
      <DatePicker name='ngayThue' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={moment(formik.values.ngayThue)}/>
    </Form.Item> */}
    <Form.Item label=":">
      <button type='submit'className='btn btn-success'>Update Service</button>
    </Form.Item>
  </Form>
  )
}

export default UpdateWork