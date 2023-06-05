import { Modal, ModalFuncProps, Form, Button, notification, InputNumber } from "antd";
import { FC } from "react";
import {
    CreatePeriodMutation,
    CreatePeriodMutationVariables,
    UpdatePeriodMutation,
    UpdatePeriodMutationVariables,
    Period,
} from "../../gql/graphql";
import { gql, useMutation } from "@apollo/client";

const CREATE_PERIOD_MUTATION = gql`
    mutation CreatePeriod($createPeriodInput: CreatePeriodInput) {
        createPeriod(createPeriodInput: $createPeriodInput) {
            id
            month
            year
        }
    }
`;

const UPDATE_PERIOD_MUTATION = gql`
    mutation UpdatePeriod($updatePeriodInput: UpdatePeriodInput) {
        updatePeriod(updatePeriodInput: $updatePeriodInput) {
            id
            month
            year
        }
    }
`;

export interface PeriodsModalProps extends ModalFuncProps {
    editObject?: Omit<Period, "__typename"> | null;
}

const PeriodsModal: FC<PeriodsModalProps> = props => {
    const { editObject, ...rest } = props;

    const [createPeriod, { loading: createLoading }] = useMutation<CreatePeriodMutation, CreatePeriodMutationVariables>(
        CREATE_PERIOD_MUTATION
    );
    const [updatePeriod, { loading: updateLoading }] = useMutation<UpdatePeriodMutation, UpdatePeriodMutationVariables>(
        UPDATE_PERIOD_MUTATION
    );

    const onSubmit = (data: Partial<Period>) => {
        if (!data.year || !data.month) return;
        if (editObject) {
            updatePeriod({
                variables: {
                    updatePeriodInput: {
                        id: editObject.id,
                        month: data.month,
                        year: data.year,
                    },
                },
                refetchQueries: ["Periods"],
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Period updated" });
            });
        } else {
            createPeriod({
                variables: {
                    createPeriodInput: {
                        month: data.month,
                        year: data.year,
                    },
                },
                refetchQueries: ["Periods"],
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Period created" });
            });
        }
    };

    return (
        <Modal title={`${editObject ? "Edit" : "Add"} Period`} {...rest} destroyOnClose footer={null}>
            <Form
                initialValues={{
                    id: editObject?.id ?? "",
                    month: editObject?.month ?? new Date().getMonth() + 1,
                    year: editObject?.year ?? new Date().getFullYear(),
                }}
                onFinish={onSubmit}
                autoComplete="off"
                preserve={false}
            >
                <Form.Item label="Month" name="month" rules={[{ required: true, message: "Month is required!" }]}>
                    <InputNumber min={1} max={12} />
                </Form.Item>
                <Form.Item label="Year" name="year" rules={[{ required: true, message: "Year is required!" }]}>
                    <InputNumber min={2020} />
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

export default PeriodsModal;
