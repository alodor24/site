import { Col, Row } from 'react-bootstrap'
import styles from './Project.module.css'
import { projects } from './constants'

const Project = () => {
  return (
    <section className="sectionWrapper">
      <Row>
          <h3 className="sectionTitle">Proyectos</h3>
          <div className="lineWrapper">
              <div className="lineColor"></div>
          </div>
          <p className="textFlow mb-5">Algunos de los proyectos realizados.</p>
      </Row>

      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4}>
            <div className="card-project">
              <div className="card-project-header">
                <a href={project.url} target="_blank" rel="noreferrer">
                  {/* <img className="img-fluid" src={project.image} /> */}
                </a>                    
              </div>

              <div className="card-project-body">
                <h4 className="card-title">{project.name}</h4>
                <p>{project.type}</p>
              </div>

              <div className="card-project-footer">
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt"></i>
                  Ver Proyecto
                </a>
              </div>
            </div>              
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Project