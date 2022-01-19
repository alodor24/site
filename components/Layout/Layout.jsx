import { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import styles from './Layout.module.css'
import Head from '../Head'
import Navbar from '../Navbar'
import Hero from '../Hero'
import About from '../About'
import Skill from '../Skill'
import Contact from '../Contact'
import Project from '../Project'
import Footer from '../Footer'
import Loader from '../Loader'
import AOS from 'aos'
import "aos/dist/aos.css"

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            AOS.init()
        }
    }, [])

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            { isLoading && <Loader /> }

            { !isLoading && (
                <div className={styles.fadeIn}>
                    <Head />
                    <Navbar />
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
                    <Footer />
                </div>
            )}
        </>
    )
}

export default Layout