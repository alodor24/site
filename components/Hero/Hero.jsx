import { Container } from 'react-bootstrap'
import styles from './Hero.module.css'

const Hero = () => {

    return (
        <section className={ styles.hero }>
            <div className={ styles.filter }>
                <Container className={ styles.heroContent }>
                    <div>
                        <h1 className={ styles.heroTitle }>José A. Méndez</h1>
                        <h2 className={ styles.heroSubtitle }>Desarrollador Web Front - End</h2>
                        <a className={ styles.heroButtom }>Saber más</a>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Hero