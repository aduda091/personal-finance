import { gql, useQuery } from "@apollo/client";
import { useState, useMemo } from "react";
import { PeriodsQuery } from "../gql/graphql";
import { Spin, Tabs, TabsProps } from "antd";
import IncomeTable from "../components/IncomeTable/IncomeTable";

const PERIODS_QUERY = gql`
    query Periods {
        periods {
            id
            month
            year
        }
    }
`;

const MonthlyTablePage = () => {
    const { data: periodsData, loading: periodsLoading, error: periodsError } = useQuery<PeriodsQuery>(PERIODS_QUERY);

    // todo: read from url param or try to select current month
    const [activePeriodId, setActivePeriodId] = useState<string>("");
    const handlePeriodChange = (value: string) => {
        setActivePeriodId(value);
    };

    const tabItems = useMemo<TabsProps["items"]>(() => {
        return (
            periodsData?.periods?.map(({ id, month, year }) => ({
                key: String(id),
                label: `${month}. ${year}`,
                closable: false,
                children: <IncomeTable activePeriodId={String(id)} />
            })) ?? []
        );
    }, [periodsData]);

    const onAddTabClick = () => {
        // todo: add new period
    };
    return (
        <div>
            <h2>Monthly table page</h2>
            {periodsLoading && <Spin size="large" spinning={periodsLoading} />}

            {!periodsLoading && periodsError ? (
                "Error loading periods"
            ) : (
                <Tabs
                    items={tabItems}
                    activeKey={activePeriodId}
                    onChange={handlePeriodChange}
                    size="large"
                    type="editable-card"
                    onEdit={onAddTabClick}
                />
            )}
            {!activePeriodId && <div style={{ fontSize: "1.2rem" }}>Please select a period</div>}
        </div>
    );
};

export default MonthlyTablePage;
