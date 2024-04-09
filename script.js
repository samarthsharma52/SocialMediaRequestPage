var isstatus = document.querySelector("h5")
var btn = document.querySelector("#Add")
var check = 0

btn.addEventListener("click", function(){
    if(check == 0)
    {
        isstatus.innerHTML = "Friend"
        isstatus.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }
    else{
        isstatus.innerHTML = "Stranger"
        isstatus.style.color = "Black"
        btn.innerHTML = "Add Friend"
        check = 0
    }
    
})
