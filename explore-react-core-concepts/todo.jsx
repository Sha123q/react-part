// export default function Todo({task, isDone}){
//   if(isDone === true){
//     return <li>Finished:{task}</li>
//   }
//   else{
//     return <li>Work on:{task}</li>
//   }
// }



// export default function Todo({task, isDone}){
//   if(isDone){
//     return <li>Finished:{task}</li>
//   } 
//    return <li>Work on:{task}</li>
  
// }
//  ternary operatort 
// export default function Todo({task, isDone}){
//     return (
//         <li>{isDone ? 'Finishe': 'Work on'} : {task}</li>
//     )
// }


// conditional rendering  option 4
export default function Todo({task, isDone}){
    return (
        <li>{task} {isDone || ':Do it'}</li>
    )
}