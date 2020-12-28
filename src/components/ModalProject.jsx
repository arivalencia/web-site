import React, { useContext } from 'react';
import { Modal, Row, Col } from 'react-bootstrap';
import ProjectImg from './Image/ProjectImg';

function ModalProject(props) {
    if (!props.project.title) return null;
    const { title, info, info2, url, repo, img, id, technologies } = props.project;
    console.log('PROJECT', props.project)
    return (
        <Modal
            { ...props }
            size="xl"
            aria-labelledby="contained-modal-title-vcenter" 
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" /*className="display-4"*/>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body  >
                <p className="h2">Tecnologías utilizadas</p>

                <Row>
                    <Col lg={4} sm={12}>
                        <p className="h2">Tecnologías utilizadas</p>
                        <ul className="list-group list-group-flush">
                            {
                                technologies.map(tech =>
                                    <li key={tech} className="list-group-item h3">{tech}</li>
                                )
                            }
                        </ul>
                    </Col>
                    <Col lg={8} sm={12}>
                        <ProjectImg alt={title} filename={img} />
                    </Col>
                </Row>

            </Modal.Body>
        </Modal>
    )
}

export default ModalProject