import { useState } from "react"
import React from 'react';
import Filter from "./Filter";
import Hero from "./Hero";

const Input = ({ user, setUser }) => {

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [completedTodos, setCompletedTodos] = useState([]);

    const addNewUser = () => {
        const newUser = {
            name: name,
            desc: desc
        }
        console.log(newUser);

        const arr = [...user, newUser];
        // arr.push(newUser);

        setUser(arr);

        setName("");
        setDesc("");


    }

    const handleToDoDelete = (index) => {
        let reducedTodos = [...user];
        reducedTodos.splice(index, 1);
        setUser(reducedTodos);

        localStorage.setItem('todolist', JSON.stringify(reducedTodos));
        setUser(reducedTodos);

      
    };

  
    const handleComplete = (e) => {
    e.preventDefault();
    let updateCompleteList = [...completedTodos];
    console.log(updateCompleteList);
    setCompletedTodos(updateCompleteList);
    localStorage.setItem('completeTodo', JSON.stringify(updateCompleteList)
    );


    };

   

    return (
        <form>
            <div className="input-group justify-content-center my-5">
                <input type="text"
                    value={name}
                    className="form-control mx-5 rounded"
                    placeholder="To do Name"
                    onChange={(event) => setName(event.target.value)}

                />
                <input type="text"
                    value={desc}
                    className="form-control mx-5 rounded"
                    placeholder="To do Name"
                    onChange={(event) => setDesc(event.target.value)}

                />

                <div>
                    {
                        name.trim() === "" || desc.trim() === "" ? (
                            <button disabled
                                className="btn btn-danger"
                                type="submit"
                                onClick={addNewUser}> hide
                            </button>

                        ) : (<button
                            type="submit"
                            onClick={addNewUser}
                            className="btn btn-primary rounded mx-5">Add ToDo</button>
                        )
                    }
                </div>

            </div>


            <div className="row">
                <div className="col-9"> <h1>Add To Do</h1></div>
                <div className="col-3"><Filter /></div>
            </div>
            {
                user.map((item,index) => {
                    return <Hero user={item} handleToDoDelete={handleToDoDelete} updateCompleteList={handleComplete} key={index} />
                })
            }
        </form>

    )
}


export default Input;