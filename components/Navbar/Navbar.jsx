import { Navbar, Nav, Container } from 'react-bootstrap'
import Image from 'next/image'
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
                        <Nav.Link href="#">Inicio</Nav.Link>
                        <Nav.Link href="#">Acerca de</Nav.Link>
                        <Nav.Link href="#">Habilidades</Nav.Link>
                        <Nav.Link href="#">Proyectos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp