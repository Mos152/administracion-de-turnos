import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, 
    Modal,
    Form,
    Header
} from 'semantic-ui-react';
import { useForm } from "react-hook-form"

export default function ModalTurno(){

    const {register, handleSubmit} = useForm();
    const [open, setOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());


    return (
        <Modal
      onClose=  {() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button size='massive' >Agregar turno</Button>}
      >
      <Modal.Header>defina el turno</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
                <Form >
                     
                    <Form.Field>
                    <Header as='h4'>cliente/a</Header>
                        <Form.Input fluid width={6} ref={register}/>
                    </Form.Field>
                    <Header as='h4'>asignar trabajo</Header>
                    <Form.Field
                    label='analia'
                    control='input'
                    type='radio'
                    name='htmlRadios'
                    ref={register}
                    />
                    <Form.Field
                    label='milena'
                    control='input'
                    type='radio'
                    name='htmlRadios'
                    ref={register}
                    />
                    <Form.Field
                    label='mercedes'
                    control='input'
                    type='radio'
                    name='htmlRadios'
                    ref={register}
                    />
                    <Header as='h3'>fecha de turno</Header>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    <Header as='h3'>monto a pagar</Header>
                    <Form.Input 
                        width={6}
                        defaultValue='52.03'                
                    />
                    <Button type='submit'>registrar</Button>
                </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
    )
}