import React, {useState, useEffect} from 'react';
import Button from './Buttons/Button';
import Dropdown from './Dropdown';
import Input from './Input';
import styles from './Modal.module.css';
import axios from 'axios';

const Modal = ({heading, openModal, newAppoint, addPatient, id}) => {

    const closeTheModal = () => {
        openModal(false);
    }

    // const [updatedPost, setUpdatedPost] = useState({
    //     newMessage: newInfo.original, 
    //     id: newInfo.id
    //   });
    
    //   const closeModal = () => {
    //     newInfo.rerender();
    //   }
      
    //   useEffect(()=>{
    //     document.getElementById('updateText').innerHTML = newInfo.original;
    //   },[]);
    
    //   const handleChange = (e) => {
    //     let value = e.target.value;
    //     setUpdatedPost({...updatedPost, newMessage: value});
    //     console.log(updatedPost);
    //   }
    
    //   const udpatePost = (e) => {
    //     e.preventDefault();
    
    //     axios.post('http://localhost:8888/api/updatePost.php', updatedPost)
    //       .then((res)=>{
    //         let data = res.data;
    //         console.log(data); 
    //         newInfo.upRender(true);
    //         newInfo.rerender();
    //       });
    //   }

  return (
    <div className={styles.modalBg}>
        <div className={styles.modal}>
            <Button name={<i class="fa-solid fa-x"></i>} onClick={closeTheModal} className={styles.closeBtn}/>
            <div className={styles.modalTitle}>{heading}</div>
            <div className={styles.modalBody} key={id}>
                {newAppoint}
                {addPatient}
                <Button name="Cancel" onClick={() => openModal(false)} className={styles.cancel}/>
            </div>
        </div>
    </div>
  )
}

export default Modal;
