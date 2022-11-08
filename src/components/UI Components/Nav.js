import React from 'react';
import logo from '../assets/logo.svg';
import "https://kit.fontawesome.com/3d7d8906d0.js";
import { Link } from 'react-router-dom';
import Profile from './Profile';
import styles from './Nav.module.css';

const Nav = () => {

    return (
        <div className={styles.nav}>
            <img className={styles.logo} src={logo} width={100}/>

            <ul>
                <Link to="/Appointments"><div className={styles.navItem}><li className={styles.btn}><i class="fa-regular fa-lg fa-calendar"></i> Appointments</li></div></Link>
                <Link to="/Patients"><div className={styles.navItem}><li className={styles.btn}><i class="fa-solid fa-lg fa-hospital-user"></i> Patients</li></div></Link>
                <Link to="/Doctors"><div className={styles.navItem}><li className={styles.btn}><i class="fa-solid fa-lg fa-user-doctor"></i> Doctors</li></div></Link>
                <Link to="/Receptionists"><div className={styles.navItem}><li className={styles.btn}><i class="fa-solid fa-lg fa-user"></i>Receptionists</li></div></Link>
            </ul>

            <Profile/>

        </div>
    );
};

export default Nav;