import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title'
import ProjectImg from './Image/ProjectImg';
import ModalProject from './ModalProject';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [currentProjetc, setCurrentProject] = useState({});

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <React.Fragment>  
      <ModalProject
        show={modalShow}
        onHide={() => setModalShow(false)}
        project={currentProjetc}
      />
      <section id="projects">
        <Container>
          <div className="project-wrapper">
            <Title title="Proyectos" />
            {projects.map((project) => {
              const { title, info, /*info2,*/ url, repo, images, id } = project;
              
              return (
                <Row key={id}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={300}
                      delay={300}
                      distance="30px"
                      >
                      <div className="project-wrapper__text">
                        <h3 className="project-wrapper__text-title">{title}</h3>
                        <div>
                          <p>{info}</p>
                          {/* <p className="mb-4">{info2 || ''}</p> */}
                        </div>
                        
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          onClick={ () => {
                            setCurrentProject(project)
                            setModalShow(true)
                          }}
                          // href={url || '#!'}
                          >
                          Ver más
                        </a>

                        {url && (
                          <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={url}
                          >
                            Descargar
                          </a>
                        )}

                        {repo && (
                          <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                          >
                            Repositorio
                          </a>
                        )}
                        
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={300}
                      delay={300}
                      distance="30px"
                      >
                      <div className="project-wrapper__image">
                          <div data-tilt className="thumbnail rounded">
                            <ProjectImg alt={title} filename={images[0]} />
                          </div>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              );
            })}
          </div>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Projects;


