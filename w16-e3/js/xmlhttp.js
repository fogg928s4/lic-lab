//var bool to check for IE ???

let xmlhttp = false;

//
try {
    //check for older browser versions
    xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
}
catch (e) {
    //if not use trad ActiveX method
    try {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    catch (E){
        xmlhttp = false;
    }
}

//instance ACtiveCX del obj if not using
if(!xmlhttp && typeof XMLHttpRequest != 'undefined') {
    xmlhttp = new XMLHttpRequest();
}

//Request to server, this will be used in eventhandler.js
//first arg is the page, in case contentN.hmtl
//second arg is the id which in this case should be content
function makerequest(serverPage, objID) {
    let obj = document.getElementById(objID);
    //GETS the page requested
    xmlhttp.open("GET", serverPage);
    //now its ready to go
    xmlhttp.onreadystatechange = function() {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
            //remember toadd the div where the stuff will go
            obj.innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}