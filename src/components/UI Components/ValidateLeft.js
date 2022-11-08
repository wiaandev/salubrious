import React from 'react'
import styles from './ValidateLeft.module.css';

export default function ValidateLeft(props) {
  return (
    <div className={styles.alertMiniModal}>
        <p>{props.message}</p>
    </div>
  )
}
