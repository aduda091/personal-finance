import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Popconfirm, Space, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { ExpenseGroup, ExpenseGroupsQuery } from "../../gql/graphql";
import ExpenseGroupsModal from "../ExpenseGroupsModal/ExpenseGroupsModal";

const EXPENSE_GROUPS_QUERY = gql`
    query ExpenseGroups {
        expenseGroups {
            id
            name
        }
    }
`;

const DELETE_EXPENSE_GROUP_MUTATION = gql`
    mutation DeleteExpenseGroup($deleteExpenseGroupId: Int!) {
        deleteExpenseGroup(id: $deleteExpenseGroupId) {
            id
        }
    }
`;

const ExpenseGroupsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editObject, setEditObject] = useState<ExpenseGroup | null>(null);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setEditObject(null);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setEditObject(null);
    };

    const { data, loading, error } = useQuery<ExpenseGroupsQuery>(EXPENSE_GROUPS_QUERY);

    const dataSource = useMemo(() => data?.expenseGroups?.map(({ id, name }) => ({ key: id, id, name })) ?? [], [data]);

    const [deleteExpenseGroup, { loading: deleteLoading }] = useMutation(DELETE_EXPENSE_GROUP_MUTATION);

    const deleteExpenseGroupHandler = (id: number) => {
        deleteExpenseGroup({ variables: { deleteExpenseGroupId: id }, refetchQueries: ["ExpenseGroups"] }).then(() => {
            notification.info({ message: "Expense group deleted" });
        });
    };

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
                                onClick={() => {
                                    setEditObject(record);
                                    showModal();
                                }}
                            >
                                Edit
                            </Button>{" "}
                            <Popconfirm
                                title="Delete the expense group"
                                description="Are you sure you want to delete this expense group?"
                                onConfirm={() => deleteExpenseGroupHandler(record.id)}
                                okText="Yes"
                                cancelText="Cancel"
                            >
                                <Button type="primary" danger icon={<DeleteOutlined />}>
                                    Delete
                                </Button>
                            </Popconfirm>
                        </Space>
                    </>
                );
            }
        }
    ];

    if (error) {
        return <h3>Error fetching expense groups</h3>;
    }
    return (
        <div>
            <h3>
                Expense groups <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()} />
            </h3>
            <Table columns={columns} dataSource={dataSource} loading={loading || deleteLoading} pagination={false} />
            <ExpenseGroupsModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} editObject={editObject} />
        </div>
    );
};

export default ExpenseGroupsTable;
