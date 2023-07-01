import React, { useEffect, useState } from "react";
import { createUser } from "./AuthService";
import AuthForm from "./AuthForm";
import Parse from "parse";
import { useNavigate } from 'react-router-dom';


const AuthRegister = (props) => {
    const [newUser, setNewUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [add, setAdd] = useState(false);
    const launch = useNavigate();
    // useEffect that run when changes are made to the state variable flags
    useEffect(() => {
        if (newUser && add) {
            createUser(newUser).then((userCreated) => {
                // console.log(userCreated);
                if (userCreated) {
                    alert(
                        `${userCreated.get("firstName")}, you successfully registered! Click OK to continue.`
                    );
                } 
            // Next, launch the main dashboard 
                launch('/Main');

                setAdd(false);
            });
        }
    }, [newUser, add]);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setNewUser({
            ...newUser,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setAdd(true);
    };

    return (
        <div>
            <AuthForm
                user={newUser}
                onChange={onChangeHandler}
                onSubmit={onSubmitHandler}
            />
        </div>
        
    );
};

export default AuthRegister;