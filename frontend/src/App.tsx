import { Layout, Space, Menu } from "antd";
import type { MenuProps } from "antd";
import { PieChartOutlined, TableOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Header, Content, Sider, Footer } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

// TODO: add router links
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
        type
    } as MenuItem;
}

const menuItems: MenuItem[] = [
    createMenuItem("Monthly Table", "monthly-table", <TableOutlined />),
    createMenuItem("Charts", "charts", <PieChartOutlined />),
    createMenuItem("Manage Labels", "labels", <UnorderedListOutlined />)
];
function App() {
    const [collapsed, setCollapsed] = useState(false);
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
                            // TODO: read from router
                            defaultSelectedKeys={["monthly-table"]}
                            items={menuItems}
                        ></Menu>
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280
                            }}
                        >
                            Content component placeholder
                        </Content>
                        <Footer style={{ textAlign: "center", color: "white" }}>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
