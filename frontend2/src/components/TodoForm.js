import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import axios from "axios";

export default function TodoForm({todos, setTodos}) {
    const [name, setName] = useState('');

    const handleSubmit= evento=>{
        evento.preventDefault();
        if(!name){
            alert("por favor ingrese un nombre correcto");
            return;
        }
        axios.post(`https://gabolondon-improved-enigma-6xjpr7r5747356w7-8000.preview.app.github.dev/api/todos/`, { 
            name: name 
            }).then((res) =>{
            setName("");
            const { data }= res;
            setTodos([
                ...todos,
                data
            ])    
            }).catch(()=>{alert("algo salio mal agregando todo")})
    }
    const handleChange = evento => {
        setName(evento.target.value);
    }
    return <Form onSubmit={handleSubmit}>
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