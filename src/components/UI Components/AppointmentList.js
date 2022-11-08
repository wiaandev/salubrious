import React, {useState} from 'react';
import styles from './AppointmentList.module.css';
import Button from './Buttons/Button';

export default function AppointmentList(props) {

    // const [isHovering, setIsHovering] = useState(false);

    // const handleMouseEnter = () => {
    //   setIsHovering(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setIsHovering(false);
    // };

  return (
    <div className={styles.appointmentList}>
        <h1 className={styles.date}>{props.date}</h1>
        <p className={styles.item}>{props.doctorName}</p>
        <p className={styles.item}>{props.patientName}</p>
        <p className={styles.time}>{props.time}</p>
    </div>
  )
}
