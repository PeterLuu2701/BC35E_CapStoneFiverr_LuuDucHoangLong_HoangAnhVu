import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
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
      <Footer/>
    </>
  );
}

export default HomeTemplate