// export default function Hello(props) {

//   return (
//     <div>{props.person.message} {props.person.name} {props.person.setNumber}</div>
//     // <div>{props.message} {props.name} {props.setNumber}</div>
//   )
// }

// - Destruction Props method

// export default function Hello({ name, message,setNumber }) {
//   return (
//     <div>
//       {message} {name} {setNumber}
//     </div>
//   );
// }

export default function Hello({ person }) {
  return (
    <div>
      <div>{person.message} {person.name} {person.setNumber}</div>
    </div>
  );
}
