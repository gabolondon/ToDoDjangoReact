import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdDelete } from 'react-icons/md'

export default function TodoList({todos=[]}){

    const renderListGroupItem = (t) => {
        return <ListGroup.Item 
                key={t.id}
                className= 'd-flex justify-content-between align-item-center'>
                    <div className="d-flex justify-content-center">
                        <span style={{
                            marginRight:'12px',
                            cursor: "pointer"
                        }}>
                            {t.completed === true ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                        </span>
                        <span>{t.name}</span>    
                    </div>    
                    <div>
                        <MdEdit style={{marginRight: '12px', cursor:"pointer"}}/>
                        <MdDelete style={{cursor:"pointer"}}/>
                    </div>


                    </ListGroup.Item>
    }

    return (
        <ListGroup>
            {todos.map(renderListGroupItem)}
        </ListGroup>
      );
    }
    