import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComp() {
  //   const display = false;
  //   if (display) {
  //     return <Welcome />;
  //   } else {
  //     return <Code />;
  //   }

  // conditional rendring using element variable
//   let message;
//   const display = false;
//   if (display) {
//     message = <h1>Welcome to coding</h1>;
//   } else {
//     message = <h1>Everyday is coding</h1>;
//   }
//   return message;

// rendering using ternary operator
const display = false;
return(
    display ? <Welcome/> : <Code/>
)
}
