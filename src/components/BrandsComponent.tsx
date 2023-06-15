import { Container } from "reactstrap"

import { importAll } from "helpers/ImportAll";

import 'scss/css/style.css';

const context = require.context('/src/assets/brands', false, /^(?!\.\/).*\.webp$/);
const imageList = importAll(context) as string[];

const BrandsComponent = (): JSX.Element => {
    return(
        <Container
            fluid
            className='overflow-x-scroll d-flex p-0 py-5'
        >
            {
                imageList.map((image, index) => (
                    <img
                        src={image}
                        key={index}
                        alt='logo de una empresa'
                        className='img-fluid mx-4 user-select-none'
                        draggable={false}
                        style={{
                            minHeight: '100px',
                            maxHeight: '15vh',
                            objectFit: 'contain'
                        }}
                    />
                ))
            }
        </Container>
    )
}

export default BrandsComponent;