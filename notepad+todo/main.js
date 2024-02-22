const inputbox=document.getElementById("input-box");
const listc=document.getElementById("list-container");

function addtask(){
    if(inputbox.value === ''){
        alert("you must write something !");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listc.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); 
    }
    inputbox.value = "";
    savedata();
}
listc.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listc.innerHTML);
}

function showtask(){
    listc.innerHTML = localStorage.getItem("data");
}
showtask();

const notecontainer=document.querySelector(".notes-container");
const createbtn=document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function shownotes(){
    notecontainer.innerHTML = localStorage.getItem("notes");
}
shownotes();

function updatestorage(){
    localStorage.setItem("notes", notecontainer.innerHTML);
}

createbtn.addEventListener("click",()=>{
    let inputbox=document.createElement("p");
    let img=document.createElement("img");
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable","true");
    img.src = "images/trash.png";
    notecontainer.appendChild(inputbox).appendChild(img);
})

notecontainer.addEventListener("click", function(f){
    if(f.target.tagName === "IMG"){
        f.target.parentElement.remove();
        updatestorage();
    }
    else if(f.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup =function(){
                updatestorage();
            }
        })
    }
})

document.addEventListener("keydown", event=>{
    if(event.key === "enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
    })

   