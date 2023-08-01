import React, { Fragment } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/esm/Button';

import anisearch from './images/anisearch.png'
import doodlegod from './images/doodlegod.png'
import ecommerce from './images/ecommerce.png'

import { Link } from 'react-router-dom';

import styles from './Projects.module.css'

export default function Projects() {
  return (
    <Fragment>
    
    <Container id="projects" className={styles.projects_container} fluid>

        <h1 className={styles.container_title}> Featured Projects </h1>

        <Carousel className={styles.projects_carousel}>
            <Carousel.Item>
            <img
                className={styles.project_image}
                src={anisearch}
                alt="First slide"
            />
            <Carousel.Caption className={styles.project_caption}>
                <h3> Anime Searcher </h3>
                <p> An anime searcher powered by JikanAPI </p>
                <Button className={styles.project_btn} onClick={()=>{ window.open('https://vitoboos.github.io/anisearch/')}}> Live App </Button>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className={styles.project_image}
                src={ecommerce}
                alt="Second slide"
            />

            <Carousel.Caption className={styles.project_caption}>
                <h3> E Commerce Site </h3>
                <p> Laptop Commerce Site </p>
                <Button className={styles.project_btn} onClick={()=>{ window.open('https://vitoboos.github.io/ecommerceLaptop/')}}> Live App </Button>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className={styles.project_image}
                src={doodlegod}
                alt="Third slide"
            />

            <Carousel.Caption className={styles.project_caption}>
                <h3> Doodle God Clone </h3>
                <p>
                     Clone of a web-browser game
                </p>
                <Button className={styles.project_btn} onClick={()=>{ window.open('https://vitoboos.github.io/doodlegod/')}}> Live App </Button>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Link className={styles.link}  to={'/projects'}> 
            <Button className={styles.viewall}> View All Projects </Button> 
        </Link>

        
    </Container>

    </Fragment>

  )
}
