import { createContext , useContext , useEffect, useState } from "react";
import {auth ,db} from '../firebase'
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateCurrentUser,
  } from "firebase/auth";
import {setDoc , doc} from 'firebase/firestore'

const AuthContext = createContext()

// Authentication setup with the firebase
export function AuthContextProvider({children}){
    const [user , setUser]= useState({})

    // Signup Function  
    function signUp(email , password){
         createUserWithEmailAndPassword(auth ,email ,password)
        //  Automatically creating a users file which will save the data on firebase storage
         setDoc(doc(db,'users',email),{
            savedShows: []
         })
    }
    // SignIn Function
    function logIn(email, password){
        return signInWithEmailAndPassword(auth , email ,password)
    }
    // Signout Function
    function logOut(){
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    })

    return(
        <AuthContext.Provider value={{signUp ,logIn ,logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth(){
    return useContext(AuthContext)
}