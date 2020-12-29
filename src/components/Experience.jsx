import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title'

function Experience(props) {
    const { experience } = useContext(PortfolioContext);

    return(
        <section id="experience">
            <Container className="project-wrapper-modal" >
                <Title title="Experiencia" />
                {experience.map( item => {
                    const { company, lapse, job, desc } = item;

                    return (
                        <Row key={company}>
                            <Col lg={4} sm={12} className="project-wrapper__text">
                                <p className="project-wrapper__text-title">{company}</p>
                                <p>{lapse}</p>
                            </Col>
                            <Col lg={8} sm={12} className="project-wrapper__text">
                                <p className="project-wrapper__text-title">{job}</p>
                                <p>{desc}</p>
                            </Col>
                                {/* <div style={{ alignItems: 'center', height: '1px', width: '100%',background: 'gray' }}></div> */}
                        </Row>
                    )
                })}
            </Container>
        </section>
    )
}

export default Experience;