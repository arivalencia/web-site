import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'

import java from '../images/skills/Java.svg'
import kotlin from '../images/skills/kotlin.svg'
import maps from '../images/skills/maps.png'
import firebase from '../images/skills/firebase.png'
import androidStudio from '../images/skills/android_studio.png'
import retrofit from '../images/skills/retrofit.png'

function Skills(props){

    return (
        <section id="skills">
            <Container>
                <div className="skills-wrapper">
                    <Title title="Skills"/>

                    <Row>
                        <Col lg={2} sm={12}>
                            <img className="image" src={java} alt="Java"/>
                        </Col>
                        <Col lg={2} sm={12}>
                            <img className="image" src={kotlin} alt="Kotlin"/>
                        </Col>
                        <Col lg={2} sm={12}>
                            <img className="image" src={maps} alt="Google Maps"/>
                        </Col>
                        <Col lg={2} sm={12}>
                            <img className="image" src={firebase} alt="Firebase"/>
                        </Col>
                        <Col lg={2} sm={12}>
                            <img className="image" src={androidStudio} alt="Android Studio"/>
                        </Col>
                        <Col lg={2} sm={12}>
                            <img className="image" src={retrofit} alt="Retrofit"/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Skills;