import { Form, Input, InputNumber, Radio, Select } from 'antd'
import { useFormik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { DispatchType } from '../../../redux/configStore';
import { addWorkApi } from '../../../redux/reducers/workReducer';

type Props = {}
const { Option, OptGroup } = Select
type SizeType = Parameters<typeof Form>[0]['size'];


const AddWork = (props: Props) => {
  const dispatch: DispatchType = useDispatch();
  const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  }

  const formik=useFormik({
    initialValues:{
      id:'',
      tenCongViec:'',
      giaTien:'',
      danhGia:'',
      hoanThanh:false,
      },
      onSubmit: (values:any) => {
          console.log(values);
          dispatch(addWorkApi(values))
      }
  },
)


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
    <Form.Item label="Ten cong viec">
      <Input name='tenCongViec'onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="giaTien">
      <InputNumber name='giaTien' onChange={formik.handleChange}/>
    </Form.Item>
    <Form.Item label="Tien do">
        <Radio.Group name='hoanThanh'onChange={formik.handleChange}>
          <Radio value={true}> Hoan thanh</Radio>
          <Radio value={false}> Chua hoan thanh </Radio>
        </Radio.Group> 
    </Form.Item>
    <Form.Item label="Danh gia">
      <InputNumber name='danhGia'onChange={formik.handleChange} />
    </Form.Item>
    <Form.Item label="Phone">
      <InputNumber name='phone'/>
    </Form.Item>
    <Form.Item label="">
      <button type='submit'className='btn btn-success'>Add Work</button>
    </Form.Item>
  </Form>
  )
}

export default AddWork