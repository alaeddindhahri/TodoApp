function addTask(idParent,idTaskText){
    var taskDescription=document.getElementById(idTaskText).value;
    //testing for empty task description
    if (taskDescription.length==0){
        alert("please input a task description!");
        return false;
    }
    //getting task description
    var divTask = document.createElement("DIV");
    divTask.setAttribute("class","task");

    //setting complete-undo button
    var btncu=document.createElement("INPUT");
    btncu.setAttribute("type","button");
    btncu.setAttribute("value","Complete");
    btncu.setAttribute("class","complete-undo");

    //setting delete button
    var btndelete=document.createElement("INPUT");
    btndelete.setAttribute("type","button");
    btndelete.setAttribute("value","Delete");
    btndelete.setAttribute("class","delete");

    //setting task paragraph
    var pTask=document.createElement("P");
    pTask.setAttribute("class","task-description");
    var txtTask = document.createTextNode(taskDescription);
    pTask.appendChild(txtTask);

    //setting the task div
    divTask.appendChild(btncu);
    divTask.appendChild(btndelete);
    divTask.appendChild(pTask);

    //appending new task div to the parent
    var parent=document.getElementById(idParent);
    parent.appendChild(divTask);
    document.getElementById(idTaskText).value="";
    document.getElementById(idTaskText).focus();
    //#### adding the event listener on every new task
    // Delete buttons
    var btnList = document.querySelectorAll('.delete');
    for(var btnDelete of btnList){
        btnDelete.addEventListener('click',function(){
            this.parentElement.remove();
        });
    }
    // Complete-undo buttons
    var btnUCList = document.querySelectorAll(".complete-undo");
        btnUCList[(btnUCList.length)-1].addEventListener('click',function(){
            if(btnUCList[(btnUCList.length)-1].value=="Complete"){
                btnUCList[(btnUCList.length)-1].value="Undo";
                btnUCList[(btnUCList.length)-1].parentElement.childNodes[2].style.textDecoration="line-through";
            }else{
                btnUCList[(btnUCList.length)-1].value="Complete";
                btnUCList[(btnUCList.length)-1].parentElement.childNodes[2].style.textDecoration="none";
            }
        });
}