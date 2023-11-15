import React from "react";


const Hero = ({ user, handleToDoDelete, handleEdit, handleStatusChange }) => {


  const handleEditClick = (e) => {
    e.preventDefault()
    handleEdit()
  }





  return (
    <div className="col-xl-4 col-md-6 col-sm-12 py-3 rounded">
      <div className="card p-3" style={{ backgroundColor: "#ccf5d3", border: "0" }}>
        <div className="card-body">
          <div>
            <span>Name :</span> <span>{user.name}</span>
          </div>
          <div>
            <span>Description : </span> <span>{user.desc}</span>
          </div>
          <div>
            <label htmlFor="status">Status</label>
            <select id="status" className={`${user.status === 'Completed' ? 'light-green-sts' : 'bg-danger'}`}
              value={user.status} onChange={(e) => handleStatusChange(e.target.value)}>
              <option style={{ backgroundColor: "#13ad89" }} value="Completed">Completed</option>
              <option className="btn btn-danger" value="Not Completed">Not Completed</option>
            </select>
          </div>
          <div className="text-end mt-4">
            <button
              className="btn btn-primary me-4 px-4"
              onClick={handleEditClick}
              style={{
                backgroundColor: "#13ad89",
                color: "white",
                border: "0",

              }}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn px-3"
              onClick={handleToDoDelete}
              style={{
                backgroundColor: "#cf5f1d",
                color: "white",
                border: "0",
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;