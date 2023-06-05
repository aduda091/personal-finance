import ExpenseGroupsTable from "../components/ExpenseGroupsTable/ExpenseGroupsTable";
import LabelsTable from "../components/LabelsTable/LabelsTable";
import PeriodsTable from "../components/PeriodsTable/PeriodsTable";

const LabelsPage = () => {
    return (
        <div>
            <h2>Labels and periods CRUD</h2>
            <PeriodsTable />
            <LabelsTable />
            <ExpenseGroupsTable />
        </div>
    );
};

export default LabelsPage;
