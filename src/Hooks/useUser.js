import { useCallback,useContext } from "react"
import {Context} from "../Context/UserContext"
import serviceUser from "../services/serviceUser"



export default function useUser() {
    const {id,jwt,setId, setJwt} = useContext(Context)
    
    
    const login= useCallback(async (email,password,setError) => {
        const response = await serviceUser.login(email,password,setError);
        const user = {
            email: response.data.email,
            id: response.data.id,
            token: response.data.token,
        };
        setId(user.id)
        setJwt(user.token)
        window.localStorage.setItem("Session", JSON.stringify(user));
        return response
    },[setJwt])
    const logOut = useCallback(()=>{
        setJwt(null);
        setId(null);
    })

    return { 
        isLogged:Boolean(jwt),
        login,
        logOut,
        id,
        jwt,
        setJwt,
        setId,      
    }   
}