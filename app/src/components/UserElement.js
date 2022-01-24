import React, {useContext, useState, useRef} from 'react';
import mainContext from "../Context/mainContext";

const UserElement = () => {

    const {getUser, setUser} = useContext(mainContext)

    const name = useRef()
    const image = useRef()
    const email = useRef()
    const password1 = useRef()
    const password2 = useRef()

    const [getError, setError] = useState(null)

    function submit() {

        if (name.current.value.length < 3 || name.current.value.length > 10) return setError("wrong name")
        if (!image.current.value.includes("http")) return setError("image is wrong")
        if (!email.current.value.includes("@")) return setError("wrong email")
        if (password1.current.value.length < 3 || password1.current.value.length > 10) return ("password1 is wrong")
        if (password2.current.value.length < 3 || password2.current.value.length > 10) return ("password2 is wrong")
        if (password1.current.value !== password2.current.value) return setError('passwords do not match')
        setError(null)

        const user = {
            name: name.current.value,
            image: image.current.value,
            email: email.current.value,
            password1: password1.current.value,
            password2: password1.current.value
        }

        setUser([...getUser, user])
        name.current.value = ""
        image.current.value = ""
        email.current.value = ""
        password1.current.value = ""
        password2.current.value = ""
    }
    return (
        <div>
            <div className="d-flex j-center grow1">
                <div className="d-flex column">
                    <input ref={name} type="text" placeholder="name"/>
                    <input ref={image} type="text" placeholder="image"/>
                    <input ref={email} type="text" placeholder="email"/>
                    <input ref={password1} type="text" placeholder="password1"/>
                    <input ref={password2} type="text" placeholder="password2"/>
                    {getError && <div>{getError}</div>}
                    <button onClick={submit}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default UserElement;