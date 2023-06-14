import { Container } from "reactstrap"

import 'scss/css/style.css';

const importAll = (location: Record<string, any>): any[] => {
    console.log(location.keys());
    return location.keys().map(location);
}
    
const context = require.context('/src/assets/brands', false, /^(?!\.\/).*\.webp$/);

console.log(context);

const imageList = importAll(context) as string[];

console.log(imageList);

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
                        className='img-fluid mx-4'
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