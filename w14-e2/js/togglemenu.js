function init() {
    let imgElem = document.getElementById("box");
    let links = document.getElementsByTagName("a"); //get all links
    
    if(imgElem.addEventListener) {
        imgElem.addEventListener("click", function() {
            toggle("box");
        }, false);
    }
    else if (imgElem.attachEvent) { //in case its not supporter ?
        imgElem.attachEvent("onclick", function() {
            toggle("box");
        });
    }

    for(let i = 0; i<links.length; i++) {
        links[i].setAttribute("href", "javascript:void(0)"); //idk
    }
}

//now the toggle function
function toggle(id){
    let el = document.getElementById(id);
    let img = document.getElementById("arrow");
    let box = el.getAttribute("class");

    if (box == "hide"){
        el.setAttribute("class", "show"); //set attribute changes the atributes 
        //("what attribute". "value")
        delay(img, "img/arrowright.png", 400);
    }
    else{
        el.setAttribute("class", "hide");
        delay(img, "img/arrowleft.png", 400);
    }
}

//for the delay/animation
function delay(elem, src, delayTime) {
    window.setTimeout(function(){
        elem.setAttribute("src", src);
    },delayTime);
}

//initializes
if(window.addEventListener) {
    window.addEventListener("load", init, false);
}
