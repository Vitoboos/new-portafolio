import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import styles from './Navbar.module.css'

import projects from './images/projects.png'
import contacts from './images/contact.png'
import future from './images/future.png'

export default function Navbar() {

  function toProjects(){
    let nav = document.getElementById('projects')
    nav.scrollIntoView(({
        behavior: "smooth",
        block: "end",
        inline: "center"
    }))
}

function toMsg(){
    let nav = document.getElementById('message')
    nav.scrollIntoView(({
        behavior: "smooth",
        block: "end",
        inline: "center"
    }))
}

function toUpcoming(){
    let nav = document.getElementById('upcoming')
    nav.scrollIntoView(({
        behavior: "smooth",
        block: "start",
        inline: "end"
    }))
}

  return (
    <Container className={styles.navbar_container} fluid>
      <Row>
        <Col onClick={toProjects}>
            <h3 className={styles.navbar_heading}> Projects </h3>
            <Image className={styles.navbar_image} src={projects} thumbnail />
        </Col>

        <Col onClick={toMsg}>
            <h3 className={styles.navbar_heading}> Contacts </h3>
            <Image className={styles.navbar_image} src={contacts} thumbnail />
        </Col>

        <Col onClick={toUpcoming}>
            <h3 className={styles.navbar_heading}> Upcoming </h3>
            <Image className={styles.navbar_image} src={future} thumbnail />
        </Col>
      </Row>
    </Container>
  )

}
