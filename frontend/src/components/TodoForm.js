import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

export default function TodoForm() {
    const [name, setName] = useState('');

    const handleChange = evento => {
        setName(evento.target.value);
    }
    return <Form>
        <InputGroup className='mb-3'>
            <FormControl 
                placeholder='Inserte un nuevo Todo'
                onChange= {handleChange}
                value = {name}
            
            />
            <Button type='submit'>Add</Button>
        </InputGroup>

    </Form>

}