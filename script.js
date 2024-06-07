const inputBox = document.querySelector("#inputBox");
const listCon = document.querySelector("#listContainer");

function addTask(){
    if(inputBox.value == '') 
    {
        alert("Your must write something!");
    }
    else 
    {
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span);   
    }
    inputBox.value = '';
    // save data calling
    savedata();

}
listCon.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        // save data calling
        savedata();
        
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        // save data calling
        savedata();
    }
},false);

// holding screen reload time / save data 
function savedata() 
{
    localStorage.setItem("data",listCon.innerHTML);
}
function showTask(){
    listCon.innerHTML = localStorage.getItem("data");
}
showTask();