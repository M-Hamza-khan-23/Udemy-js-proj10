const Zscreen = document.querySelector(".container");

let zoom = 1;
let zoomspeed = 0.1;

document.addEventListener(wheel,(e)=>{

    if(e.deltaY > 0)
    {
        Zscreen.style.transform = `scale(${(zoom += zoomspeed)})`;
    }
    else{
        Zscreen.style.transform = `scale(${(zoom -= zoomspeed)})`;
    }


});