import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    const createUser = async (email, password, name, photo, phone, address) => {
        setLoading(true);

        try{

            const userCredintial = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Test user: ", userCredintial.user);
            const newUser = userCredintial.user;

        const response = await fetch("http://localhost:5000/userList",
            {
                method: "POST",
                headers: {
                    "content-type" : "application/json",
                },
                body: JSON.stringify(
                    {
                        email: newUser.email,
                        displayName: name,
                        phoneNumber: phone,
                        photoURL: photo,
                        address: address,
                        userId: newUser.uid,
                        isAdmin: false,
                    }
            )
            }
        )
        return userCredintial;
        }catch (error) {
            console.log(error);
        }
    };

    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }


    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, async (currentUser)=>{
            // console.log(currentUser);
            // if a user exist or logged in
            if(currentUser){
                try{

                    const response = await fetch(`http://localhost:5000/userList/${currentUser.uid}`);

                    if(! response.ok){
                        throw new error("Failed to Fetch");
                    }

                    const data = await response.json();
                    setUser(data);

                } catch (error){
                    
                }
            }else{
                setUser(null);
            }
            // setUser(currentUser);
            setLoading(false);
        })

        return ()=>{
            unSubscribe();
        }

    },[])

    const authInfo = {
        logOut,
        signIn,
        updateUserProfile,
        user,
        loading,
        createUser,
    };
  return (
  <AuthContext.Provider value={authInfo} >{children}</AuthContext.Provider>
  )
}

export default AuthProvider
