//!fetches data from the conttent htmls and then presents it
//rev up those friers! here it begins
function init() {
    let links, numlinks;

    links = document.getElementsByTagName("a");

    for(let i = 0; i < links.length; i++) {
        //could also try for attach event but yeah
        links[i].addEventListener("click", function(event) {
            if(event.preventDefault)
                event.preventDefault();

            else if (event.stopPropagation)
                event.stopPropagation();
            else
                event.returnValue = false;

            //makes the request with the id
            makerequest('pages/content' + this.id + '.txt', 'content');
            return false;
        },false);
    }
}
if(window.addEventListener) {
    window.addEventListener("load", init, false);
}
