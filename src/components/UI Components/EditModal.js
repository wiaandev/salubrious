import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import Input from './Input';
import styles from './Modal.module.css';
import Button from './Buttons/Button';

const EditModal = (props) => {

  const [updatedPost, setUpdatedPost] = useState({
    fName: props.name,
    lName: props.surname,
    mailAddress: props.email,
    theRank: props.rank,
    contact: props.contactNum,
    id: props.id
  });

  const closeModal = () => {
    props.rerender();
  }
  
  useEffect(()=>{
    document.getElementById('updateName').value = props.firstName;
    document.getElementById('updateSurname').value = props.surname;
    document.getElementById('updateEmail').value = props.email;
    document.getElementById('updateRank').value = props.rank;
    document.getElementById('updateNum').value = props.contactNum;
    console.log(updatedPost.id);
  },[]);

  const handleNameChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, fName: value});
    console.log(updatedPost);
  }

  const handleSurnameChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, lName: value});
    console.log(updatedPost);
  }

  const handleEmailChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, mailAddress: value});
    console.log(updatedPost);
  }

  const handleRankChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, theRank: value});
    console.log(updatedPost);
  }

  const handleContactChange = (e) => {
    let value = e.target.value;
    setUpdatedPost({...updatedPost, contact: value});
    console.log(updatedPost);
  }

  const updateReceptionist = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8888/sal_db/updateReceptionist.php', updatedPost)
      .then((res)=>{
        let data = res.data;
        console.log(data); 
        props.upRender(true);
        props.rerender();
    });
    function reload(){
        window.location.reload();
    }
    setTimeout(reload, 2000);
  }

  return (
    <div className={styles.modalBg}>

    <div className={styles.modal}>
      <form className={styles.modalContent}>
        <div className={styles.flex}>
            <h2>Update {props.heading}</h2>
        </div>

        <Input type="file"/>
        <Input className="form-input" id='updateName' placeholder='Name' onChange={handleNameChange}/>
        <Input className='form-input' id='updateSurname' type='text' onChange={handleSurnameChange}/>
        <Input className="form-input" id='updateEmail'  placeholder='Email' onChange={handleEmailChange}/>
        <Input className="form-input" id='updateRank' placeholder='Name' onChange={handleRankChange}/>
        <Input className='form-input' id='updateNum' type='text' onChange={handleContactChange}/>
        <div className={styles.flex}>
            <Button className={styles.updateBtn} type='submit' name="Update" onClick={updateReceptionist} />
            <Button className={styles.cancelBtn} type='cancel' name="Cancel" onClick={closeModal} />
        </div>

      </form>
       
    </div>
    </div>
  )
}

export default EditModal;
