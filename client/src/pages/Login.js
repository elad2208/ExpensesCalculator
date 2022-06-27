import React, { useEffect, useState } from 'react'
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Input from "antd/lib/input/Input";
import '../resources/authentication.css'
import axios from 'axios'
import Spinner from '../components/Spinner'

function Login() {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();
    const onFinish = async (values) => {
        try {
            setLoading(true)
            const response = await axios.post('/api/users/login', values);
            localStorage.setItem("ExpensesCalculator", JSON.stringify({ ...response.data, password: '' }));
            setLoading(false)
            message.success('Login successful');
            navigate('/');
        } catch (error) {
            setLoading(false)
            message.error('Login Failed');
        }
    };

    useEffect(()=>{
       if(localStorage.getItem('ExpensesCalculator')){
        navigate('/')
       }
    })

    return (
        <div className='register'>
            {loading && <Spinner />}
            <div className="row justify-content-center align-items-center w-100 v-100">
                <div className='col-md-4'>
                    <Form layout='vertical' onFinish={onFinish}>
                        <h1>Expenses Calculator Login Page</h1>
                        <hr />

                        <Form.Item label='Email' name='email'>
                            <Input />
                        </Form.Item>

                        <Form.Item label='Password' name='password'>
                            <Input type="password" />
                        </Form.Item>

                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/Register">Not Registered? , Click Here To Register</Link>
                            <button className="primary" type="submit">LOGIN</button>
                        </div>

                    </Form>
                </div>
                <div className='col-md-5'>
                    <div className='lottie'>
                        <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_l5o1uey5.json" background="transparent" speed="3" loop autoplay></lottie-player>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login