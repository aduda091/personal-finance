import ExpenseGroupsTable from "../components/ExpenseGroupsTable/ExpenseGroupsTable";
import LabelsTable from "../components/LabelsTable/LabelsTable";

const LabelsPage = () => {
    return (
        <div>
            <h2>Labels CRUD</h2>
            <LabelsTable />
            <ExpenseGroupsTable />
        </div>
    );
};

export default LabelsPage;
