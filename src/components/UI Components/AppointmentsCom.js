import React, { useEffect, useState, useRef } from 'react';
import Button from '../UI Components/Buttons/Button';
import Modal from './Modal';
import styles from './AppointmentsCom.module.css';
import AppointmentList from './AppointmentList';
import axios from 'axios';
import Input from './Input';
import Dropdown from './Dropdown';


const AppointmentsCom = () => {

    const[modalOpen , setModalOpen] = useState(false);
    const [appointments, setAppointments] = useState([]);
    const [doctors, setDoctors] = useState();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });

    useEffect(() => {
        axios.get('http://localhost:8888/sal_db/getAppointments.php')
        .then((res => {
            let data = res.data;
            setAppointments(data);
            let arr = ['Please Select...'];
            for(let i = 0; i < data.length; i++){
                arr.push(data[i].doctor_name);
                setDoctors(arr);
                console.log(doctors);
            }

        }))
    }, [])

    // let nameVal = useRef();
    // const AddAppointment = () => {

       

    //     const getTheValue = (nameVal) => {
    //         let theName = nameVal.current.value;
    //         console.log(theName);
    //     }


    //     return(
    //         <>
    //             <label for="fname">Name</label>
    //             <Input className='form-input' name='name' type='text' onChange={getTheValue} ref={nameVal}/>
    //             <label for="fname">Surname</label>
    //             <Input className='form-input' name='surname' type='text'/>
    //             <label for="fname">Doctor</label>
    //             <Input className='form-input' name='doctor' type='text'/>
    //             <label for="fname">Time</label>
    //             <Input className='form-input' name='time' type='time'/>
    //             <label for="fname">Reason of Appointment</label>
    //             <Input className='form-input' name='reason' type='textarea'/>
    //         </>
    //     )

    // }

    const AddAppointment = () => {
        const [inputs, setInputs] = useState({
            name: '',
            doctor: '',
            date: '',
            time: '',
            reason: ''
        })

        const getTheName = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, name: value})
            console.log(inputs);
        }

        const getTheDoctor = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, doctor: value})
            console.log(inputs);
        }

        const getTheDate = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, date: value})
            console.log(inputs);
        }


        const getTheTime = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, time: value})
            console.log(inputs);
        }

        const getTheReason = (e) => {
            let value = e.target.value;
            console.log(value);
            setInputs({...inputs, reason: value})
            console.log(inputs);
        }

        const doctorDrop = doctors.map(item => <Dropdown dropItem={item} className={styles.dropDown} name="doctor"/>)
        
        const postToDb = () => {
            axios.post('http://localhost:8888/sal_db/addAppointment.php', inputs)
            .then(function(response){
                console.log(response);
    
                if(response.data === true){
                    // window.confirm("Appointment Added")
                    // if(window.confirm === true){
                        
                    //     window.location.reload();
                    // }
                } else {
                    console.log("Not working!");
                }
            });
            window.location.reload();
        }

    
        return(
            <>
                <label for="fname">Name</label>
                <Input className='form-input' name='name' type='text' onChange={getTheName}/>
                <label for="fname">Doctor</label>
                {/* <Input className='form-input' name='doctor' type='text' onChange={getTheDoctor}/> */}
                <select onChange={getTheDoctor} className={styles.dropDown}>
                    {doctorDrop}
                </select>
                <label for="date">Date</label>
                <Input className="form-input" name="date" type="date" onChange={getTheDate}/>
                <label for="fname">Time</label>
                <Input className='form-input' name='time' type='time' onChange={getTheTime}/>
                <label for="fname">Reason of Appointment</label>
                <Input className='form-input' name='reason' type='text' onChange={getTheReason}/>
                <Button name="Save" className={styles.save} onClick={postToDb}/>
            </>
        )
    
    }

    return (
        <>
            <div className={styles.appointmentsBlock}>
                <h2>Appointments</h2>
                <div>
                    {userId.activeUser == "jane.lambert@salubrious.co.za" ? <Button name="New &#43;" className={styles.newAppointBtn} onClick={() => {setModalOpen(true)}}/> : ""}
                </div>

                {appointments.map(item => (<AppointmentList date={item.date} doctorName={item.doctor_name} patientName={item.patient_name} time={item.time}/>)
                )}      
                            
                {modalOpen && <Modal heading="Add an Appointment" body="example text" openModal={setModalOpen} newAppoint={<AddAppointment/>}/>}
            </div>
            
        </>
    );
};

export default AppointmentsCom;