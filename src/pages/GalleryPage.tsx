import { Col, Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from "reactstrap";

import { importAll } from "helpers/ImportAll";
import { TreningLogoSm } from "assets";

const context = require.context('/src/assets/gallery', false, /^(?!\.\/).*\.webp$/);
const photos = importAll(context);

const GalleryPage = (): JSX.Element => {
    return (
        <Container
            fluid
            className='p-0'
        >
            <Navbar
                container='fluid'
                expand='xs'
                fixed='top'
                className='bg-light user-select-none border-bottom border-2 border-danger'
                style={{
                    minHeight: '70px',
                    height: '10vh'
                }}
            >
                <NavbarBrand
                    href='/'
                    draggable={false}
                >
                    <img
                        src={TreningLogoSm}
                        className='img-fluid'
                        alt='decorative, logo of the company'
                        draggable='false'
                        style={{
                            minHeight: '49px',
                            height: '7vh'
                        }}
                    />
                </NavbarBrand>
                <Nav
                    navbar
                    className='ms-auto bg-light text-end'
                >
                    <NavItem>
                        <NavLink href='/'>
                            Inicio
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
            <Row
                className='px-5'
                style={{
                    paddingTop: '11vh'
                }}
            >
                {
                    photos.map((photo, index) => (
                        <Col
                            md={3}
                            xs={6}
                            key={index}
                            className='px-3 mb-4 text-center
                                d-flex align-items-center justify-content-center
                            '
                        >
                            <img
                                loading='lazy'
                                src={photo}
                                className='img-fluid object-fit-cover user-select-none
                                    border border-3 border-danger
                                '
                                draggable={false}
                                alt=''
                                style={{
                                    maxHeight: '50vh'
                                }}
                            />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default GalleryPage;