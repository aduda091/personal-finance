import { Modal, ModalFuncProps, Form, Input, Button, notification, Checkbox } from "antd";
import { FC } from "react";
import {
    CreateLabelMutation,
    CreateLabelMutationVariables,
    UpdateLabelMutation,
    UpdateLabelMutationVariables,
    Label
} from "../../gql/graphql";
import { gql, useMutation } from "@apollo/client";

const CREATE_LABEL_MUTATION = gql`
    mutation CreateLabel($createLabelInput: CreateLabelInput) {
        createLabel(createLabelInput: $createLabelInput) {
            id
            label
            isIncome
        }
    }
`;

const UPDATE_LABEL_MUTATION = gql`
    mutation UpdateLabel($updateLabelInput: UpdateLabelInput) {
        updateLabel(updateLabelInput: $updateLabelInput) {
            id
            label
            isIncome
        }
    }
`;

export interface LabelsModalProps extends ModalFuncProps {
    editObject?: Omit<Label, "__typename"> | null;
}

const LabelsModal: FC<LabelsModalProps> = props => {
    const { editObject, ...rest } = props;

    const [createLabel, { loading: createLoading }] = useMutation<CreateLabelMutation, CreateLabelMutationVariables>(
        CREATE_LABEL_MUTATION
    );
    const [updateLabel, { loading: updateLoading }] = useMutation<UpdateLabelMutation, UpdateLabelMutationVariables>(
        UPDATE_LABEL_MUTATION
    );

    const onSubmit = (data: Partial<Label>) => {
        if (!data.label) return;
        if (editObject) {
            updateLabel({
                variables: {
                    updateLabelInput: {
                        id: editObject.id,
                        label: data.label,
                        isIncome: data.isIncome
                    }
                },
                refetchQueries: ["Labels"]
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Label updated" });
            });
        } else {
            createLabel({
                variables: {
                    createLabelInput: {
                        label: data.label,
                        isIncome: Boolean(data.isIncome)
                    }
                },
                refetchQueries: ["Labels"]
            }).then(() => {
                props.onOk?.();
                notification.success({ message: "Label created" });
            });
        }
    };

    return (
        <Modal title={`${editObject ? "Edit" : "Add"} Label`} {...rest} destroyOnClose footer={null}>
            <Form
                initialValues={{
                    id: editObject?.id ?? "",
                    label: editObject?.label ?? "",
                    isIncome: editObject?.isIncome ?? false
                }}
                onFinish={onSubmit}
                autoComplete="off"
                preserve={false}
            >
                <Form.Item label="Label" name="label" rules={[{ required: true, message: "Label is required!" }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="isIncome" valuePropName="checked">
                    <Checkbox>Is income?</Checkbox>
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

export default LabelsModal;
