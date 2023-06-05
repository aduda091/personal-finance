import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Popconfirm, Space, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useMemo, useState } from "react";
import { Period, PeriodsQuery } from "../../gql/graphql";
import { AlignType } from "rc-table/lib/interface";
import PeriodsModal from "../PeriodsModal/PeriodsModal";

const PERIODS_QUERY = gql`
    query Periods {
        periods {
            id
            month
            year
        }
    }
`;

const DELETE_PERIOD_MUTATION = gql`
    mutation DeletePeriod($deletePeriodId: Int!) {
        deletePeriod(id: $deletePeriodId) {
            id
        }
    }
`;

const PeriodsTable = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editObject, setEditObject] = useState<Period | null>(null);

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

    const { data, loading, error } = useQuery<PeriodsQuery>(PERIODS_QUERY);

    const dataSource = useMemo(
        () => data?.periods?.map(({ id, month, year }) => ({ key: id, id, month, year })) ?? [],
        [data]
    );

    const [deletePeriod, { loading: deleteLoading }] = useMutation(DELETE_PERIOD_MUTATION);

    const deletePeriodHandler = (id: number) => {
        deletePeriod({ variables: { deletePeriodId: id }, refetchQueries: ["Periods"] }).then(() => {
            notification.info({ message: "Period deleted" });
        });
    };

    const columns = [
        {
            key: "month",
            title: "Month",
            dataIndex: "month",
        },

        {
            key: "year",
            title: "Year",
            dataIndex: "year",
        },
        {
            key: "actions",
            title: "",
            align: "right" as AlignType,
            render: (_: unknown, record: Period) => {
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
                                title="Delete the period"
                                description="Are you sure you want to delete this period?"
                                onConfirm={() => deletePeriodHandler(record.id)}
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
            },
        },
    ];

    if (error) {
        return <h3>Error fetching periods</h3>;
    }
    return (
        <div>
            <h3>
                Periods <Button type="primary" icon={<PlusOutlined />} onClick={() => showModal()} />
            </h3>
            <Table columns={columns} dataSource={dataSource} loading={loading || deleteLoading} pagination={false} />
            <PeriodsModal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} editObject={editObject} />
        </div>
    );
};

export default PeriodsTable;
