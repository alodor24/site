import { Navbar, Nav, Container } from 'react-bootstrap'
import Image from 'next/image'
import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

const NavbarApp = () => {
    return (
        <Navbar 
        collapseOnSelect 
        expand="lg" 
        bg="dark" 
        variant="dark" 
        fixed="top"
        className={ styles.navbarShadow }
        >
            <Container>
                <Navbar.Brand href="#">
                    <Image 
                    className={ styles.navbarLogo }
                    src="/assets/images/logo-blanco.svg" 
                    alt="Alodor Logo" 
                    width={180}
                    height={50}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Link className={styles.navbarLink} to="hero" offset={-85}>Inicio</Link>
                        <Link className={styles.navbarLink} to="about" offset={-85}>Acerca de</Link>
                        <Link className={styles.navbarLink} to="skill" offset={-85}>Habilidades</Link>
                        <Link className={styles.navbarLink} to="project" offset={-85}>Proyectos</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp