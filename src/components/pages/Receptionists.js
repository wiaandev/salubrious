import React, {useState, useEffect} from 'react'
import Nav from '../UI Components/Nav';
import Table from '../UI Components/Table';
import Receptionist from '../assets/receptionist.svg';
import TableRow from '../UI Components/TableRow';
import axios from 'axios';
import Modal from '../UI Components/Modal';
import styles from './Receptionists.module.css';
import Button from '../UI Components/Buttons/Button';
import Input from '../UI Components/Input';
import EditModal from '../UI Components/EditModal';

export default function Receptionists(props) {

    const [receptionists, setReceptionists] = useState([]);
    const [receptId, setReceptId] = useState('');
    const [receptName, setReceptName] = useState('');
    const[modal , setModal] = useState();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser') 
    });

    const [defValue, setDefValue] = useState('');
    useEffect(() => {
        axios.get('http://localhost:8888/sal_db/getReceptionists.php', userId)
        .then(res => {
            let data = res.data;
            console.log(data);
            let renderReceptionists = data.map((item) => <TableRow key={item.id} id={item.id} profile_image={item.profile_image}  name={item.name} surname={item.surname} email={item.email} rank={item.rank} phone_number={item.phone_number}/>)
            setReceptionists(renderReceptionists);
        })
        setReceptId(props.receptId);
        console.log(receptId);
    }, [props.receptId])



    const UpdatePatient = (props) => {

        const [receptionist, setReceptionist] = useState({
            email: sessionStorage.getItem('activeUser'),
            name: '',
        })

        // const [updatedReceptionist, setUpdatedReceptionist] = useState({
        //     image: props.image,
        //     name: props.name,
        //     surname: props.surname,
        //     age: props.age,
        //     gender: props.gender,
        //     contact: props.contact,
        //     email: props.email,
        //     id: props.id
        // })

        // const handleNameChange = (e) => {
        //     let val = e.target.value;
        //     setUpdatedReceptionist({...updatedReceptionist, name: val});
        // }

        // const updateReceptionist = () => {
        //     axios.post('http://localhost/sal_db/updateReceptionist.php', updateReceptionist)
        //     .then((res) => {
        //         let data = res.data;
        //         console.log(data);
        //     })
        // }

        // const [fNames, setFNames] = useState('');

        // useEffect(() => {
        //     setFNames(props.defaultValue);

        // }, [props.defaultValue]
    
    }

  return (
    <div>
        <div className="leftPage">
            <Nav/>
        </div>

        <div className="pageContent">
            <h1>Receptionists</h1>
            <div className='welcome'>
                    <p>Here is a list of our beloved patients!
                        We can update their info on the fly here and alter their appointments
                    </p>
                    <img src={Receptionist} width={300}/>
            </div>
            <table className={styles.table}>
                <thead>
                    <th>PROFILE IMAGE</th>
                    <th>RECEPTIONIST</th>
                    <th>EMAIL</th>
                    <th>CONTACT NUMBER</th>
                </thead>
                {receptionists}

            </table>
            {modal}
        </div>
    </div>
  )
}
