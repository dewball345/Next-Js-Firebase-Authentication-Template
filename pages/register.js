import React, {useContext, useEffect, useState} from 'react';
import FirebaseAuthProvider, {FBAuthContext} from '../firebase/firebaseauthprovider.js';


export default function Login(){
    return <FirebaseAuthProvider>
        <Log />
    </FirebaseAuthProvider>
}

function Log(){
    let authContext= useContext(FBAuthContext)
    let [username, changeUsername] = useState()
    let [password, changePassword] = useState()


    async function onSubmit(e){
        e.preventDefault();

        const user = {
            username: username,
            password: password,
        }
        
        console.log(authContext)
        var res = await authContext.register(user.username, user.password)
        console.log(res)
        console.clear();
        window.location = '/';
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input 
                    type="text" 
                    required
                    placeholder="Enter username"
                    onChange={
                        (e) => changeUsername(e.target.value)
                    } />
                
                <br />
                <label>Password: </label>
                <input 
                    type="password" 
                    required
                    placeholder="Enter password"
                    onChange={
                        (e) => changePassword(e.target.value)
                    } 
                    />
                <br />
                <input type="submit" />
            </form> 
        </div>
    )

}