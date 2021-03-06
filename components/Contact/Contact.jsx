import { Col, Row } from 'react-bootstrap'
import styles from './Contact.module.css'

const Contact = () => {
    return (
        <section className={ styles.sectionWrapper } data-aos="zoom-in">
            <Row>
                <h3 className={ styles.sectionTitle } data-aos="fade-up">Tú tranquilo</h3>
                <h4 className={ styles.sectionSubtitle } data-aos="fade-up">que del trabajo web yo me encargo.</h4>
            </Row>

            <Row>
                <Col xs={{ span: 2, offset: 3, }} data-aos="fade-up">
                    <a 
                    className={ styles.sectionIcon }
                    href="https://www.linkedin.com/in/alejo-mndz/" 
                    target="_blank" 
                    title="Linkedin" 
                    rel="noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </Col>

                <Col xs={2} data-aos="fade-up">
                    <a 
                    className={ styles.sectionIcon }
                    href="https://github.com/alodor24" 
                    target="_blank" 
                    title="Github" 
                    rel="noreferrer">
                        <i className="fab fa-github-square"></i>
                    </a>
                </Col>

                <Col xs={2} data-aos="fade-up">
                    <a 
                    className={ styles.sectionIcon }
                    href="https://t.me/alejo_mndz" 
                    target="_blank" 
                    title="Telegram" 
                    rel="noreferrer">
                        <i className="fab fa-telegram-plane"></i>
                    </a>
                </Col>
            </Row>
        </section>
    )
}

export default Contact