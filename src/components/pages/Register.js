import React, {useState} from 'react';
import Logo from '../assets/logo.svg';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import Dropdown from '../UI Components/Dropdown';
import ValidateLeft from '../UI Components/ValidateLeft';
import ValidateRight from '../UI Components/ValidateRight';

export default function Register() {

    const navigate = useNavigate();

    const genders = ['Please Select...','M', 'F'];

    const [inputs, setInputs] = useState({
        image: '',
        name: '',
        surname: '',
        age:  '',
        gender: '',
        contact: '', 
        email: '',
        password: '',
        passwordCon: ''

    });

    const [nameError, setNameError] = useState();
    const [lastError, setLastError] = useState();
    const [genderError, setGenderError] = useState();
    const [emailError, setEmailError] = useState();
    const [contactError, setContactError] = useState();
    const [passwordError, setPasswordError] = useState();
    const [passwordConError, setPasswordConError] = useState();
    const [dateError, setDateError] = useState();
    const [ageError, setAgeError] = useState()

    const [emailAvail, setEmailAvail] = useState();
    const [userAvail, setUserAvail] = useState();

    const [emailIcon, setEmailIcon] = useState();
    const [userIcon, setUserIcon] = useState();

    const imageVal = (e) => {           
        let file = e.target.files[0];
        let reader = new FileReader();

        reader.onloadend = function() {
            console.log(reader.result);
            let imgFile = reader.result;

            setInputs({...inputs, image: imgFile});

            let image = new Image();
            image.src = reader.result;
            document.getElementById('profileimg').appendChild(image);
        
        }
        reader.readAsDataURL(file);
    }

    const firstVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, name: value});
        if(inputs.name.length < 2){setNameError("Wrong");}else return setNameError();
    }

    const lastVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, surname: value});
        if(inputs.surname.length < 2){setLastError("Wrong");}else return setLastError();
        console.log(inputs); 
    }

    const genderVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, gender: value});
        if(inputs.gender !== ''){setGenderError();}
        console.log(inputs); 
    }

    const emailVal = (e) => {
        const mailcodex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const value = e.target.value;
        setInputs({...inputs, email: value});
        if(inputs.email !== ''){
            setEmailError();
        } 
        if(!value.match(mailcodex)){
            setEmailError(<ValidateLeft message="This email is incorrect"/>);
        }    
        console.log(inputs);
    }

    const validateEmail = () => {
        axios.post('http://localhost:8888/sal_db/authenticateEmail.php', inputs)
        .then(function(response){
         console.log(response);
         if(response.data === "Available"){
            // setEmailIcon('insert valid icon');
            setEmailAvail();
         } else if(response.data === "Not Available") {
            setEmailAvail(<ValidateLeft message="Email is not available"/>);
            // setEmailIcon("insert error img icon");
         } else if(response.data === "") {
            setEmailIcon();
            setEmailAvail();
            setEmailError();
         }
        });
    }

    const contactVal = (e) => {
        const contCodex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        const value = e.target.value;
        setInputs({...inputs, contact: value});
        if(inputs.contact != ''){setContactError();} 

        if(!value.match(contCodex)){
            setContactError("Not a Valid Phone Number" );
        } 
    }

    const passwordVal = (e) => {
        const passCodex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(\W|_)).{5,}$/ ;
        const value = e.target.value;
        setInputs({...inputs, password: value});
        if(inputs.password != ''){setPasswordError();} 

        if(!value.match(passCodex)){
            setPasswordError("Password must include stuff" );
        } 
    }

    const passwordConVal = (e) => {
        const value = e.target.value;
        setInputs({...inputs, passwordCon: value});
        if(inputs.password === value){setPasswordConError()}else{
            setPasswordConError("Your Passwords Dont Match" );
        }  
    }

    const dateVal = e => {
        const value = e.target.value;
        setInputs({...inputs, age: value});
        if(inputs.age == new Date()){
            setDateError("Invalid Date of Birth!");
        }
        console.log(inputs);
    }

    const handleSubmit = (e) => {
        // e.preventDefault();
        console.log(inputs);

        if(inputs.name === ''){
            setNameError(<ValidateLeft message="Enter A Name"/>);
        } else {
            setNameError();
        }

        if(inputs.surname === ''){
            setLastError(<ValidateRight message="Enter Your Surname" />);
        } else {
            setLastError();
        }

        if(inputs.gender === ''){
            setGenderError("Select a gender " );
        } else {
            setGenderError();
        }

        if(inputs.email === ''){
            setEmailError(<ValidateLeft message="Enter your Email"/>);
        } else {
            setEmailError();
        }

        if(inputs.contact === ''){
            setContactError(<ValidateRight message="Enter your Phone Number"/>);
        } else {
            setContactError();
        }

        if(inputs.password === ''){
            setPasswordError(<ValidateLeft message="Enter a Password"/>);
        } else {
            setPasswordError();
        }

        if(inputs.passwordCon === ''){
            setPasswordConError(<ValidateLeft message="Re-Type Password"/>);
        } else {
            setPasswordConError();
        }

        if(inputs.contact === ''){
            setContactError(<ValidateLeft message="Enter Your Phone Number"/>)
        } else {
            setContactError();
        }

        if(inputs.age === ""){
            setAgeError(<ValidateRight message="Enter Your Age"/>)
        }

        let result = Object.values(inputs).some(o => o === '');

        if(result){
            console.log('Not working');
        } else {
            axios.post('http://localhost:8888/sal_db/addUser.php', inputs)
            .then(function(response){
                console.log(response);

                if(response.status === 200){
                    sessionStorage.setItem('activeUser', inputs.email);
                    navigate("/Appointments");
                } else {
                    console.log("something is wrong!");
                }

            });
        }

    }

    const genderDrop = genders.map(item => <Dropdown dropItem={item} className={styles.dropDown} name="gender"/>)

  return (
    <div className={styles.registerBg}>
        <div className={styles.registerCon}>


            <div className={styles.formCon}>

                <img className={styles.registerLogo} src={Logo} width={100}/>
                <div className={styles.heading}>
                    <h2>REGISTER</h2>
                </div>
         
                <div className={styles.nameGroup}>
                    <div className={styles.group}>
                        <label htmlFor='name'>First Name</label>
                        <Input className='form-input' name='name' type='text' onChange={firstVal}/>
                        {nameError}
                    </div> 

                    <div className={styles.group}>
                        <label htmlFor='surname'>Last Name</label>
                        <Input className='form-input' name='surname' type='text' onChange={lastVal}/>
                        {lastError}
                    </div>

                </div>

                <label htmlFor='gender'>Gender</label>
                <select className={styles.dropDown} name="gender" onChange={genderVal}>
                    {genderDrop}
                </select>

                <label htmlFor='email'>Email</label>
                <Input className='form-input' name='email' type='text'  onChange={emailVal}/>
                {emailError}

                <label htmlFor='password'>Password</label>
                <Input className='form-input' name='password' type='password'  passIcon="hide-pass" onChange={passwordVal}/>
                {passwordError}

                <label htmlFor='passwordCon'>Confirm Password</label>
                <Input className='form-input' name='passwordCon' type='password' passIcon="hide-pass" onChange={passwordConVal}/>
                {passwordConError}

                <label htmlFor='contact'>Phone Number (optional)</label>
                <Input className='form-input' name='contact' type='text' placeholder='(+27)' onChange={contactVal}/>
                {contactError}

                <label htmlFor='age'>Age</label>
                <Input className='form-input' name='age' type='number' onChange={dateVal}/>
                {ageError}

                <Button onClick={handleSubmit} name="REGISTER" className="signup-login-btn"/>
                <div className='btn-group'>
                    <p>Already a receptionist?</p>
                    <Button onClick={() => navigate("/")} name="LOGIN HERE" className="tersiary-btn"/>
                </div>

            </div>

        <div className={styles.profileUpload}>
            <p>Upload a Photo of Yourself</p>
            <label for="file-input">
                <Input id="file-input" type="file" onChange={imageVal}/>
            </label>
 
            <div id="profileimg" className='profile_img'></div>
        </div>
    </div>
    </div>
  )
}
