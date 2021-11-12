let btnAddTask =document.querySelector('button');
let btnSaveTask =document.querySelector('.update-btn');
let taskName=document.querySelector('#todo-input')


let tasks= getTaskFromLocal();
renderTask(tasks);
btnAddTask.addEventListener('click',function() {
    if(!taskName.value) {
        alert("Vui lòng nhập tên công việc");
        return  false;
    }
    let tasks= getTaskFromLocal();
   
    
    tasks.push({
        name:taskName.value,
    });
    taskName.value='';
     
    localStorage.setItem('tasks',JSON.stringify(tasks));
   renderTask(tasks);

});

function renderTask(tasks=[]) {
  
  let   content ='<ul>'
    tasks.forEach( (task,index)=>{
        content +=
      `<li>
       <div class="task-name" onclick="markTask(this)">${task.name}</div>
       
       <a onclick=" editTask(${index})"> <i class="fas fa-edit"></i></a> 
       <a onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i></a>
 

      </li>`
    })
   content += '</ul>'
    document.querySelector('#result').innerHTML=content;
}

function  getTaskFromLocal() {
    return  localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')): [];
}
function deleteTask(id) {
    
    if(confirm("Bạn có muốn xóa công việc này")) {
      let tasks= getTaskFromLocal();
      tasks.splice(id,1);
      localStorage.setItem('tasks',JSON.stringify(tasks));
      renderTask(getTaskFromLocal());
    }
}
function editTask(id) {
     btnSaveTask.style.display="block";
      btnAddTask.style.display="none";
    let task=getTaskFromLocal();
    if(task.length>0){
        taskName.value=task[id].name;
        btnSaveTask.setAttribute('id',id);

    }
   
}
function updateTask(e){
    let tasks=getTaskFromLocal();
     let taskId=e.getAttribute('id')
   
    
     if(taskId== 0 || taskId) {
         tasks[taskId]={
            name:taskName.value,
         }
         console.log( tasks[taskId]);
       
         localStorage.setItem('tasks',JSON.stringify(tasks)); 
         renderTask(getTaskFromLocal());
     }
     btnSaveTask.style.display="none";
     btnAddTask.style.display="block";
}
function markTask(e){
    
  e.classList.toggle("done");
  
}
