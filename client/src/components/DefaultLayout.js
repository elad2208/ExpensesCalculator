import React from 'react'
import '../resources/default-layout.css'
import { Dropdown, Menu } from 'antd';
import {useNavigate} from 'react-router-dom';


function DefaultLayout(props) {
    const user = JSON.parse(localStorage.getItem('ExpensesCalculator'))
    const navigate = useNavigate()
    const menu = (
        <Menu
        items={[
            {
              label: (
                <li onClick={()=>{
                  localStorage.removeItem('ExpensesCalculator')
                  navigate("/login");
                }}>Logout</li>
              ),
            }
          ]}
        />
    );

    return (
        <div className='layout'>

            <div className='header d-flex justify-content-between align-items-center'>
                <div>
                    <h1 className='logo'>Expenses Calculator</h1>
                </div>
                <div>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <button className='primary'>{user.first_name}</button>
                    </Dropdown>
                </div>
            </div>

            <div className='content'>
                {props.children}
            </div>

        </div>
    )
}

export default DefaultLayout