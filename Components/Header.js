import React from 'react';
import styles from '../styles/Home.module.css'


function Header() {
  return (
  <div className={styles.Mainheader}>
    <img src='logo.png' className={styles.HeaderLogo}/>
    


    <h1 className={styles.HeadderHeading}>Pubiee</h1>
    <div className={styles.HeaderLi}>
        <h1 className={styles.HeaderLiH1}>Home</h1>
        <h1 className={styles.HeaderLiH1}>Login</h1>
        <h1 className={styles.HeaderLiH1}>Sign up</h1>
    </div>
  </div>);
}

export default Header;