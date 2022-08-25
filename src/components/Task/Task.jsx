import React from 'react';
import './task.css';
import { FaTrashAlt } from 'react-icons/fa';

const Task = ({title, completed}) => {
    return (
        <div className="row no-gutters task-detail  mb-2">
            <div className="d-flex p-3 justify-content-between align-items-center">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" checked={completed} />
                    <label className="form-check-label">
                        {title}
                    </label>
                </div>
                <button type='button' className="btn btn-sm btn-outline-danger d-flex">
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default Task;
