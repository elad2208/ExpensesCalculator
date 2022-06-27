import React, { useEffect, useState } from 'react'
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Input from "antd/lib/input/Input";
import '../resources/authentication.css'
import axios from "axios";
import Spinner from '../components/Spinner';

function Register() {
    //controls and summon the loading spinner
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    //while registration process finished(user clicks the button, preforms the const operation)
    const onFinish = async (values) => {
        try {
            setLoading(true)
            await axios.post("/api/users/register", values);
            message.success("Registration Successfull");
            setLoading(false)
        } catch (error) {
            message.error("Registraion error")
            setLoading(true)
        }
    };

    useEffect(()=>{
       if(localStorage.getItem('ExpensesCalculator')){
        navigate('/')
       }
    })

    return (
        <div className="register">
            {loading && <Spinner />}
            <div className="row justify-content-center align-items-center w-100 v-100">

                <div className='col-md-5'>
                    <div className='lottie'>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_l5o1uey5.json" background="transparent" speed="3" loop autoplay></lottie-player>
                    </div>
                </div>
                <div className='col-md-4'>
                    <Form layout='vertical' onFinish={onFinish}>
                        <h1>Expenses Calculator Registration Page</h1>
                        <hr />
                        <Form.Item label='ID' name='id'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='First Name' name='first_name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Last Name' name='last_name'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Birthday' name='birthday'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Martial Status' name='martial_status'>
                            <Input />
                        </Form.Item>
                        <Form.Item label='Password' name='password'>
                            <Input type="password" />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/login">Already Registered , Click Here To Login</Link>
                            <button className="primary" type="submit">REGISTER</button>
                        </div>

                    </Form>
                </div>

            </div>

        </div>
    );
}

export default Register