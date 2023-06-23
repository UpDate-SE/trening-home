import { Container } from "reactstrap";

import { importAll } from "helpers/ImportAll";

import 'scss/css/style.css';
import 'styles/CoursesScrollContainer.css';

const context = require.context('/src/assets/courses', false, /^(?!\.\/).*\.webp$/);
const coursesImages = importAll(context) as string[];

const CoursesScrollContainer = (): JSX.Element => {
    return (
        <Container
            fluid
            className='p-2 d-flex overflow-x-scroll gap-5 border border-2 border-dark'
        >
            {coursesImages.map((course, index) => (
                <img
                    key={index}
                    className='image-course user-select-none'
                    src={course}
                    alt=''
                    draggable={false}
                />    
            ))}
        </Container>
    )
}

export default CoursesScrollContainer;