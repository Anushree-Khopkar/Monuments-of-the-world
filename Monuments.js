var clicks = 0;
function clickMe(){
    clicks += 1;
    var links = document.getElementsByTagName("a");

    if(clicks%3 == 1){
        document.body.style.backgroundImage ="linear-gradient(to top left, #a9a9a9 18%, #696969 66%)";
        document.body.style.color = "white";
        for(var i = 0; i<links.length; i++){
            if(links[i].href)
            {
                links[i].style.color = "white";
            }
        }
        
    }
    if(clicks%3 == 2){
        document.body.style.backgroundImage= "linear-gradient(to top left, #000000 18%, #696969 93%)";
    }

    if(clicks%3==0){
        document.body.style.backgroundImage = "linear-gradient(315deg, #f3e6e8 10%, #d5d0e5 74%)";
        document.body.style.color = "black";
        for(var i = 0; i<links.length; i++){
            if(links[i].href)
            {
                links[i].style.color = "black";
            }
        }
    }

}
