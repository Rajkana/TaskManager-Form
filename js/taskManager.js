const createTaskHtml =(id,name,description,assignedTo,dueDate,status)=>{

  const html=`         
  <div data-task-id=${id}> 
      <div class="card-body cardstyle">
        <div><h6 class="card-title">Task: ${name}
        <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="card-text-todo">
        <p class="card-text"> Assigned To:${assignedTo}</p>
        <p class="duedate">Due-Date:${dueDate}</p>
      </div>
        <p class="card-text"> Description:${description}</p>
        <button type="button" class="btn btn-success done-button ${status === 'TODO' ? 'visible' : 'invisible'}">Mark As Done</button>
        <button type="button" class="delete-button btn btn-danger">Delete</button>
      </div>
      </div>
      <br>`;
  
  return html;
   //lets test it
  //document.getElementById("#dotaskCard").innerHTML = html;
}

class TaskManager{
constructor(tasks, currentId){
    this.tasks=[];
    this.currentId=0;
}

addTask(name,description,assignedTo,dueDate){
    const task={
        id:this.currentId++,
        name:name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status:'TODO'
    };


this.tasks.push(task);

}
deleteTask(taskId){
  const newTasks=[];
  for(let i=0;i<this.tasks.length;i++){
    const task=this.tasks[i];
    if(task.id !== taskId){
      newTasks.push(task);
      
    }
  }
  this.tasks=newTasks;
}



render(){
  const tasksHtmlList = [];

  for(let i=0; i<this.tasks.length; i++){
    const currenttask=this.tasks[i];

    const date=new Date(currenttask.dueDate);
    const formattedDate= (date.getDate()+1)  +'/'+ (date.getMonth()+1) + '/' + date.getFullYear();

    const taskHtml = createTaskHtml(currenttask.id, currenttask.name,currenttask.description, currenttask.assignedTo, formattedDate, currenttask.status);
   
  
  tasksHtmlList.push(taskHtml);
  
}
const tasksHtml = tasksHtmlList.join('\n');
  const tasksList = document.querySelector("#dotaskCard");

  tasksList.innerHTML = tasksHtml;
}

getTaskById(taskId){
  let foundTask=taskId;
  for(let i=0;i<this.tasks.length;i++){
    let task=this.tasks[i];
    if(task.id===taskId){
      return task;
    }
  }
  
}


save(){
  const tasksJson=JSON.stringify(this.tasks);
  localStorage.setItem('tasks', tasksJson);
  const currentId=String(this.currentId);
  localStorage.setItem('currentId',currentId)
}

load(){
  if(localStorage.getItem('tasks')){
    const tasksJson=localStorage.getItem('tasks');
    this.tasks=JSON.parse(tasksJson);
  }
  if(localStorage.getItem('currentId')){
    const currentId=localStorage.getItem('currentId');
    this.currentId=Number(currentId)
  }
  }

}
const tasks = new TaskManager();
tasks.load();
tasks.render();
