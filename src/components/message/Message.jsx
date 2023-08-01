import React from 'react'
import Form from 'react-bootstrap/Form';
import styles from './Message.module.css'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button';

import { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Message() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_ibhbmmp', 'template_ue7lh9q', form.current, 'apTGqqKPsVZ6KX1o7')
            .then((result) => {
            console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
        };


  return (

    <Container id="message" className={styles.message_container} fluid>

        <h1 style={{color: 'white'}}> Send me a message! </h1>
        <Form className={styles.message_form} ref={form} onSubmit={sendEmail}>
        <Row>
            <Col xs={12} md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}> Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name='user_email' />
                </Form.Group>
            </Col>

            <Col xs={12} md={6}> 
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label className={styles.label}> Subject </Form.Label>
                    <Form.Control type="text" placeholder="Subject" name='subject'/>
                </Form.Group>
            </Col>

            <Col xs={12} md={6}> 
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label className={styles.label}> Name </Form.Label>
                    <Form.Control type="text" placeholder="Your name." name='user_name'/>
                </Form.Group>
            </Col>
        
            <Col xs={12} md={12}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder='Your message.' name='message'/>
                </Form.Group>
                <Button type='submit' className={styles.submit}> Send! </Button>
            </Col>
        </Row>
        </Form>

    </Container>

  )
}
