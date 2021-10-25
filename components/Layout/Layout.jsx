import { Container, Row } from 'react-bootstrap'
import styles from './Layout.module.css'

import Contact from '../Contact/Contact'

const Layout = () => {
    return (
        <main className={ styles.backgroundWrapper }>
            <Container>
                <Row>
                    <Contact />
                </Row>
            </Container>
        </main>
    )
}

export default Layout