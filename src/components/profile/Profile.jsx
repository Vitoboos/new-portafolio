import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import js from './images/js.png'
import ts from './images/ts.png'
import react from './images/react.png'
import angular from './images/angular.png'
import django from './images/django.png'
import python from './images/python.png'
import sql from './images/sql.png'

import portrait from './images/portrait.png'

import styles from './Profile.module.css'

export default function Profile() {
  return (

  <Container className={styles.profile_container} fluid>
    <Row className={styles.biography_container}>
      <Col xs={12} md={6} >

        {/* Description of myself */}

        <Card className={styles.biography_card}>
            <Card.Body>

                <Row className={styles.topgrid}>
                  <Col>
                    <Card.Img className={styles.biography_portrait} src={portrait} />
                  </Col>

                  <Col>
                    <Card.Title  className={styles.biography_title}> Greetings I'm Victor </Card.Title>
                  </Col>
                </Row>

                <Card.Subtitle className={styles.biography_subtitle}> Junior Front-End Developer </Card.Subtitle>
                <Card.Text className={styles.biography_text}>
                    I am well versed in front-end development and have worked with frameworks such as 
                    React and Django, I have experience dealing with Python and building desktop 
                    apps with Tkinter, Electron and .NET. I am a natural leader, mediator, 
                    passionate worker who enjoys problem solving and learning new skills. 
                    My hobbies include reading history and playing videogames.
                </Card.Text>
                {/* <Button className={styles.about_btn} variant="primary"> About me </Button> */}
            </Card.Body>
        </Card>

      </Col>

      <Col xs={12} md={6}>

        <h1 className={styles.tool_title}> Tools </h1>

        <Row className={styles.tool_row}>
            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={js}/>
            </Col>

            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={ts}/>
            </Col>

            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={react}/>
            </Col>

            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={angular}/>
            </Col>

            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={django}/>
            </Col>
            
            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={python}/>
            </Col>

            <Col xs={3} md={2} className={styles.tool_col}>
              <Image className={styles.tool_image} src={sql}/>
            </Col>
        </Row>

        <Row className={styles.contact_row}>
            <Card className={styles.contact_card}>
                <Card.Body>
                    <Card.Title className={styles.contact_title}> Find me! </Card.Title>
                        <ListGroup className={styles.contact_list}>
                            <ListGroup.Item className={styles.contact_item} onClick={() => {window.open('https://github.com/Vitoboos')}}> <li> Github </li> </ListGroup.Item>
                            <ListGroup.Item className={styles.contact_item} onClick={() => {window.open('https://www.linkedin.com/in/victor-antonio-guaipo-mendoza-727016272/')}}> <li> Linkedin </li> </ListGroup.Item>
                        </ListGroup>
                </Card.Body>
            </Card>
        </Row>
        
      </Col>

    </Row>
  </Container>

  )
}
