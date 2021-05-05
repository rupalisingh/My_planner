let body = document.body
let addtaskbtn = document.querySelector(".add_toBucket")
let maincontainer = document.querySelector(".main_container")
let closemodalbtn = document.querySelector(".cross")

addtaskbtn.addEventListener("click", createmodal)

function createmodal(){
    let modalContainer = document.querySelector(".modal_container")
    if(modalContainer == null){
        modalContainer = document.createElement("div")
        modalContainer.setAttribute("class", "modal_container")
        modalContainer.innerHTML = `<div class = "title_container">
        <p class="cross">x</p>
        <input type="text" class = "task_name" placeholder="Enter task name here">
        <textarea class="description" placeholder="Write Description"></textarea>
    </div>
    <div class = "choose_priority">
        <label for class="choose_priority"></label>
        <select class="drop_down">
            <option >Priority 1</option>
            <option >Priority 2</option>
            <option >Priority 3</option>
            <option >Priority 4</option>
          </select>
          <label for="start">Due Date:</label>

            <input type="date" class="duedate" name="trip-start"
                value="2018-07-22"
                min="2018-01-01" max="2018-12-31">

          <button type = "button" class="save_btn">Save task</button>
    </div>`
    }
    body.appendChild(modalContainer)
    addtasktopage(modalContainer)
    
}

function addtasktopage(modalContainer){
    let savebtnclicked = document.querySelector(".save_btn")

savebtnclicked.addEventListener("click", function(e){
    let taskname = document.querySelector(".task_name")
    let dropdown = document.querySelector(".drop_down")
    let duedate = document.querySelector(".duedate")
    modalContainer.remove()
    createtask(taskname.value, dropdown.value, duedate.value)
})


}


function createtask(title, priority, duedate){
    let ticketcontainer = document.createElement("div")
    ticketcontainer.setAttribute("class", "ticket_container")
    ticketcontainer.innerHTML = `<div class="icon_container">
        <div class="kebab">
            <i class="fas fa-ellipsis-h"></i>
        </div>
        <div class="dropdown_content">
            <a class = "view" href="#">View</a>
            <a class = "Edit" href="#">Edit</a>
            <a class = "delete" href="#">Delete</a>
        </div>
    </div>
    <div class = "information">
        <div class = "task_title">${title}</div>
        <div class = "priority_selected">${priority}</div>
        <div class="due_date">${duedate}</div>
    </div>
</div>`

    maincontainer.appendChild(ticketcontainer)
    kebabmenuoptions(ticketcontainer)

}

function kebabmenuoptions (ticketcontainer){
    let kebabmenu = document.querySelector(".fa-ellipsis-h")
    kebabmenu.addEventListener("click", kebabdropdownlist)
}

function kebabdropdownlist(){

}