import { gql, useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMemo } from "react";

const EXPENSE_GROUPS_QUERY = gql`
    query ExpenseGroups {
        expenseGroups {
            id
            name
        }
    }
`;

// TODO: auto-generate from graphql
interface ExpenseGroup {
    key?: string;
    id: string;
    name: string;
}

const columns: ColumnsType<ExpenseGroup> = [
    {
        key: "id",
        title: "Index",
        dataIndex: "id"
    },
    {
        key: "name",
        title: "Name",
        dataIndex: "name"
    },
    {
        key: "actions",
        title: "Actions",
        render: (_, record) => {
            return (
                <>
                    <Space>
                        <Button
                            type="primary"
                            icon={<EditOutlined />}
                            onClick={() => console.log(`Editing ${record.name}`)}
                        >
                            Edit
                        </Button>{" "}
                        <Button
                            type="primary"
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => console.log(`Deleting ${record.name}`)}
                        >
                            Delete
                        </Button>
                    </Space>
                </>
            );
        }
    }
];

const ExpenseGroupsTable = () => {
    const { data, loading, error } = useQuery<{ expenseGroups: ExpenseGroup[] }>(EXPENSE_GROUPS_QUERY);

    const dataSource = useMemo(() => data?.expenseGroups?.map(({ id, name }) => ({ key: id, id, name })) ?? [], [data]);

    if (error) {
        return <h3>Error fetching expense groups</h3>;
    }
    return (
        <div>
            <h3>Expense groups</h3>
            <Table columns={columns} dataSource={dataSource} loading={loading} pagination={false} />
        </div>
    );
};

export default ExpenseGroupsTable;
