import { Col, Row } from 'react-bootstrap'
import styles from './Project.module.css'

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
        <Col sm={3}>
        </Col>
      </Row>
    </section>
  )
}

export default Project