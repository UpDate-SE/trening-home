import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap"

const ContactForm = () => {
    return (
        <Form
            className='ps-md-5'
        >
            <FormGroup>
                <Label
                    for='name'
                    className='fw-bold text-secondary no-outline user-select-none'
                >
                    Nombre
                </Label>
                <Input
                    id='name'
                    bsSize='sm'
                    className='border-2 border-danger'
                    placeholder='Ingresa tu nombre'
                />
            </FormGroup>
            <FormGroup>
                <Label
                    for='phone'
                    className='fw-bold text-secondary no-outline user-select-none'
                >
                    Teléfono
                </Label>
                <Input
                    id='phone'
                    bsSize='sm'
                    className='border-2 border-danger'
                    placeholder='Ingresa tu número de teléfono'
                />
            </FormGroup>
            <FormGroup>
                <Label
                    for='email'
                    className='fw-bold text-secondary no-outline user-select-none'
                >
                    Correo
                </Label>
                <Input
                    id='email'
                    type='email'
                    bsSize='sm'
                    className='border-2 border-danger'
                    placeholder='Ingresa tu correo electrónico'
                />
            </FormGroup>
            <FormGroup>
                <Label
                    for='subject'
                    className='fw-bold text-secondary no-outline user-select-none'
                >
                    Motivo
                </Label>
                <Input
                    id='subject'
                    bsSize='sm'
                    className='border-2 border-danger'
                    placeholder='Ingresa el motivo de tu consulta'
                />
            </FormGroup>
            <FormGroup>
                <Label
                    for='message'
                    className='fw-bold text-secondary no-outline user-select-none'
                >
                    Mesage
                </Label>
                <Input
                    id='name'
                    type='textarea'
                    bsSize='sm'
                    className='border-2 border-danger'
                    placeholder='Escribe a detalle el mensaje que nos quieras enviar'
                    rows={5}
                    style={{
                        resize: 'none'
                    }}
                />
            </FormGroup>
            <Container
                fluid
                className='p-0 text-end'
            >
                <Button
                    color='danger'
                    type='submit'
                >
                    Enviar Correo
                </Button>
            </Container>
        </Form>
    )
}

export default ContactForm;