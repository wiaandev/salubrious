import React, {useState, useEffect} from 'react';
import Nav from '../UI Components/Nav';
// import Table from '../UI Components/Table';
import Modal from '../UI Components/Modal';
import Patient from '../assets/patient.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TableRow from '../UI Components/Table';
import Input from '../UI Components/Input';
import Button from '../UI Components/Buttons/Button';
import styles from './Patients.module.css';
import Dropdown from '../UI Components/Dropdown';

const Patients = (props) => {

    const navigate = useNavigate();

    const[modalOpen , setModalOpen] = useState(false);
    const[addModal, setAddModal]= useState(false);
    const [newModal, setNewModal] = useState(false);
    const genders = ['M', 'F'];
    const [patients, setPatients] = useState([]);

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });

    useEffect(() => {
        const userSession = sessionStorage.getItem('activeUser');
        console.log(userSession);
        if(userSession === '' || userSession === null){
            navigate('/');
        }

    }, [])

    useEffect(() => {
        axios.get('http://localhost:8888/sal_db/getPatients.php')
        .then((res => {
            let data = res.data;
            setPatients(data);
        }))
    }, [])

    const addPatient = () => {
        setPatients([...patients, `<tr><td><Input className='form-input' name='name' type='text'/></td></tr>`]);
    }

    const UpdatePatient = () => {
    
        return(
            <div>
                <h2 className={styles.modalHeading}>Update Patient</h2>
                <h3>Update our patient's details by editing the fields below</h3>
                <label htmlFor='pfp'>Change Profile Pic</label>
                <Input type='file' name='pfp'/>
                <label htmlFor="patientName">Name</label>
                <Input className='form-input' name='name' type='text'/>
                <label htmlFor="date">Medical Aid Number</label>
                <Input className="form-input" name="date" type="text"/>
                <label htmlFor="fname">Contact Number</label>
                <Input className='form-input' name='reason' type='text'/>
                <Button name="Save" className={styles.save}/>
            </div>
        )
    
    }

    

    const AddNewPatient = () => {

        const [inputs, setInputs] = useState({
            name: '',
            surname: '',
            age: '',
            gender: '',
            email: '',
            contact: '',
            patientId: '',
            medicalNum: '',
        })

        const getTheName = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, name: value})
            console.log(inputs);
        }

        const getTheSurname = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, surname: value})
            console.log(inputs);
        }

        const getTheAge = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, age: value})
            console.log(inputs);
        }


        const genderVal = (e) => {
            const value = e.target.value;
            setInputs({...inputs, gender: value}); 
        }

        const getTheEmail = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, email: value})
            console.log(inputs);
        }

        const getTheNumber = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, contact: value})
            console.log(inputs);
        }

        const getTheId = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, patientId: value})
            console.log(inputs);
        }

        const getTheMedicalNum = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, medicalNum: value})
            console.log(inputs);
        }
        
        const postToDb = () => {
            axios.post('http://localhost:8888/sal_db/addPatient.php', inputs)
            .then(function(res){
                const data = res.data
                console.log(data);
            }).catch((res) => {
                console.log(res);
            })
            // window.location.reload();
        }

        const genderDrop = genders.map(item => <Dropdown dropItem={item} className={styles.dropDown} name="gender"/>)
    
        return(
            <div className={styles.addModal}>
                <h2 className={styles.modalHeading}>New Patient</h2>
                <h3>Enter the details below for our new patient</h3>
                <Input type='file' name='pfp'/>
                <label htmlFor="name">Name</label>
                <Input className='form-input' name='name' type='text' onChange={getTheName} defaultValue={props.defaultValue}/>
                <label htmlFor="surname">Surname</label>
                <Input className="form-input" name="surname" type="text" onChange={getTheSurname}/>
                <label htmlFor="age">Age</label>
                <Input className='form-input' name='age' type='text' onChange={getTheAge}/>
                <select name='gender' onChange={genderVal}>
                    {genderDrop}
                </select>
                <label htmlFor="email">Email</label>
                <Input className="form-input" name="email" type="text" onChange={getTheEmail}/>
                <label htmlFor="contact">Contact Number</label>
                <Input className='form-input' name='contact' type='text' onChange={getTheNumber}/>
                <label htmlFor="patientId">Patient ID</label>
                <Input className='form-input' name='patientId' type='text' onChange={getTheId}/>
                <label htmlFor="medicalNum">Medical Aid Number</label>
                <Input className='form-input' name='medicalNum' type='text' onChange={getTheMedicalNum}/>
                <Button name="Save" className={styles.save} onClick={postToDb}/>
            </div>
        )
    
    }

    return (
        <>
        <div className='page'>
            <div className="leftPage">
                <Nav/>
                
            </div>
            <div className="pageContent">
                <h1>Our Patients</h1>

                <div className='welcome'>
                    <p>Here is a list of our beloved patients!
                        We can update their info on the fly here and alter their appointments
                    </p>
                    <img src={Patient} width={200}/>
                </div>
                {userId.activeUser == "jane.lambert@salubrious.co.za" ? <Button className={styles.addBtn} name="Add Patient &#43;" onClick={() => setAddModal(<AddNewPatient/>)}/> : ""}
                <table className={styles.table}>
                    <thead>
                        <th>PROFILE IMAGE</th>
                        <th>PATIENT NAME</th>
                        <th>MEDICAL AID NUMBER</th>
                        <th>CONTACT NUMBER</th>
                    </thead>
                    {/* {patients.map((item, key) => (<tr name={item.name + " " + item.surname} number={item.medical_aid_number} title={item.age + " " + item.gender} Cnumber={item.phone_number} heading="Update Patient" />)
                    )}  */}
                    {patients.map((item,index)=>(<tr key={index}>
                        <td className={styles.tableImg}>{item.proile_image}</td>
                        <td><span className={styles.pName}>{item.name + " " + item.surname}</span><br /><span className={styles.subHeading}>{item.age + " " + item.gender}</span></td>
                        <td className={styles.aidNumber}>{item.medical_aid_number}</td>
                        <td>{item.phone_number}</td>
                        <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={() => {setModalOpen(true)}}/></td> : "" }</td>
                    </tr>))}
                </table>

                {modalOpen && <Modal heading={props.heading} openModal={setModalOpen} newAppoint={<UpdatePatient name="Jane"/>}/>}
                {addModal && <Modal heading={props.heading} openModal={setAddModal} addPatient={<AddNewPatient/>}/>}
            </div>
            
            
            
           
        </div>

        </>
    );
};

export default Patients;