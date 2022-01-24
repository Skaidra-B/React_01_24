import React, {useContext} from 'react';
import mainContext from "../Context/mainContext";

const Users = () => {

    const {getUser, setUser} = useContext(mainContext)

    function removePost(user, index) {
        const result = getUser.filter((x, i) => i !== index)
        setUser(result)
    }
    return (
        <div className="grow1">
            <div className="d-flex wrap">
                {getUser.map((x, i) =>
                    <div className="card" key={i}>
                        <h3>{x.name}</h3>
                        <img src={x.image} alt=""/>
                        <h3>{x.email}</h3>
                        <h3>{x.password1}</h3>
                        <h3>{x.password2}</h3>

                        <button onClick={() => removePost(x, i)}>Delete</button>
                    </div>)}
            </div>
        </div>
    );
};

export default Users;