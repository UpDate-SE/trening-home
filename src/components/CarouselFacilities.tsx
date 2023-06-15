import { useState } from 'react';
import { Carousel, CarouselIndicators, CarouselItem } from 'reactstrap';

import { importAll } from 'helpers/ImportAll';

import 'scss/css/style.css';
import 'styles/CarouselFacilities.css';

const context = require.context('/src/assets/facilities', false, /^(?!\.\/).*\.webp$/);
const items = importAll(context);

const CarouselFacilities = () => {
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

    const slides = items.map((item,index) => (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={index}
        >
            <img
                src={item}
                draggable={false}
                alt='imagen decorativa, las instalaciones de Trening'
                className='img-fluid user-select-none'
            />
        </CarouselItem>
    ));

    return (
        <Carousel
            activeIndex={activeIndex}
            dark
            next={next}
            previous={previous}
            className='carousel-facilities'
        >
            <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
            />
            {slides}
        </Carousel>
    )
}

export default CarouselFacilities;