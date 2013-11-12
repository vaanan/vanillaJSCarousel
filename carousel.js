/*
Using a Modular Function to warp around and immediately execute our carousel code
 */

(function(){
    var startX;

    //Attaching event handlers for when user clicks on the Mouse by checking for addEventListener and if not present, falling back to attachEvent for Internet Explorer 8 and older
    if (window.addEventListener){
        document.getElementById("carousel").addEventListener("mousedown",scrollCarousel,false);
    }
    else if (window.attachEvent){
        document.getElementById("carousel").attachEvent("onmousedown", scrollCarousel);
    }

    //Function to handle the mousedown event fired when user clicks on the carousel
    function scrollCarousel(event){

        //Getting the Mouse X-Coordinate for Chrome, Firefox
        if (event.pageX){
            startX= event.pageX;
        }
        //For Internet Explorer
        else if (event.clientX){
            startX= event.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft;
        }

        //Attaching event handlers for on mouse up when the user releases the Mouse Click
        if (window.addEventListener){
            this.addEventListener("mouseup", moveHandlerStop, false);
        }
        //For Internet Explorer versions 8 and below
        else if (window.attachEvent){
            this.attachEvent("onmouseup",moveHandlerStop);
        }

        //Attaching event handlers for on mouse move when the user moves the Mouse position while holding on to the click button
        if (window.addEventListener){
            this.addEventListener("mousemove", moveHandler, false);
        }
        //For Internet Explorer versions 8 and below
        else if (window.attachEvent){
            this.attachEvent("onmousemove",moveHandler);
        }
    }

    function moveHandler(event){
        //Getting the Mouse X-Coordinate
        var currentMouseXPos;
        var moveBy;
        //For Chrome, Firefox
        if (event.pageX){
            currentMouseXPos= event.pageX;
        }
        //For Internet Explorer
        else if (event.clientX){
            currentMouseXPos= event.clientX + document.body.scrollLeft+ document.documentElement.scrollLeft;
        }
        moveBy=currentMouseXPos-startX;
        document.getElementById("carousel").scrollLeft+=moveBy;//Causing the carousel to scroll by the same distance that the Mouse pointer has moved
    }

    function moveHandlerStop(){
        //If user releases the Mouse button, removing the event handlers
        if (window.removeEventListener){
            document.getElementById("carousel").removeEventListener("mousemove", moveHandler, false);
            document.getElementById("carousel").removeEventListener("mouseup", moveHandlerStop, false);
        }
        //For Internet Explorer versions 8 and below
        else if (window.detachEvent){
            document.getElementById("carousel").detachEvent("onmousemove", moveHandler);
            document.getElementById("carousel").detachEvent("onmouseup", moveHandlerStop);
        }
    }
}());

