import React from 'react'
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/esm/Button';
import styles from './Item.module.css'

export default function Item(props) {
  return (

    <Card style={{margin: '5px'}}>
      <Card.Img  className={styles.image} variant="top" src={props.url} />
      <Card.Body>
        <Card.Title> {props.title} </Card.Title>
        <Card.Text>
            {props.description}
        </Card.Text>
        
        <div>
            <Badge bg="secondary">{props.badge1}</Badge>
            <Badge bg="secondary">{props.badge2}</Badge>
            <Badge bg="secondary">{props.badge3}</Badge>
        </div>


        <Button variant="primary" onClick={() => {window.open(props.link)}}> Live App </Button>
      </Card.Body>
    </Card>

  )
}
