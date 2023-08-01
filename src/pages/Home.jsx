import React from 'react'
import { Fragment } from 'react';

import Navbar from '../components/navbar/Navbar'
import Profile from '../components/profile/Profile'
import Projects from '../components/projects/Projects'
import Upcoming from '../components/upcoming/Upcoming'
import Message from '../components/message/Message'

import styles from './Home.module.css'

export default function Home() {
  return (
    <Fragment>

      <div className={styles.main_container}>
        <Navbar/> 
        <Profile/> 
        <Projects/>
        <Message/>
        <Upcoming/>
      </div>

    </Fragment>  
)}
