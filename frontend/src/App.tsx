import { Layout } from "antd";
import { useState } from "react";

const { Header, Content, Sider, Footer } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout>
                <Header style={{ display: "flex", alignItems: "center", color: "white" }}>Header</Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)} style={{ color: "white" , height: "100vh"}}>
                        Sidebar
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                        <Footer style={{ textAlign: "center", color: "white" }}>Footer</Footer>
                    </Layout>
                </Layout>
            </Layout>
        </>
    );
}

export default App;
