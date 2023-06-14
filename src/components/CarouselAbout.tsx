import { useState } from 'react';
import { Carousel, CarouselIndicators, CarouselItem, Container, List } from 'reactstrap';

import 'scss/css/style.css';
import 'styles/CarouselAbout.css';

const items: JSX.Element[] = [
    <Container
        fluid
        className='carousel-container p-0 fs-4'
    >
        <span className='fs-1 fw-bold'>
            Misión
        </span>
        <br/>
        Capacitar a los asociados empresariales en las habilidades y destrezas propias del desarrollo de su trabajo, encaminadas al cumplimiento y logros de objetivos y metas de su propia empresa.
    </Container>,
    <Container
        fluid
        className='carousel-container p-0 fs-4'
    >
        <span className='fs-1 fw-bold'>
            Visión
        </span>
        <br/>
        Impulsar el crecimiento empresarial promoviendo la capacitación efectiva asumiendo las políticas de cada empresa buscando estrategias didácticas acopladas a sus requerimientos internos.
    </Container>,
    <Container
        fluid
        className='carousel-container p-0 fs-4'
    >
        <span className='fs-1 fw-bold'>
            Valores
        </span>
        <List className='row'>
            <li className='col-md-6'>Honestidad</li>
            <li className='col-md-6'>Responsabilidad</li>
            <li className='col-md-6'>Confianza</li>
            <li className='col-md-6'>Empatía</li>
            <li className='col-md-6'>Disciplina</li>
            <li className='col-md-6'>Perseverancia</li>
            <li className='col-md-6'>Creatividad</li>
        </List>
    </Container>
]

const CarouselAbout = (): JSX.Element => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [animating, setAnimating] = useState<boolean>(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex: number) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item, index) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
        >
            {item}
        </CarouselItem>
    ));

    return (
        <Carousel
            activeIndex={activeIndex}
            dark
            next={next}
            previous={previous}
            className='carousel-about'
        >
            <CarouselIndicators
                items={slides}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
        </Carousel>
    )
}

export default CarouselAbout;