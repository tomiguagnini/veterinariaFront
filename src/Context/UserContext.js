import { createContext, useState } from "react";

const Context = createContext({})

export function UserContextProvider({childeren}) {
    const session = localStorage.length > 0 ? JSON.parse(localStorage.getItem("Session")):''
    const [jwt, setJwt] = useState(session ? session.token:'')
    const [id, setId] = useState(session? session.id: '' )
    
    return <Context.Provider value={{jwt,id,setId, setJwt}}>
        {childeren}
    </Context.Provider>
}

export {Context}