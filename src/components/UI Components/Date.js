import React from 'react';
import styles from './Date.module.css';

const Date = () => {
    const dateTime = window.Date();

    console.log(dateTime);

    const formatDate = dateTime.substring(0, 15);
    const formatTime = dateTime.substring(16, 21);

    // let formatTime = dateTime.getHours() + ":" + dateTime.getMinutes() + ":" + dateTime.getSeconds()
    
    return (
        <div className={styles.dateTimeCon}>
            <p>{formatDate}</p>
            <p className={styles.time}>{formatTime}</p>
        </div>
    );
};
export default Date;