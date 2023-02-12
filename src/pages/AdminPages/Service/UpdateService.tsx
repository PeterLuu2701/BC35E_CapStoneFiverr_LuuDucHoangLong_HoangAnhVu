// // tsrafce

import { DatePicker, Form, Input, InputNumber, Radio } from 'antd';
import { useFormik } from 'formik';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DispatchType, RootState } from '../../../redux/configStore';
import { editServiceApi, updateServiceApi } from '../../../redux/reducers/serviceReducer';

type Props = {}
type SizeType = Parameters<typeof Form>[0]['size'];


const UpdateService = (props: Props) => {

  const dispatch: DispatchType = useDispatch();
  const params = useParams();
  const {editService} = useSelector((state:RootState)=>state.serviceReducer);
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
    }
    useEffect(() => {
      const { id } = params;
      dispatch(editServiceApi(id));
    }, []);
    
    const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
        id: editService.id,
        maCongViec: editService.maCongViec,
        maNguoiThue: editService.maNguoiThue,
        ngayThue: editService.ngayThue
      },
      onSubmit: (values: any) => {
        // const id = params.id as string;
        // const data={id,value:{...values}}
        console.log(values);
        dispatch(updateServiceApi(values))
      }
    },
    )
    const handleChangeDatePicker = (value : any) => {
      let ngayThue = moment(value);
      formik.setFieldValue('ngayThue', ngayThue)
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
      <Form.Item label="ID" rules={[{ required: true, message: 'Please input your maNguoiThue number!' },]}>
        <Input name='id' onChange={formik.handleChange} value={editService.id} />

      </Form.Item>
      <Form.Item label="maCongViec" rules={[{ required: true, message: 'Please input your maCongViec number!' },]}>
        <InputNumber name='maCongViec' onChange={formik.handleChange} value={formik.values.maCongViec} />
      </Form.Item>
      <Form.Item label="maNguoiThue" rules={[{ required: true, message: 'Please input your maNguoiThue number!' },]}>
        <InputNumber name='maNguoiThue' onChange={formik.handleChange} value={formik.values.maNguoiThue} />
      </Form.Item>

      <Form.Item label="ngayThue">
        <DatePicker name='ngayThue' format={'DD/MM/YYYY'} onChange={handleChangeDatePicker} value={(formik.values.ngayThue)}/>
      </Form.Item>
      <Form.Item label=":">
        <button type='submit' className='btn btn-success'>Update Service</button>
      </Form.Item>
    </Form>
  )
}

export default UpdateService

