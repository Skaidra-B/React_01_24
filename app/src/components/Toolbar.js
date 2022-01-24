import React, {useContext} from 'react';
import mainContext from "../Context/mainContext";

const Toolbar = () => {

    const {getUser} = useContext(mainContext)

    return (
        <div className="toolbar">
            <h2>Users count: {getUser.length}</h2>
        </div>
    );
};

export default Toolbar;