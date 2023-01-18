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
import Admin from './pages/admin/AdminPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Chuyển hướng trang ở file không phải component
export const history:any = createBrowserHistory();

root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="register" element={<Register />} />
          <Route path="detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="category">
            <Route path=":maLoaiCongviec" element={<JobCategory />} />
          </Route>
          <Route path="list" element={<JobList />} />
          <Route path="admin" element={<Admin />} />
          <Route path="*" element={<Navigate to="" />} />
        </Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);
