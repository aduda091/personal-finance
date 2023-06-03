import { Modal, ModalFuncProps, Form, Input, Button, notification } from "antd";
import { FC } from "react";
import {
    CreateExpenseGroupMutation,
    CreateExpenseGroupMutationVariables,
    UpdateExpenseGroupMutation,
    UpdateExpenseGroupMutationVariables,
    ExpenseGroup
} from "../../gql/graphql";
import { gql, useMutation } from "@apollo/client";

const CREATE_EXPENSE_GROUP_MUTATION = gql`
    mutation CreateExpenseGroup($createExpenseGroupInput: CreateExpenseGroupInput) {
        createExpenseGroup(createExpenseGroupInput: $createExpenseGroupInput) {
            id
            name
        }
    }
`;

const UPDATE_EXPENSE_GROUP_MUTATION = gql`
    mutation UpdateExpenseGroup($updateExpenseGroupInput: UpdateExpenseGroupInput) {
        updateExpenseGroup(updateExpenseGroupInput: $updateExpenseGroupInput) {
            id
            name
        }
    }
`;

export interface ExpenseGroupsModalProps extends ModalFuncProps {
    editObject?: Omit<ExpenseGroup, "__typename"> | null;
}

const ExpenseGroupsModal: FC<ExpenseGroupsModalProps> = props => {
    const { editObject, ...rest } = props;

    const [createExpenseGroup, { loading: createLoading }] = useMutation<
        CreateExpenseGroupMutation,
        CreateExpenseGroupMutationVariables
    >(CREATE_EXPENSE_GROUP_MUTATION);
    const [updateExpenseGroup, { loading: updateLoading }] = useMutation<
        UpdateExpenseGroupMutation,
        UpdateExpenseGroupMutationVariables
    >(UPDATE_EXPENSE_GROUP_MUTATION);

    const onSubmit = (data: Partial<ExpenseGroup>) => {
        if (!data.name) return;
        if (editObject) {
            updateExpenseGroup({
                variables: {
                    updateExpenseGroupInput: {
                        id: editObject.id,
                        name: data.name
                    }
                }
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Expense group updated" });
            });
        } else {
            createExpenseGroup({
                variables: {
                    createExpenseGroupInput: {
                        name: data.name
                    }
                },
                refetchQueries: ["ExpenseGroups"]
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Expense group created" });
            });
        }
    };

    return (
        <Modal title={`${editObject ? "Edit" : "Add"} Expense group`} {...rest} destroyOnClose footer={null}>
            <Form
                initialValues={{
                    id: editObject?.id ?? "",
                    name: editObject?.name ?? ""
                }}
                onFinish={onSubmit}
                autoComplete="off"
                preserve={false}
            >
                <Form.Item label="Name" name="name" rules={[{ required: true, message: "Name is required!" }]}>
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 20, span: 4 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={createLoading || updateLoading}
                        disabled={createLoading || updateLoading}
                    >
                        {editObject ? "Update" : "Add"}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ExpenseGroupsModal;
