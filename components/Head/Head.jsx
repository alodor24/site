import Head from 'next/head'

const HeadApp = () => {
    return (
        <Head>
            <meta property="og:image" content="/assets/images/bg-hero.jpg" />
            <meta name="description" content="Diseño y desarrollo de aplicaciones web con estandares actuales de UI/UX, Seguridad y Compatibilidad con distintos navegadores y dispositivos." />
            <meta name="keywords" content="diseño web, desarrollo de páginas web, elaboración de sitios web, diseño web, alodor, desarrollo de app, comercio electrónico, tienda virtual, crear carrito de compra, diseño responsive, blog, aplicaciones web" />
            <link rel="icon" href="/assets/images/favicon.ico" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossOrigin="anonymous" />
            <title>Alodor | Portafolio Profesional</title>
        </Head>
    )
}

export default HeadApp