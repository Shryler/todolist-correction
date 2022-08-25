import React from 'react';
import './addTask.css';
import { FaCheckSquare } from 'react-icons/fa';

const AddTask = (props) => {
    return (
        <div className="row no-gutters task-detail">
            <div className="d-flex p-3 justify-content-between align-items-center">
                <div className='w-100 pe-3 m-auto'>
                    <input type="text" className="form-control" placeholder='Nom de la tache' />
                </div>
            <button type='button' className="btn btn-sm btn-outline-success d-flex">
                <FaCheckSquare />
            </button>
            </div>
        </div>
    );
};

export default AddTask;