import { useState } from "react"

export default function DisplayMessage() {
    const [message,setMessage] = useState("This is a message");
// function displayMessage(){
//     // return "This is a message"
// }
return [message]
  
}
