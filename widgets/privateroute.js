import React, { Component, useContext} from 'react';
import {FBAuthContext} from '../firebase/firebaseauthprovider.js';
import Router from 'next/router';

export function PrivateRoute(props){
    let context = useContext(FBAuthContext)

    // console.log("I EXIST")
    // console.log(context.auth);
    // console.log(Object.keys(context.auth));
    // console.log(context.auth['currentUser'])
    if(context.currentUser !== undefined && context.currentUser != null){
        console.log(context.currentUser)
        return props.children
    }
    if(context.isloading){
        return <div>Loading</div>
    }
    Router.push('/login')
    return null
    // return(

    //     <Route {...rest}
    //         render={props => {
    //             console.log("CURRENT USER")
    //             console.log(context.currentUser)
    //             console.log(context.isloading)
    //             console.log("END")
    //             return context.currentUser !== undefined  ? 
    //                  : context.isloading ? <div>Loading</div>: <Redirect to="/login" />
    //         }}>

    //     </Route>
    // );

}