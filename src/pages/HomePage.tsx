import { Button, Col, Container, Row } from "reactstrap";
import { AboutUs, Banner, CollegePrep, Forklift, ShowingInfo, TransportPersonnel } from "assets";

import { BrandsComponent, CarouselAbout, CarouselFacilities, CoursesScrollContainer, NavbarHome } from 'components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import 'scss/css/style.css';
import 'styles/HomePage.css';

const HomePage = ():JSX.Element => {
    return(
        <Container fluid className='p-0 home-page'>
            <NavbarHome />
            <Container id='start-section'
                fluid
                className='p-0 user-select-none banner-top'
                style={{backgroundImage: `url(${Banner})`}}
            >
                <div className='anchor' id='inicio'></div>
            </Container>
            <Container id='us-section'
                fluid
                className='position-relative us py-3'
            >
                <Row>
                    <Col 
                        md={6}
                        className='px-md-5 text-center-md'
                    >
                        <CarouselAbout />
                    </Col>
                    <Col 
                        md={6}
                        className='text-center'
                    >
                        <img
                            src={AboutUs}
                            alt='fotografía de un hombre de pie dando una presentación. Está usando un chaleco naranja de construcción. A su alrededor se alcanzan a ver tres personas sentadas en una mesa con un mantel rojo.'
                            draggable={false}
                            id='image-us'
                            className='img-fluid w-75'
                        />
                    </Col>
                </Row>
                <div className='anchor' id='nosotros'></div>
            </Container>
            <Container id='clients-section'
                fluid
                className='px-md-5 pb-3'
            >
                <span
                    className='fs-3 fw-bold user-select-none'
                >
                    Nuestros Clientes
                </span>
                <BrandsComponent />
            </Container>
            <Container id='courses-section'
                fluid
                className='position-relative courses px-md-5 mb-4'
            >
                <Container fluid
                    className='p-0 pb-3'
                >
                    <span
                        className='fs-2 fw-bold user-select-none'
                    >
                        Cursos con los que contamos
                    </span>
                    <br/>
                    <a
                        href='/galeria'
                        className='fw-bold text-danger opacity-90-hover user-select-none'
                    >
                        <span>
                            Galería de fotos
                        </span>
                    </a>
                    <br/>
                </Container>
                <CoursesScrollContainer
                    courses={[
                        {
                            image: Forklift,
                            alt: 'Imagen promocional de un curso para manejo y operación de montacargas. Se muestra una persona operando un montacargas.',
                            ref: '#courses'
                        },
                        {
                            image: TransportPersonnel,
                            alt: 'Imagen promocional de un curso para personal de transporte. Se muestra una persona conduciendo un autobús.',
                            ref: '#courses'
                        },
                        {
                            image: CollegePrep,
                            alt: 'Imagen promocional de un curso de preparación para entrar a la universidad. Se muestran dos fotografías, a la izquierda se ve el cuerpo de un médico con su bata y su estetoscopio, a la derecha se muestra una mujer con un casco de seguridad amarillo y unos lentes de protección.',
                            ref: '#courses'
                        }
                    ]}
                />
                <Container
                    fluid
                    className='p-0 pt-2 fs-4 text-end'
                >
                    <a
                        href='#courses'
                        className='text-danger fw-bold 
                            user-select-none
                            opacity-75-hover
                        '
                    >
                        Ve nuestro catálogo
                    </a>
                </Container>
                <div className='anchor' id='cursos'></div>
            </Container>
            <Container id='app-section'
                fluid
                className='position-relative app px-md-5 py-3'
            >
                <span
                    className='fs-3 fw-bold user-select-none'
                >
                    App
                </span>
                <br/>
                <span
                    className='fs-5'
                >
                    Si te afilias con nostros te proporcionamos una aplicación dedicada al control de trabajadores postulantes para un curso (o más) porporcionado y certificado por nosotros.
                    <br/>
                    En esta aplicación los adminstradores tienen la capacidad de tener un control de usuarios, búsqueda dinámica y monitoreo de resultados mientras que los usuarios pueden tomar sus cursos en línea, hacer exámenes prácticos y postularse para realizar los examenes prácticos.
                    <br/>
                    <span className='fs-6'>
                        Aplicación desarrollada por <a href='https://advancedcodese.com'>Advanced Code SE</a>
                    </span>
                </span>
                <Container
                    fluid
                    className='p-0 text-end'
                >
                    <span>Si ya eres miembro: </span>
                    <Button
                        color='danger'
                        className='ms-3 fw-bold'
                    >
                        Descarga la app
                    </Button>
                </Container>
                <div className='anchor' id='app'></div>
            </Container>
            <Container id='contact-section'
                fluid
                className='position-relative contact px-md-5 pb-3 pt-0'
            >
                <Row>
                    <Col
                        md={6}
                    >
                        <span
                            className='fs-3 fw-bold user-select-none'
                        >
                            Conoce nuestras instalaciones
                        </span>
                        <CarouselFacilities />
                    </Col>
                    <Col md={1} />
                    <Col
                        md={5}
                    >
                        <Container
                            fluid
                            className='d-flex flex-column
                                justify-content-center align-items-center
                                text-center
                            '
                        >
                            <span
                                className='fs-3 user-select-none'
                            >
                                ¿Tienes alguna duda?
                                <br />
                                No dudes en contactarnos
                            </span>
                            <img
                                src={ShowingInfo}
                                className='mt-3 img-fluid border border-3 border-danger user-select-none'
                                draggable={false}
                                alt='Mujer con una camisa abotonada de color blanco y audífonos, señalando hacia su derecha'    
                            />
                            <span
                                className='px-5'
                            >
                                Av. Industrias #896 int. E. Col Valle Dorado, C.P. 78399 Tel(444) 688 61 83 Cel- 44 46 65 76 36
                            </span>
                            <a
                                href='mailto:atencion@treningslp.com'
                                className='text-decoration-none my-1'
                            >
                                <Button
                                    className='btn-danger opacity-75-hover text-light
                                        d-flex align-items-center'
                                >
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className='fs-3 me-3'
                                    />
                                    atencion@treningslp.com
                                </Button>
                            </a>
                            <Container
                                fluid
                                className='pt-2 d-flex justify-content-evenly'
                            >
                                <Row>
                                    <Col
                                        md={4}
                                        className='mb-2'
                                    >
                                        <a
                                            href='https://www.facebook.com/TreningSLP/'
                                            className='text-decoration-none text-dark opacity-75-hover'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <span
                                                className='d-flex align-items-center justify-content-center'
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faFacebook}
                                                    className='fs-4 me-1'
                                                    color="#1a5fb4"
                                                />
                                                /TreningSLP
                                            </span>
                                        </a>    
                                    </Col>
                                    <Col
                                        md={4}
                                        className='mb-2'
                                    >
                                        <a
                                            href='https://twitter.com/treningslp'
                                            className='text-decoration-none text-dark opacity-75-hover'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <span
                                                className='d-flex align-items-center justify-content-center'
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faTwitter}
                                                    className='fs-4 me-1'
                                                    color="#55ACEE"
                                                />
                                                @TreningSLP
                                            </span>
                                        </a>
                                    </Col>
                                    <Col
                                        md={4}
                                        className='mb-2'
                                    >    
                                        <a
                                            href='https://www.instagram.com/trening.slp/'
                                            className='text-decoration-none text-dark opacity-75-hover'
                                            target='_blank'
                                            rel='noreferrer'
                                        >
                                            <span
                                                className='d-flex align-items-center justify-content-center'
                                            >
                                                <FontAwesomeIcon
                                                    id='instagram'
                                                    icon={faInstagram}
                                                    className='fs-4 me-1'
                                                />
                                                Trening.slp
                                            </span>
                                        </a>
                                    </Col>    
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                </Row>
                <div className='anchor' id='contacto'></div>
            </Container>
            <Container
                fluid
                className='px-md-5'
                style={{
                    backgroundColor: 'lightgray'
                }}
            >
                <span>&copy; Trening SLP 2023. Todos los derechos reservados</span>
            </Container>
        </Container>
    );
}

export default HomePage;