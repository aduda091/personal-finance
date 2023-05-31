import { Layout, Space, Menu } from "antd";
import type { MenuProps } from "antd";
import { PieChartOutlined, TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { RouteKeys, RoutePaths } from "./constants/routes";

const { Header, Content, Sider, Footer } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function createMenuItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const menuItems: MenuItem[] = [
    createMenuItem(<Link to={RoutePaths.MONTHLY}>Monthly Table</Link>, RouteKeys.MONTHLY, <TableOutlined />),
    createMenuItem(<Link to={RoutePaths.CHARTS}>Charts</Link>, RouteKeys.CHARTS, <PieChartOutlined />),
    createMenuItem(<Link to={RoutePaths.LABELS}>Manage Labels</Link>, RouteKeys.LABELS, <UnorderedListOutlined />),
];
function App() {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();

    const defaultSelectedKeys = useMemo(() => {
        const activePathKeyIndex = Object.values(RoutePaths).indexOf(pathname as RoutePaths);
        return Object.values(RouteKeys)[activePathKeyIndex] ?? RouteKeys.MONTHLY;
    }, [pathname]);

    return (
        <>
            <Layout>
                <Header style={{ color: "white" }}>
                    <Space>
                        <h1>Personal Finance App</h1>
                    </Space>
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={value => setCollapsed(value)}
                        style={{ color: "white", height: "100vh" }}
                    >
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={[defaultSelectedKeys]}
                            items={menuItems}
                        ></Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            <Outlet />
                        </Content>
                        <Footer style={{ textAlign: "center", color: "white" }}>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
