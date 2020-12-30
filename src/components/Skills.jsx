import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'

import java from '../images/skills/Java.svg'
import kotlin from '../images/skills/kotlin.svg'
import maps from '../images/skills/maps.png'
import firebase from '../images/skills/firebase.png'
import androidStudio from '../images/skills/android_studio.png'
import github from '../images/skills/github.png'
import retrofit from '../images/skills/retrofit.png'

function Skills(){

    return (
        <section id="skills">
            <Container>
                <div className="skills-wrapper">
                    <Title title="Skills"/>

                    <Row>
                        {/* lg={2} sm={6} */}
                        <Col  >
                            <img className="image" src={java} alt="Java"/>
                        </Col>
                        <Col >
                            <img className="image" src={kotlin} alt="Kotlin"/>
                        </Col>
                        <Col >
                            <img className="image" src={maps} alt="Google Maps"/>
                        </Col>
                        <Col >
                            <img className="image" src={firebase} alt="Firebase"/>
                        </Col>
                        <Col >
                            <img className="image" src={androidStudio} alt="Android Studio"/>
                        </Col>
                        <Col >
                            <img className="image" src={retrofit} alt="Retrofit"/>
                        </Col>
                        <Col >
                            <img className="image" src={github} alt="GitHub"/>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default Skills;