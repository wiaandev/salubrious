import React from 'react'
import styles from './ValidateRight.module.css';

export default function ValidateRight(props) {
  return (
    <div className={styles.alertMiniModal}>
        <p>{props.message}</p>
    </div>
  )
}
