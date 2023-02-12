import React, { useState } from 'react'
import {
    EnvironmentOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    InfoCircleOutlined,
    KeyOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Avatar, Dropdown } from 'antd';
import { Outlet, useNavigate, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { DispatchType, RootState } from '../../redux/configStore';
import { history } from '../../index';
import { USER_LOGIN, eraseCookie, eraseStore, ACCESS_TOKEN } from '../../utils/config';

type Props = {
    children?: JSX.Element
}

const { Header, Sider } = Layout;


const MenuSider = [
    {
        key: '/admin/user',
        icon: <UserOutlined />,
        label: 'User',
    },
    {
        key: '/admin/service',
        icon: <EnvironmentOutlined />,
        label: 'Service',
    },
    {
        key: '/admin/work',
        icon: <InfoCircleOutlined />,
        label: 'Work',
    },
    {
        key: '/admin/typeWork',
        icon: <KeyOutlined />,
        label: 'TypeWork',
    },
];

const MenuDropdown = [
    // {
    //   key: '1',
    //   label: <a href='/'>Cập nhật thông tin</a>,
    //   className: 'nav-link',
    // },
    {
        key: '1',
        label: <button onClick={() => {
            eraseStore('');
            eraseCookie(ACCESS_TOKEN);
        }}>Login
        </button>,
        className: 'nav-link',
    },
];


const AdminHeader = (props: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const { userLogin } = useSelector((state: RootState) => state.userReducer);
    return (
        <>
            <Layout>
                <Sider trigger={true} collapsible collapsed={collapsed} width={230}>
                    {collapsed ? (
                        <div className='logo' />
                    ) : (
                        <div className='brand'>Dashboard</div>
                    )}
                    <Menu
                        theme='dark'
                        mode='inline'
                        defaultSelectedKeys={['management-user']}
                        onSelect={(e) => {
                            navigate(e.key)
                        }}
                        items={MenuSider}
                    />
                </Sider>
                <Layout className='site-layout'>
                    <Header
                        className='site-header site-layout-background'
                        style={{ padding: 0 }}
                    >
                        {React.createElement(
                            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                            {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            }
                        )}
                        <div className='userLogin'>
                            <span className='label-user'>ADMIN</span>
                            <Dropdown
                                overlay={<Menu items={MenuDropdown} />}
                                className=""
                                placement='topRight'
                                trigger={['click']}
                                overlayClassName='site-header__userLogin-dropdown'
                            >
                                <Avatar
                                    src='https://joeschmoe.io/api/v1/random'
                                    size={{ xs: 24, sm: 32, md: 40 }}
                                    icon={<UserOutlined />}
                                    className='avatar'
                                ></Avatar>
                            </Dropdown>
                        </div>
                    </Header>
                    <Outlet />
                </Layout>
            </Layout>
        </>
    )
}

export default AdminHeader