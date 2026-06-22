let darktheme = localStorage.getItem("darktheme")
let btn = document.getElementById("btn")

function EnableDarkmode(){
    localStorage.setItem("darktheme","active")
    document.body.classList.add("darkTheme")
}

function disableDarkmode(){
    localStorage.setItem("darktheme","null")
    document.body.classList.remove("darkTheme")
}

if(darktheme === "active"){ EnableDarkmode() }

btn.addEventListener("click",() => {
    darktheme = localStorage.getItem("darktheme")
    
    if(darktheme !== "active"){
         EnableDarkmode()
        
    }else{
        disableDarkmode()
    }
})

