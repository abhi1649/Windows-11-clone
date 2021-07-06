let start = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let sidebar = document.getElementsByClassName("sidebar")[0]
let right = document.getElementsByClassName("right")[0]
let searchicon = document.getElementsByClassName("searchicon")[0]
let search = document.getElementsByClassName("search")[0]
let vscode = document.getElementsByClassName("vscode")[0]
let vsicon2 = document.getElementsByClassName("vsicon2")[0]
let fileicon = document.getElementsByClassName("fileicon")[0]
let file = document.getElementsByClassName("file")[0]

start.addEventListener("click", ()=>{
    console.log("clicked");
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-655px"
    }
    else{
        sidebar.style.right="-395px"
        startmenu.style.bottom = "50px"
        search.style.bottom="-540px"
        vscode.style.bottom = "-670px"
    }
})

right.addEventListener("click",()=>{
    if(sidebar.style.right == "-395px"){
        search.style.bottom="-540px"
        startmenu.style.bottom = "-655px"
        sidebar.style.right ="0px"
    }else{
        sidebar.style.right="-395px"
    }
})

searchicon.addEventListener("click",()=>{
    if(search.style.bottom == "-540px"){
        sidebar.style.right="-395px"
        startmenu.style.bottom = "-655px"
        search.style.bottom="40px"
        vscode.style.bottom = "-670px"
        file.style.bottom="-400px"
    }else{
        search.style.bottom="-540px"
    }
})

vsicon2.addEventListener("click",()=>{
    // console.log("hello")
    if(vscode.style.bottom == "-670px"){
        search.style.bottom="-540px"
        sidebar.style.right="-395px"
        startmenu.style.bottom = "-655px"
        vscode.style.bottom = "40px"
        file.style.bottom="-400px"
    }else{
        vscode.style.bottom = "-670px"
    }
})

fileicon.addEventListener("click",()=>{
    if(file.style.bottom=="-400px"){
        vscode.style.bottom = "-670px"
        search.style.bottom="-540px"
        sidebar.style.right="-395px"
        startmenu.style.bottom = "-655px"
        file.style.bottom="150px"
    }else{
        file.style.bottom="-400px"
    }
})
