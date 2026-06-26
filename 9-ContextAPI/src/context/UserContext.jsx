import { createContext, useReducer } from "react";

const UserContext = createContext();
function UserProvider({ children }) {
//   const [user, setUser] = useState("");
const [state,dispatch] = useReducer(UserReducer,{user:null});
function UserReducer(state,action){
    if(action.type=="login"){
        return {user:action.payload}
    }
     if(action.type=="logout"){
        return {user:action.payload}
    }
}
  return (
    // <UserContext.Provider value={{ user, setUser }}>
    <UserContext.Provider value={{ ...state, dispatch }}>

      {children}
    </UserContext.Provider>
  );
}
export { UserProvider, UserContext };
