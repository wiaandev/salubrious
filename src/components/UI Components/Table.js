import React, {useState} from 'react';
import Button from './Buttons/Button';
import Modal from './Modal';
import styles from './Table.module.css';
import './Table.module.css';


export default function TableRow(props){
    const[modalOpen , setModalOpen] = useState(false);

    const [userId, setUserId] = useState({
        activeUser: sessionStorage.getItem('activeUser')
        
    });
    console.log(userId.activeUser);

    return(
        <tr className={styles.tableRow}>
            <td className={styles.tableImg}><img src='https://via.placeholder.com/50'/></td>
            <td><span className={styles.pName}>{props.name}</span><br/>{props.title}</td>
            <td>{props.number}</td>
            <td><span className={styles.pName}>{props.Cnumber}</span><br />{props.doctorName}</td>
            {userId.activeUser == "jane.lambert@salubrious.co.za" ? <td><Button className={styles.updateBtn} name="UPDATE" onClick={() => {setModalOpen(true)}}/></td> : "" }
            {modalOpen && <Modal heading={props.heading} openModal={setModalOpen} />}
        </tr>
    )
} 