import './App.css';
import mainContext from "./Context/mainContext";
import {useRef, useState} from "react";
import Toolbar from "./components/Toolbar";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";


function App() {

const [getUser, setUser] = useState([])

    return (
        <div className="App">
            <mainContext.Provider value={{getUser, setUser}}>
                <Toolbar/>
                <div className="d-flex">
                    <Users/>
                    <CreateUser/>
                </div>
            </mainContext.Provider>
        </div>
    );
}

export default App;
