import { Container, Row } from 'react-bootstrap'
import styles from './Layout.module.css'
import Hero from '../Hero'
import About from '../About'
import Skill from '../Skill/Skill'
import Contact from '../Contact'
import Project from '../Project/Project'

const Layout = () => {
    return (
        <main className={ styles.backgroundWrapper }>
            <Hero />
            <Container>
                <Row>
                    <About />
                </Row>
                <Row>
                    <Skill />
                </Row>
                <Row>
                    <Project />
                </Row>
                <Row>
                    <Contact />
                </Row>
            </Container>
        </main>
    )
}

export default Layout