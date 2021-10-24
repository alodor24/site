import { Container, Row } from 'react-bootstrap'
import styles from './Footer.module.css'

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <footer className={ styles.footerWrapper }>
            <Container>
                <Row>
                    <p className={ styles.footerText }>© Todos los derechos reservados. { year } - Desarrollado por Alodor</p>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer