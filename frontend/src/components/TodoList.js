import axios from "axios";
import React, { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete } from 'react-icons/md';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl"

export default function TodoList({todos=[], setTodos}){
    const [show, setShow]= useState(false);
    const [record, setRecord]= useState(null);

    const handleClose= ()=>{
        setShow(false);
    }
    const handleDelete= (id)=>{
        axios.delete(`api/todos/${id}/`)
        .then(()=>{
            const newTodos= todos.filter((t)=>{
                return t.id !== id
            });
            setTodos(newTodos)
        }).catch(()=>{
            alert("ha habido un error borando")
        })
    }

    const handleUpdate= async(id, value) =>{
        return axios.patch(`/api/todos/${id}/`, value)
            .then((res)=>{
                const { data }= res;
                const newTodos = todos.map(t =>{
                    if (t.id===id){
                        return data;
                    }
                    return t;    
                })
                setTodos(newTodos);
            }).catch(()=> {
                alert("algo salio mal con handleUpdate")
            })
    }
    const renderListGroupItem = (t) => {
        return <ListGroup.Item 
                key={t.id}
                className= 'd-flex justify-content-between align-item-center'>
                    <div className="d-flex justify-content-center">
                        <span style={{
                            marginRight:'12px',
                            cursor: "pointer"
                        }} onClick={()=> {
                            handleUpdate(t.id, {
                                completed: !t.completed
                            })
                        }}>
                            {t.completed === true ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        </span>
                        <span>{t.name}</span>    
                    </div>    
                    <div>
                        <MdEdit 
                            style={{marginRight: '12px', cursor:"pointer"}}
                            onClick={()=>{
                                setRecord(t);
                                setShow(true);
                            }}
                            />
                        <MdDelete style={{cursor:"pointer"}}
                            onClick={()=>{handleDelete(t.id)}}    
                            />
                    </div>
                    </ListGroup.Item>
    }
    const handleChangeForm = (e) =>{
        setRecord({
            ...record,
            name: e.target.value
        })
    }
    const handleSave= async ()=>{
        await handleUpdate(record.id, { name: record.name });
        handleClose();
    }
    const completedTodos= todos.filter(t=> t.completed===true);
    const incompletedTodos= todos.filter(t=> t.completed===false);
    return (
        <div>
            <div className="mb-2 mt-1">
                Todos completadas ({completedTodos.length})
            </div>
            <ListGroup>
                {completedTodos.map(renderListGroupItem)}
            </ListGroup>
            <div className="mb-2 mt-1">
                Todos incompletas ({incompletedTodos.length})
            </div>
            <ListGroup>
                {incompletedTodos.map(renderListGroupItem)}
            </ListGroup>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Edit Todo button
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormControl 
                        value={record ? record.name : "no tomo una Todo"}
                        onChange={handleChangeForm}
                        />
                </Modal.Body>
                <Modal.Footer>
                    
                    <Button 
                        variant="primary"
                        onClick= {handleSave}    
                    >Save</Button>

                    <Button 
                        onCLick= {handleClose}
                        variant="secondary"
                    >Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
        
      );
    }
    