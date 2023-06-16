import { Container, Spinner } from "reactstrap"

const LoadingPage = () => (
    <Container
        fluid
        className='p-0 d-flex justify-content-center align-items-center'
        style={{
            height: '100vh'
        }}
    >
        <Spinner
            style={{
                height: '25rem',
                width: '25rem'
            }}
        />
    </Container>
)

export default LoadingPage