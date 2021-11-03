function toggle(){
    var ele = document.getElementById("navbar");
    console.log(ele.className);
    if(ele.className==="navbar res"){
        ele.className = "navbar"
    }
    else{
        ele.className="navbar res"
    }
}