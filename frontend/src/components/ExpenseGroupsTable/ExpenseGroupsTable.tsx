import { gql, useQuery } from "@apollo/client";
import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { ExpenseGroup, ExpenseGroupsQuery } from "../../gql/graphql";

const EXPENSE_GROUPS_QUERY = gql`
    query ExpenseGroups {
        expenseGroups {
            id
            name
        }
    }
`;

const columns = [
    {
        key: "name",
        title: "Name",
        dataIndex: "name"
    },
    {
        key: "actions",
        title: "Actions",
        render: (_: unknown, record: ExpenseGroup) => {
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
    const { data, loading, error } = useQuery<ExpenseGroupsQuery>(EXPENSE_GROUPS_QUERY);

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
