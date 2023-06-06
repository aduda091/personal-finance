import { gql, useMutation, useQuery } from "@apollo/client";
import { Button, Popconfirm, Space, Table, notification } from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { FC, useMemo, useState } from "react";
import { IncomeByPeriodQuery } from "../../gql/graphql";
import { AlignType } from "rc-table/lib/interface";
import PeriodsModal from "../PeriodsModal/PeriodsModal";

const INCOME_QUERY = gql`
    query IncomeByPeriod($incomeByPeriodId: ID!) {
        incomeByPeriod(id: $incomeByPeriodId) {
            entries {
                id
                value
                label {
                    label
                }
            }
            sum
        }
    }
`;

export interface IncomeTable {
    activePeriodId?: string;
}

const IncomeTable: FC<IncomeTable> = props => {
    const { data, loading, error } = useQuery<IncomeByPeriodQuery>(INCOME_QUERY, {
        variables: { incomeByPeriodId: props.activePeriodId },
        skip: !props.activePeriodId,
    });

    const dataSource = useMemo(
        () =>
            data?.incomeByPeriod?.entries?.map(({ id, label, value }) => ({
                key: id,
                id,
                label: label.label,
                value: value,
            })) ?? [],
        [data]
    );

    const columns = [
        {
            key: "label",
            title: "Label",
            dataIndex: "label",
        },

        {
            key: "value",
            title: "Value",
            dataIndex: "value",
        },
    ];

    if (error) {
        return <h3>Error fetching income</h3>;
    }
    return (
        <div>
            <h3>Income</h3>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading || !props.activePeriodId}
                pagination={false}
            />
        </div>
    );
};

export default IncomeTable;
