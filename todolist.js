let theInput =document.querySelector('.add-task input'),
    theButton=document.querySelector('.add-task .plus'),
    tasksContainer=document.querySelector('.tasks-content'),
    tasksCount=document.querySelector('.tasks-count span'),
    tassksCompleted=document.querySelector('.tasks-completed span');

window.onload=function(){
    theInput.focus()
}

theButton.onclick=function(){
    if(theInput.value==''){

        alert('Please Enter a Task')
    }
    else{
    let  noTaskingMsg=document.querySelector('.no-tasks-message');

        if(document.body.contains(noTaskingMsg)){
            noTaskingMsg.remove();
        }
      
        let mainSpan=document.createElement('span');
        mainSpan.appendChild(document.createTextNode(theInput.value));
        mainSpan.className="task-box";
        
        let deleteElement=document.createElement('span');
        deleteElement.appendChild(document.createTextNode('Delete'));
        deleteElement.className='delete';
    
        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);

        theInput.value='';

        theInput.focus();
        calculateTasks()
    }
}

document.addEventListener('click',function (e) {
    if(e.target.className=='delete'){

        e.target.parentNode.remove()

        if(tasksContainer.childElementCount == 0){

            createNoTasks();
        }
    }

    if(e.target.classList.contains('task-box')){

        e.target.classList.toggle('finished')
    }
    calculateTasks()
  })

function createNoTasks(){

    let msgSpan=document.createElement('span');

    msgSpan.appendChild(document.createTextNode('No Tasks To Show'))

    msgSpan.className='no-tasks-message';

    tasksContainer.appendChild(msgSpan)
}

function calculateTasks() {
    
    tasksCount.innerHTML=document.querySelectorAll('.tasks-content .task-box').length;

    tassksCompleted.innerHTML=document.querySelectorAll('.tasks-content .finished').length;

}
