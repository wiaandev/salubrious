import React, {useState, useEffect} from 'react'
import styles from '../pages/Receptionists.module.css';
import axios from 'axios';
import Button from './Buttons/Button';
import EditModal from './EditModal';

export default function TableRow(props) {

    const [receptionists, setReceptionists] = useState([]);
    const[modal , setModal] = useState();

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser') 
    });

    const editRecept = () => {
        setModal(<EditModal heading="Receptionist" upRender={props.rerender} rerender={setModal} firstName={props.name} surname={props.surname} email={props.email} rank={props.rank} contactNum={props.phone_number} id={props.uniqueId}/>);
    }

  return (
    <>

    <tr id={props.id}>
        <td className={styles.tableImg}><img className={styles.circle} src={"http://localhost/sal_db/" + props.profile_image}/></td>
        <td><span className={styles.pName}>{props.name + " " + props.surname}</span><br /><span className={styles.subHeading}>{props.email}</span></td>
        <td className={styles.aidNumber}>{props.rank}</td>
        <td>{props.phone_number}</td>
        <td>{userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={editRecept}/></td> : "" }</td>
    </tr>
    {modal}
    </>
  )
}
