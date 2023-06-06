import { gql, useQuery } from "@apollo/client";
import { useState, useMemo } from "react";
import { Period, PeriodsQuery } from "../gql/graphql";
import { Select, SelectProps } from "antd";
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
    const [activePeriod, setActivePeriod] = useState<string>("");
    const handlePeriodChange = (value: string) => {
        setActivePeriod(value);
    };

    // todo: possibly use optGroups to group by year
    const dropdownData = useMemo<SelectProps["options"]>(
        () =>
            periodsData?.periods?.map(({ id, month, year }) => ({ key: id, value: id, label: `${month}. ${year}` })) ??
            [],
        [periodsData]
    );
    return (
        <div>
            <h2>Monthly table page</h2>
            {periodsError ? (
                "Error loading periods"
            ) : (
                <Select
                    placeholder="Select a period"
                    onChange={handlePeriodChange}
                    options={dropdownData}
                    loading={periodsLoading}
                    bordered
                    style={{ width: "300px", display: "block", marginLeft: "auto" }}
                />
            )}
        </div>
    );
};

export default MonthlyTablePage;
