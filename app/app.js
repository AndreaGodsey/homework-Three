import { changeRoute } from "../model/model.js";

var button = ".browsecontainer .buttonClass"
console.log(button);




function initListeners() {
    $(".bars").click(function (e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function (e){
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(window).on("hashchange", changeRoute);
    changeRoute();
}

$(document).on("click", button, function(e){
    let btnID = e.currentTarget.id;
    console.log("The " +btnID+ " was clicked");
})

$(document).ready(function (){
    initListeners();
})