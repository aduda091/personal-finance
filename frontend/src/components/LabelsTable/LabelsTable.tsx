import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Popconfirm, Space, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { Label, LabelsQuery } from "../../gql/graphql";
import LabelModal from "../LabelsModal/LabelsModal";

const LABEL_GROUPS_QUERY = gql`
    query Labels {
        labels {
            id
            label
            isIncome
        }
    }
`;

const DELETE_LABEL_MUTATION = gql`
    mutation DeleteLabel($deleteLabelId: Int!) {
        deleteLabel(id: $deleteLabelId) {
            id
        }
    }
`;

const LabelsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editObject, setEditObject] = useState<Label | null>(null);

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

    const { data, loading, error } = useQuery<LabelsQuery>(LABEL_GROUPS_QUERY);

    const dataSource = useMemo(
        () => data?.labels?.map(({ id, label, isIncome }) => ({ key: id, id, label, isIncome })) ?? [],
        [data]
    );

    const [deleteLabel, { loading: deleteLoading }] = useMutation(DELETE_LABEL_MUTATION);

    const deleteLabelHandler = (id: number) => {
        deleteLabel({ variables: { deleteLabelId: id }, refetchQueries: ["Labels"] }).then(() => {
            notification.info({ message: "Label group deleted" });
        });
    };

    const columns = [
        {
            key: "label",
            title: "Label",
            dataIndex: "label"
        },
        {
            key: "isIncome",
            title: "Is income?",
            dataIndex: "isIncome",
            render: (isIncome: boolean) => (isIncome ? "Yes" : "No")
        },
        {
            key: "actions",
            title: "Actions",
            render: (_: unknown, record: Label) => {
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
                                title="Delete the label"
                                description="Are you sure you want to delete this label?"
                                onConfirm={() => deleteLabelHandler(record.id)}
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
        return <h3>Error fetching labels</h3>;
    }
    return (
        <div>
            <h3>
                Labels <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()} />
            </h3>
            <Table columns={columns} dataSource={dataSource} loading={loading || deleteLoading} pagination={false} />
            <LabelModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} editObject={editObject} />
        </div>
    );
};

export default LabelsTable;
