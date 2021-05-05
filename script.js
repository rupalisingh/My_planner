'use strict';
let body = document.body
let maincontainer = document.querySelector(".main_container")
let allticketarr = []


//  add task
let addtaskbtn = document.querySelector(".add_toBucket")
addtaskbtn.addEventListener("click", createmodal)

function createmodal(){
    let modalContainer = document.querySelector(".modal_container")
    if(modalContainer == null){
        modalContainer = document.createElement("div")
        modalContainer.setAttribute("class", "modal_container")
        modalContainer.innerHTML = `<i class="fas fa-times-circle"></i>
        <div class = "title_container">
            <input type="text" class = "task_name" placeholder="Enter task name here">
            <textarea class="description" placeholder="Write Description"></textarea>
        </div>
        <div class = "choose_priority">
            <label>Task Priority: <select class="drop_down">
                <option >Priority 1</option>
                <option >Priority 2</option>
                <option >Priority 3</option>
                <option >Priority 4</option>
              </select></label>
           
              <label >Due Date: <input type="date" class="duedate" name="trip-start"
                value="2018-07-22"
                min="2019-01-01" max="2050-12-31"></label>
               
        </div>
        <div class = "savebtn">
            <button type = "button" class="save_btn">Save task</button>
        </div>`

        
    }

    body.appendChild(modalContainer)
  
    // close modal using x button

    let closemodalbtn = document.querySelector(".fa-times-circle")
    closemodalbtn.addEventListener("click", closemodal)
    function closemodal(){
        if(modalContainer != null){
        modalContainer.remove()
    }

}
    addtasktopage(modalContainer)
    
}

function addtasktopage(modalContainer){
    let savebtnclicked = document.querySelector(".save_btn")
    savebtnclicked.addEventListener("click", function(e){
        let uid = uuidv4()
        let taskname = document.querySelector(".task_name")
        let dropdown = document.querySelector(".drop_down")
        let duedate = document.querySelector(".duedate")
        modalContainer.remove()
        createtask(taskname.value, dropdown.value, duedate.value, uid)
})
}


function createtask(title, priority, duedate, uid){
    let ticketcontainer = document.createElement("div")
    ticketcontainer.setAttribute("class", "ticket_container")
    ticketcontainer.innerHTML = `<div class="icon_container">
    <div class="kebab">
    <i class="fas fa-ellipsis-h"></i>
    
    </div>
    <div class="dropdown_content">
    <a class = "view" href="#" id = "view" value = "${uid}">View</a>
    <a class = "Edit" href="#" id = "Edit" value = "${uid}">Edit</a>
    <a class = "delete" href="#" id = "delete" value = "${uid}">Delete</a>
    </div>
    </div>
    <div class = "information">
    <div class = "tasktitlediv"><h1 class = "task_title">${title}</h1></div>
    <div class = "sub_information">
    <h4 class = "priority_selected">Urgency : ${priority}</h4>
    <h4 class="due_date">Due date: ${duedate}</h4>
    
    </div>
    </div>`
    
    maincontainer.appendChild(ticketcontainer)
    allticketarr.push([uid, ticketcontainer])
    localStorage.setItem("Alltickets", allticketarr)
    //console.log(allticketarr)

    // Delete task

    let deletebtn = ticketcontainer.querySelector(".delete")
    deletebtn.addEventListener("click", deletetask)

    // View Task

    let viewbtn = ticketcontainer.querySelector(".view")
    viewbtn.addEventListener("click", viewtask)

    
}

function deletetask(e){
    console.log("clicked")
    let currticketcontainer = e.currentTarget;
    console.log(currticketcontainer)
    let uid = currticketcontainer.getAttribute("value")
    for(let i = 0; i< allticketarr.length; i++){
        let id = (allticketarr[i])[0]
        let ticketselected = (allticketarr[i])[1]
        if(id == uid){
            let arr1 = allticketarr.splice(0, i)
            let arr2 = allticketarr.splice(i+1, allticketarr.length)
            allticketarr = arr1.concat(arr2)
            localStorage.setItem("Alltickets", allticketarr)
            ticketselected.remove()
        }
      
    }
   
    
}

function viewtask(e){
    
}




function uuidv4() {
    return 'xxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}