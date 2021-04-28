import {FBAuthContext} from '../firebase/firebaseauthprovider'
import {useContext} from 'react'

export default function Thing(){
    let thing = useContext(FBAuthContext)
    console.log(thing)
    return <h1>Hi</h1>
}