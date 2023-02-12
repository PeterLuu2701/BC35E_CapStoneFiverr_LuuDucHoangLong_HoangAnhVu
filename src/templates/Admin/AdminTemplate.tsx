// tsrafce

import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from '../../components/AdminHeader/AdminHeader'

type Props = {}

const AdminTemplate = (props: Props) => {
  return (
    <>
      <AdminHeader />
      {/* <Outlet/> */}
    </>
  )
}

export default AdminTemplate
