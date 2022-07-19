 //const tasks = new TaskManager();
//tasks.addTask('kanagu','f','g','06-06-2021','todo');
//console.log(tasks);

const taskForm=document.getElementById('nTask');

taskForm.addEventListener('click',(event)=>{
    event.preventDefault();

    const newTaskName =document.getElementById("new-Task-Name");
    const newTaskDescription =document.getElementById("new-Task-Description");
    const newTaskAssignedTo =document.getElementById("new-Task-AssignedTo");
    const newTaskDueDate =document.getElementById("new-Task-DueDate");
    const errorMessage = document.getElementById("alertMessage");
    

const name = newTaskName.value;
const description = newTaskDescription.value;
const assignedTo = newTaskAssignedTo.value;
const dueDate = newTaskDueDate.value;


 if((name.length === 0 || !isNaN(name))|| (assignedTo.length ===0 || !isNaN(assignedTo)) || (description.length === 0)||(dueDate.length === 0)) {
document.getElementById("alertMessage").innerHTML="Please Type Valid Input Fields";
errorMessage.style.display = "block"
 }

else{
    errorMessage.style.display = "none"
    tasks.addTask(name,description,assignedTo, dueDate);
    tasks.render();
    
    }
   
    



    });

const taskList=document.getElementById("dotaskCard");
taskList.addEventListener('click',(event)=>{
    if(event.target.classList.contains('done-button')){
        const parentTask=event.target.parentElement.parentElement;
        console.log(parentTask);
        const taskId=Number(parentTask.dataset.taskId);
        console.log(taskId);
        const task= tasks.getTaskById(taskId);
        console.log(task);
        task.status='DONE';
        tasks.save();
        tasks.render();
      
    }
    if(event.target.classList.contains('delete-button')){
    const parentTask=event.target.parentElement.parentElement;
    const taskId=Number(parentTask.dataset.taskId);
    tasks.deleteTask(taskId);
    tasks.save();
    tasks.render();
    console.log(tasks.length);
    }
    
   
});
// const emptyTaskList=document.getElementById("task-list");

// emptyTaskList.addEventListener('click',(event)=>{
//     event.preventDefault();
//     if(tasks.save.length ===0){
//         document.getElementById("empty-list").innerHTML="No more tasks";
//         emptyTaskList.style.display="block";
       
//     }
    
// })









 
//console.log(tasks);

//const taskHtml=createTaskHtml('abcd','sss','fff','10/10/2021','todo');

//console.log(taskHtml);

