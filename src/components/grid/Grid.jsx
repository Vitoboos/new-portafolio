import React from 'react'
import Item from './Item'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import styles from './Grid.module.css'

import anisearch from './images/anisearch.png'
import doodlegod from './images/doodlegod.png'
import ecommerce from './images/ecommerce.png'
import radimax from './images/radimax.png'

export default function Grid() {
  return (
    <Row className={styles.projects_container}>
        <h1 className={styles.container_title}> Projects </h1>

        <Col xs={6} md={4}> 
            <Item
                url = {anisearch}
                title = 'Anime Searcher'
                description = 'An anime searcher powered by Jikan API '
                badge1 = 'React'
                badge2 = 'Bootstrap'
                badge3 = 'API'
                link = 'https://vitoboos.github.io/anisearch/'
            />
        </Col>

        <Col xs={6} md={4}> 
            <Item
                url = {ecommerce}
                title = 'Project'
                description = 'A Laptop Commerce Site '
                badge1 = 'React'
                link = 'https://vitoboos.github.io/ecommerceLaptop/'
            />
        </Col>

        <Col xs={6} md={4}> 
            <Item
                url = {doodlegod}
                title = 'Project'
                description = 'A clone of a web-browser game '
                badge1 = 'React'
                link = 'https://vitoboos.github.io/doodlegod/'
            />
        </Col>

        <Col xs={6} md={4}> 
            <Item
                url = {radimax}
                title = 'Project'
                description = 'Landing page for an odontologist '
                badge1 = 'React'
                link = 'https://vitoboos.github.io/radimax'
            />
        </Col>

    </Row>
  )
}
