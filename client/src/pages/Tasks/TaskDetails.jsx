

export function TaskDetails(){
  let tasks = ["Task1", "Task2", "Task3", "Task4"];
  return(
    <div>
        <h1>Task Details</h1>
        <div>
            <ul>
              {
                tasks.map((task,i)=>(
                  <li key={i}>{task}</li>
                ))
              }
             
            </ul>
        </div>
    </div>
  )
}