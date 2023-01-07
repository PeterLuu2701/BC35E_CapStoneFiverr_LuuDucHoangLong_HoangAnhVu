import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import MenuJobList from '../../components/MenuJobList'
import { MenuJob } from '../../redux/reducers/jobReducer'

type Props = {
    // loaiCongViec: MenuJob
}

const HomeTemplate = (props: Props) => {
  return (
    <>
      <Header />
      <MenuJobList/>
      <section className="content" style={{ minHeight: "65vh" }}>
        <Outlet />
      </section>
      <div className="bg-dark text-light">Footer</div>
    </>
  );
}

export default HomeTemplate