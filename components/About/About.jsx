import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'
import styles from './About.module.css'

const About = () => {
    return (
        <section id="about" className="sectionWrapper" data-aos="zoom-in">
            <Row data-aos="fade-up">
                <h3 className="sectionTitle">Acerca de</h3>
                <div className="lineWrapper">
                    <div className="lineColor"></div>
                </div>
            </Row>

            <Row>
                <Col sm={4} data-aos="fade-up">
                    <Image
                    className={ styles.avatar }
                    src="/assets/images/alodor.png" 
                    alt="Alodor"
                    width={500}
                    height={500}
                    />
                </Col>

                <Col sm={8} data-aos="fade-up">
                    <p className="textFlow">Me llamo José Alejandro Méndez Sánchez, Ingeniero Informático Venezolano apasionado por la tecnología. Alodor es mi seudónimo, el mismo es un acrónimo originado a partir de un juego de palabras.</p>

                    <p className="textFlow">Soy un desarrollador con más de 4 años de experiencia en tecnologías web. Especialista en solución de problemas mediante metodologías ágiles.</p>

                    <p className="textFlow">Siempre tengo interés por aprender, probar y aplicar nuevas herramientas o soluciones.</p>

                    <p className="textFlow">En la actualidad busco llegar al siguiente nivel, convertirme en un desarrollador que pueda dominar tanto el Frontend como el Backend y poder aportar todos mis conocimientos en un entorno colaborativo.</p>
                </Col>
            </Row>
        </section>
    )
}

export default About