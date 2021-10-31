import { Container, Row } from 'react-bootstrap'
import styles from './Layout.module.css'

import Hero from '../Hero/Hero'
import About from '../About/About'
import Contact from '../Contact/Contact'

const Layout = () => {
    return (
        <main className={ styles.backgroundWrapper }>
            <Hero />
            <Container>
                <Row>
                    <About />
                </Row>
                <Row>
                    <Contact />
                </Row>
            </Container>
        </main>
    )
}

export default Layout