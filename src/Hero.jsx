import React from 'react';
// import { useParams } from 'react-router-dom';

const Hero = ({ user, handleToDoDelete, updateCompleteList }) => {


    return (
        <div className='col-xl-4 col-md-6 col-sm-12 py-3 rounded'>
            <div className="card p-3" style={{ backgroundColor: '#ccf5d3', border: '0' }}>
                <div className="card-body">
                    <div>
                        <span>Name :</span> <span>{user.name}</span>
                    </div>
                    <div>
                        <span>Description : </span> <span>{user.desc}</span>
                    </div>
                    <div>
                        <label htmlFor="status">status</label>
                        <select className="select mx-2" id='status' >
                            <option value="Completed">Completed</option>
                            <option value="Not Completed">Not Completed</option>
                        </select>
                    </div>
                    <div className='text-end mt-4'>
                        <button
                            className='btn btn-primary me-4 px-4'
                            onClick={updateCompleteList}
                            style={{
                                backgroundColor: '#13ad89',
                                color: 'white', border: '0'
                            }}
                        >Edit</button>
                        <button
                            type="button"
                            className="btn px-3"
                            onClick={handleToDoDelete}
                            style={{
                                backgroundColor: '#cf5f1d',
                                color: 'white',
                                border: '0'
                            }}
                        >Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Hero;
