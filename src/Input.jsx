import { useState, useEffect } from "react";
import React from "react";
import Filter from "./Filter";
import Hero from "./Hero";


const Input = ({ user, setUser }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');

  const addNewUser = () => {
    const newUser = {
      name: name,
      desc: desc,
      status: 'Not Completed', // Default status when adding a new user
    };
    // console.log(newUser);

    const arr = [...user, newUser];

    setUser(arr);
    localStorage.setItem("todolist", JSON.stringify(arr));



    if (editIndex !== null) {
      // Edit existing user
      const updatedUsers = [...user];
      updatedUsers[editIndex] = newUser;
      setUser(updatedUsers);
      setEditIndex(null); // Exit edit mode
    } else {
      // Add new user
      const arr = [...user, newUser];
      setUser(arr);

    }

    localStorage.setItem('todolist', JSON.stringify(user));


    setName("");
    setDesc("");
  };


  useEffect(() => {
    let savedTodo = JSON.parse(localStorage.getItem("todolist"));
    if (Array.isArray(savedTodo)) {
      setUser(savedTodo);
    } else {
      setUser([]); // Set default value if savedTodo is not an array
    }
  }, []);




  const handleToDoDelete = (index) => {
    let reducedTodos = [...user];
    reducedTodos.splice(index, 1);
    setUser(reducedTodos);

    localStorage.setItem("todolist", JSON.stringify(reducedTodos));
    setUser(reducedTodos);
  };


  const handleEdit = (index) => {
    const editUser = user[index];
    setName(editUser.name);
    setDesc(editUser.desc);
    setEditIndex(index);
  };



  const handleFilterChange = (status) => {
    setFilterStatus(status);
  };

  const handleStatusChange = (index, status) => {
    // Update the status of the user at the specified index
    const updatedUser = { ...user[index], status: status };
    const updatedUserList = [...user.slice(0, index), updatedUser, ...user.slice(index + 1)];

    setUser(updatedUser);

    localStorage.setItem("todolist", JSON.stringify(updatedUserList));

  };


  return (
    <form>
      <div className="input-group justify-content-center my-5">
        <input
          type="text"
          value={name}
          className="form-control mx-5 rounded"
          placeholder="To do Name"
          required
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          value={desc}
          className="form-control mx-5 rounded"
          placeholder="To do Name"
          required
          onChange={(event) => setDesc(event.target.value)}
        />

        <div>
          {
            <button
              type="submit"
              onClick={addNewUser}
              className="rounded mx-5"
              style={{
                backgroundColor: '#13ad89',
                color: 'white', border: '0'
              }}
            >
              Add ToDo
            </button>
          }
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <h1>Add To Do</h1>
        </div>
        <div className="col-3">
          <Filter onFilterChange={handleFilterChange}
            setFilterStatus={setFilterStatus}
            filterStatus={filterStatus}
          />
        </div>
      </div>

    
      <div className="row">
        <div className="col">
          {user.map((item, index) => {
            if (filterStatus === 'All' || filterStatus === item.status) {
              return (
                <Hero
                  user={item}
                  handleToDoDelete={() => handleToDoDelete(index)}
                  handleStatusChange={(status) => handleStatusChange(index, status)}
                  handleEdit={() => handleEdit(index)}
                  key={index}
                />

              );
            }
            return null;
          })}
        </div>
      </div>
    </form>

  );
};

export default Input;

