// export default function Hello(props) {

//   return (
//     <div>{props.message} {props.name}</div>
//   )
// }

// - Destruction Props method

export default function Hello({ name, message }) {
  return (
    <div>
      {message} {name}
    </div>
  );
}
