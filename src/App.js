import "./App.css";
import "bootstrap";
import Input from "./Input";
import { useState } from "react";

function App() {

  const [user, setUser] = useState([]);
  return (
    <div className="container">
      <div>
      <h1 className="text-center text-info">MY TO-DO</h1>
      </div>
      <div>
      <Input  user={user} setUser={setUser}/>
      </div>
    </div>
  );
}

export default App;
