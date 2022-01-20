import { Container } from 'react-bootstrap'
import { Link } from 'react-scroll'
import styles from './Hero.module.css'

const Hero = () => {

    return (
        <section id="hero" className={ styles.hero }>
            <div className={ styles.filter }>
                <Container className={ styles.heroContent } data-aos="zoom-in" data-aos-duration="1500">
                    <div>
                        <h1 className={ styles.heroTitle }>José A. Méndez</h1>
                        <h2 className={ styles.heroSubtitle }>Desarrollador Web Front - End</h2>
                        <Link className={ styles.heroButtom } 
                        to="about"
                        offset={-165}>
                            Saber más
                        </Link>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Hero