import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
import {
  BrowserRouter,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter, Navigate
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import Detail from './pages/detail/Detail';
import JobCategory from './pages/jobCategory/JobCategory';
import JobList from './pages/jobList/JobList';
import ResponsiveItem from './HOC/ResponsiveItem';
import AdminTemplate from './templates/Admin/AdminTemplate';
import User from './pages/AdminPages/User/User';
import Service from './pages/AdminPages/Service/Service';
import AddUser from './pages/AdminPages/User/AddUser';
import UpdateUser from './pages/AdminPages/User/UpdateUser';
import UpdateService from './pages/AdminPages/Service/UpdateService';
import AddService from './pages/AdminPages/Service/AddService';
import Work from './pages/AdminPages/work/Work';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Chuyển hướng trang ở file không phải component
export const history: any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile/:id" element={<Profile />} />
          {/* <Route path='profile' */}
          <Route path="register" element={<Register />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="category">
            <Route path=":maLoaiCongviec" element={<JobCategory />} />
          </Route>
          <Route path="list" element={<JobList />} />

          <Route path="*" element={<Navigate to="" />} />

        </Route>
        <Route path='/admin' element={<ResponsiveItem Component={AdminTemplate} />}>
          <Route index element={<ResponsiveItem Component={User} />} />
          <Route path='/admin/user' element={<ResponsiveItem Component={User} />} />
          <Route path='/admin/user/adduser' element={<ResponsiveItem Component={AddUser}/>}>{""}</Route>
          <Route path='/admin/user/edit/:id' element={<ResponsiveItem Component={UpdateUser}/>}>{""}</Route>
          <Route path='/admin/service' element={<ResponsiveItem Component={Service} />} />
          <Route path='/admin/service/addservice' element={<ResponsiveItem Component={AddService}/>}>{""}</Route>
          <Route path='/admin/service/edit/:id' element={<ResponsiveItem Component={UpdateService}/>}>{""}</Route>
          <Route path='/admin/work' element={<ResponsiveItem Component={Work} />} />
        </Route>

      </Routes>



    </HistoryRouter>
  </Provider>
);
