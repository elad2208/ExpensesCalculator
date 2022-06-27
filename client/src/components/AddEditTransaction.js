import React, { useState } from 'react'
import { Form, Modal, Input, Select, message } from 'antd';
import axios from 'axios'


function AddEditTransaction({
    setShowAddEditTransactionModal,
    showAddEditTransactionModal,
    selectedItemForEdit,
    setSelectedItemForEdit,
    getTransactions,

}) {

    const [loading, setLoading] = useState(false)
    const onFinish = async (values) => {
        try {
            const user = JSON.parse(localStorage.getItem("ExpensesCalculator"))
            setLoading(true)
            if (selectedItemForEdit) {
                await axios.post("/api/transactions/edit-transaction", {payload: {...values, userid: user._id,},  transactionId: selectedItemForEdit._id });
                getTransactions();
                message.success("Transaction Updated Successfully");
            } else {
                await axios.post("/api/transactions/add-transaction", { ...values, userid: user._id });
                getTransactions();
                message.success("Transaction Add Successfully");
            }
            setShowAddEditTransactionModal(false);
            setSelectedItemForEdit(null);
            setLoading(false)
        } catch (error) {
            message.error("Registraion error")
            setLoading(true)
        }
    };

    return (
        <Modal title={selectedItemForEdit ? "Edit Expense" : "Add Expense"} visible={showAddEditTransactionModal} onCancel={() => setShowAddEditTransactionModal(false)} footer={false}>

            <Form layout='vertical' className='transaction-form' onFinish={onFinish} initialValues={selectedItemForEdit}>

                <Form.Item label="Amount" name='amount'>
                    <Input type='text' />
                </Form.Item>

                <Form.Item label="Type" name='type'>
                    <Select>
                        <Select.Option value='income'>Income</Select.Option>
                        <Select.Option value='expense'>Expense</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Category" name='category'>
                    <Select>
                        <Select.Option value='salary'>Salary</Select.Option>
                        <Select.Option value='general'>General</Select.Option>
                        <Select.Option value='medical'>Medical</Select.Option>
                        <Select.Option value='housing'>Housing</Select.Option>
                        <Select.Option value='shopping'>Shopping</Select.Option>
                        <Select.Option value='education'>Education</Select.Option>
                        <Select.Option value='resturants'>Resturants</Select.Option>
                        <Select.Option value='market'>Market</Select.Option>
                        <Select.Option value='bills'>Bills</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Date" name='date'>
                    <Input type='date' />
                </Form.Item>

                <Form.Item label="Reference" name='reference'>
                    <Input type='text' />
                </Form.Item>

                <Form.Item label="Description" name='description'>
                    <Input type='text' />
                </Form.Item>

                <div className='d-flex justift-content-end'>
                    <button className='primary' type='submit'>SAVE</button>
                </div>
            </Form>
        </Modal>
    )
}

export default AddEditTransaction