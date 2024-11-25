const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("listcontainer");

function addtask(){
    if(inputbox.value === ''){
        alert("Input Text")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ""
}

listContainer.addEventListener("click", function(e){
    if (e.target.tag.Name == "LI") {
        e.target.classList.toogle("checked")
        }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove()
    }
}, false)