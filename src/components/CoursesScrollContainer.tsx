import { Container } from "reactstrap";

import 'scss/css/style.css';
import 'styles/CoursesScrollContainer.css';

type Course = {
    image: string;
    alt: string;
    ref: string;
}

type CoursesScrollContainerProps = {
    courses: Course[];
}

const CoursesScrollContainer = ({courses}: CoursesScrollContainerProps): JSX.Element => {
    return (
        <Container
            fluid
            className='p-2 d-flex overflow-x-scroll gap-5 border border-2 border-dark'
        >
            {courses.map((course, index) => {
                return(
                    <a
                        href={course.ref} 
                        key={index}
                        draggable={false}
                    >
                        <img
                            src={course.image}
                            className='img-fluid image-course user-select-none'
                            draggable={false}
                            alt={course.alt}
                        />
                    </a>
                )
            })}
        </Container>
    )
}

export default CoursesScrollContainer;