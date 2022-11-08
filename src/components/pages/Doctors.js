import React, { useState, useEffect } from 'react';
import Modal from '../UI Components/Modal';
import Nav from '../UI Components/Nav';
import TableRow from '../UI Components/Table';
import Doctor from '../assets/doctor.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './Doctors.module.css';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import Dropdown from '../UI Components/Dropdown';


const Doctors = (props) => {

    const[modalOpen , setModalOpen] = useState(false);
    const[addModal, setAddModal] = useState(false);
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const genders = ['M', 'F'];

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
        axios.get('http://localhost:8888/sal_db/getDoctors.php')
        .then((res => {
            let data = res.data;
            setDoctors(data);
        }))
    }, [])

    const UpdatePatient = () => {
    
        return(
            <>
                <h2 className={styles.modalHeading}>Update Doctor</h2>
                <label htmlFor='pfp'>Change Profile Pic</label>
                <Input type='file' name='pfp'/>
                <label htmlFor="patientName">Name</label>
                <Input className='form-input' name='name' type='text'/>
                <label htmlFor="date">Doctor ID</label>
                <Input className="form-input" name="date" type="text"/>
                <label htmlFor="fname">Contact Number</label>
                <Input className='form-input' name='reason' type='text'/>
                <Button name="Save" className={styles.save}/>
            </>
        )
    
    }

    
    const AddNewDoctor = () => {

        const [inputs, setInputs] = useState({
            name: '',
            surname: '',
            age: '',
            gender: '',
            contact: '',
            doctorId: '',
            specialisation: '',
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

        const getTheNumber = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, contact: value})
            console.log(inputs);
        }

        const getTheId = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, doctorId: value})
            console.log(inputs);
        }

        const getTheSpecialisation = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, specialisation: value})
            console.log(inputs);
        }
        
        const postToDb = () => {
            axios.post('http://localhost/sal_db/addDoctor.php', inputs)
            .then(function(res){
                const data = res.data
                console.log(data);
            }).catch((res) => {
                console.log(res);
            })
            window.location.reload();
        }
        
        const genderDrop = genders.map(item => <Dropdown dropItem={item} className={styles.dropDown} name="gender"/>)
    
        return(
            <div className={styles.addModal}>
                <h2 className={styles.modalHeading}>New Doctor</h2>
                <h3>Enter the details below for our new doctor</h3>
                <Input type='file' name='pfp'/>
                <div className={styles.flex}>
                    <div className={styles.flexCol}>
                        <label htmlFor="name">Name</label>
                        <Input className='form-input' name='name' type='text' onChange={getTheName}/>
                    </div>
                    <div className={styles.flexCol}>
                        <label htmlFor="surname">Surname</label>
                        <Input className="form-input" name="surname" type="text" onChange={getTheSurname}/>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.flexCol}>
                        <label htmlFor="age">Age</label>
                        <Input className='form-input' name='age' type='text' onChange={getTheAge}/>
                    </div>
                    <div className={styles.flexCol}>
                        <label htmlFor="gender">Gender</label>
                        <select className={styles.dropDown} name="gender" onChange={genderVal}>
                            {genderDrop}
                        </select>
                    </div>
                </div>

                <label htmlFor="doctorId">Doctor ID</label>
                <Input className="form-input" name="doctorId" type="text" onChange={getTheId}/>
                <label htmlFor="specialisation">Specialisation</label>
                <Input className="form-input" name="specialisation" type="text" onChange={getTheSpecialisation}/>
                <label htmlFor="contact">Contact Number</label>
                <Input className='form-input' name='contact' type='text' onChange={getTheNumber}/>
                <Button name="Save" className={styles.save} onClick={postToDb}/>

            </div>
        )
    
    }

    const deleteDoctor = () => {
        const miniModal = window.confirm("You are about to delete this doctor. Are you sure?");
        if(miniModal === true){

            let postId = {id: props.uniqueId}
            axios.post('http://localhost/sal_db/deleteDoctor.php', postId)
            .then((res) => {
                const data = res.data;
                console.log(data);
            })
        }
    }

    return (
        <>
        <div className='page'>
            <div className="leftPage">
                <Nav/>
                
            </div>
            <div className="pageContent">
                <h1>Our Doctors</h1>

                <div className='welcome'>
                    <p>Here is a list of our doctor’s!
                        You will be able to update appointments!
                    </p>
                    <img src={Doctor} width={300}/>
                </div>

                {userId.activeUser == "jane.lambert@salubrious.co.za" ? <Button className={styles.addBtn} name="Add Doctor &#43;" onClick={() => setAddModal(<AddNewDoctor/>)}/> : ""}
                
                <table className={styles.table}>
                    <thead>
                        <th>PROFILE IMAGE</th>
                        <th>DOCTORS NAME</th>
                        <th>DOCTOR ID</th>
                        <th>CONTACT NUMBER</th>
                    </thead>
                    {doctors.map((item,index)=>(<tr key={index}>
                        <td className={styles.tableImg}>{item.proile_image}</td>
                        <td><span className={styles.pName}>Dr. {item.name + " " + item.surname}</span><br /><span className={styles.subHeading}>{item.specialisation}</span></td>
                        <td className={styles.aidNumber}>{item.doctor_id}</td>
                        <td>{item.phone_number}</td>
                        <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={() => {setModalOpen(true)}}/></td> : "" }</td>
                        <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="DELETE" onClick={deleteDoctor}/></td> : "" }</td>
                    </tr>))}
                
                </table>

                {modalOpen && <Modal heading={props.heading} openModal={setModalOpen} newAppoint={<UpdatePatient/>}/>}
                {addModal && <Modal heading={props.heading} openModal={setAddModal} addPatient={<AddNewDoctor/>}/>}
            </div>
            
            
            
           
        </div>
        </>
    );
};

export default Doctors;