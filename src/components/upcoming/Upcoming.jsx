import React, { Fragment } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/esm/Image';
import csharp from './images/csharp.png'
import unity from './images/unity.png'
import openai from './images/openai.png'

import styles from './Upcoming.module.css'

export default function Upcoming() {
  return (
    <Fragment>

        <Row id="upcoming" className={styles.tool_container}>

            <h2 className={styles.container_title}> Upcoming </h2>

            <Col xs={6} md={4}> 
                <Image className={styles.tool_image} src={csharp}/>
            </Col>

            <Col xs={6} md={4}> 
                <Image className={styles.tool_image} src={unity}/>
            </Col>

            <Col xs={6} md={4}> 
                <Image className={styles.tool_image} src={openai}/>
            </Col>
        </Row>

    </Fragment>
  )
}
