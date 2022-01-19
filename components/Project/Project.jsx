import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './Project.module.css'
import { projects } from './constants'

const Project = () => {
  return (
    <section className="sectionWrapper" data-aos="zoom-in">
      <Row data-aos="fade-up">
          <h3 className="sectionTitle">Proyectos</h3>
          <div className="lineWrapper">
              <div className="lineColor"></div>
          </div>
          <p className="textFlow mb-5">Algunos de los proyectos realizados.</p>
      </Row>

      <Row>
        {projects.map((project, index) => (
          <Col key={index} md={6} lg={4} data-aos="fade-up">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <Image
                  className={styles.cardImage}
                  src={project.image} 
                  alt={project.name}
                  width={100}
                  height={100}
                  layout='responsive'
                  />
                </a>                    
              </div>

              <div className={styles.cardBody}>
                <h4 className={styles.cardTitle}>{project.name}</h4>
                <p>{project.type}</p>
              </div>

              <div className={styles.cardFooter}>
                <a href={project.url} target="_blank" rel="noreferrer">
                  <i className="fas fa-external-link-alt" /> Ver Proyecto
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