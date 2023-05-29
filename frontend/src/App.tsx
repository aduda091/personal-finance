import { Layout, Col, Row, Space } from "antd";
import { useState } from "react";

const { Header, Content, Sider, Footer } = Layout;

function App() {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <>
            <Layout>
                <Header style={{ color: "white" }}>
                    <Row justify="space-between">
                        <Col span={18}>
                            <Space>
                                <h1>Personal Finance App</h1>
                            </Space>
                        </Col>
                        <Col
                            span={6}
                            style={{
                                textAlign: "right"
                            }}
                        >
                            <Space size="large" align="end">
                                Period: Date picker goes here? Or in content?
                            </Space>
                        </Col>
                    </Row>
                </Header>
                <Layout>
                    <Sider
                        collapsible
                        collapsed={collapsed}
                        onCollapse={value => setCollapsed(value)}
                        style={{ color: "white", height: "100vh" }}
                    >
                        Sidebar
                    </Sider>
                    <Layout style={{ padding: "0 24px 24px" }}>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280
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
