import { Col, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Skill.module.css'
import { skills } from './constants'

const Skill = () => {
  return (
    <section className="sectionWrapper" data-aos="zoom-in">
      <Row data-aos="fade-up">
          <h3 className="sectionTitle">Habilidades</h3>
          <div className="lineWrapper">
              <div className="lineColor"></div>
          </div>
          <p className="textFlow mb-5">Tecnologías con las cuales me desenvuelvo.</p>
      </Row>

      <Row>
        {skills.map((skill, index) => (
          <Col key={ index } xs={12} sm={3} className="mb-4" data-aos="fade-up">
            <p className={ `${styles.textFlow} textFlow` }>
              { skill.name }
            </p>
            <ProgressBar 
            className={ styles.progress } 
            animated now={ skill.range }
            label={ `${ skill.range }%` } />
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Skill