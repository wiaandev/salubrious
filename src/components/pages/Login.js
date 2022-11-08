import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import LoginImg from '../assets/login.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Login.module.css';

export default function Login() {

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password : '',
    })

    const emailVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, email: value});
        // Here you will validate that it is not empty
    }

    const passwordVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, password: value});
        // Here you will validate that it is not empty 
    }

    const handleSubmit = (e) => {

        console.log(inputs);

        axios.post('http://localhost:8888/sal_db/userLogin.php', inputs)
        .then(function(response){
            console.log(response);

            if(response.data === true){
                sessionStorage.setItem('activeUser', inputs.email); //set our session storage to the email
                navigate('/Appointments'); 
            } else {
                console.log("Not working!");
            }
        });
    }

  return (
    <div className={styles.loginBg}>
        <div className={styles.loginCon}>
            <div className={styles.loginImg}>
                <img src={LoginImg} alt="Missing Image"/>
            </div>

            <div className={styles.formCon}>

                <img className={styles.loginLogo} src={Logo} width={100}/>

                <div className={styles.heading}>
                    <h2>LOGIN</h2>
                </div> 

                <label for="email">Email</label>
                <Input className='form-input' name='fname' type='email' onChange={emailVal} />


                <label for="password">Password</label>
                <Input className='form-input' name='fname' type='password' onChange={passwordVal} passIcon="hide-pass"/>


                <Button name="LOGIN" className="signup-login-btn" onClick={handleSubmit}/>
                <div className='btn-group'>
                    <p>New to Salubrious?</p>
                    <Button onClick={() => navigate("/Register")} name="REGISTER HERE" className="tersiary-btn"/>
                </div>


            </div>
        </div>
    </div>
  )
}
