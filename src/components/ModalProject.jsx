import React, { useContext, useState } from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import ProjectImg from './Image/ProjectImg';

function ModalProject(props) {
    if (!props.project.title) return null;
    const { title, info, info2, url, repo, images, id, technologies } = props.project;

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Modal
            { ...props }
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body id="projects" style={{ padding: '0rem', margin: '0rem', marginRight: '0rem'}}>
                    <Row className="project-wrapper-modal">
                        <Col lg={4} sm={12} className="project-wrapper-modal__text" >
                            <p className="project-wrapper-modal__text-title">{title}</p>
                            <p>{info}</p>
                            { info2 &&
                                <p>{info2}</p>
                            }
                            <p className="project-wrapper-modal__text-sub-title">Tecnologías utilizadas</p>
                            <ul>
                                {technologies.map(tech =>
                                    <li key={tech}>
                                        <p>
                                            {tech}
                                        </p>
                                    </li>
                                )}
                            </ul>
                        </Col>
                        <Col lg={8} sm={12} style={{ padding: '0rem', margin: '0rem'}}>
                            <Carousel activeIndex={index} onSelect={handleSelect}>
                                {images.map( img => 
                                    <Carousel.Item key={img} interval={3500}>
                                        <ProjectImg  alt={title} filename={img}/>
                                    </Carousel.Item>
                                )}
                            </Carousel>
                        </Col>
                    </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Cerrar</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalProject

{/* <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className="display-4">
                    {title}
                </Modal.Title>
            </Modal.Header> */}