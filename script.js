let body = document.body
let addtaskbtn = document.querySelector(".add_toBucket")
let maincontainer = document.querySelector(".main_container")

addtaskbtn.addEventListener("click", createmodal)

function createmodal(){
    let modalContainer = document.querySelector(".modal_container")
    if(modalContainer == null){
        modalContainer = document.createElement("div")
        modalContainer.setAttribute("class", "modal_container")
        modalContainer.innerHTML = `            <div class = "title_container">
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

            <input type="date" id="start" name="trip-start"
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
console.log(savebtnclicked)

savebtnclicked.addEventListener("click", function(e){
    let taskname = document.querySelector(".task_name")
    let dropdown = document.querySelector(".drop_down")
    modalContainer.remove()
    createtask(taskname.value, dropdown.value)
})


}


function createtask(title, priority){
    let ticketcontainer = document.createElement("div")
    ticketcontainer.setAttribute("class", "ticket_container")
    ticketcontainer.innerHTML = `<div class="ticket_container">
    <div class="icon_container">
        <i class="fas fa-ellipsis-h"></i>
        <div class = "task_title">${title}</div>
    </div>`


    maincontainer.appendChild(ticketcontainer)
}