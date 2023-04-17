
let screen = document.querySelector(".screen")
let noti = document.getElementById("item-notificate")
let body = document.getElementById('body')
let gradi = document.querySelector(".linear-gradient")
document.getElementById("notification-cancel").onclick = () => {
    noti.style.display = "none"
    gradi.style.display ="none"
}

document.getElementById("notification").onclick =()=>{
    screen.style.display = "inline-block"
    noti.style.display = "flex"
    gradi.style.display ="inline-block"

}

document.getElementById("screen").onclick =()=>{
    screen.style.display = "none"
}

document.getElementById("input-item").onclick = () => {
   
    document.getElementById("input-item").style.outlineColor ="1px solid var(--secondary)"
}

document.getElementById("order2").onclick = ()=> {
}

let order2 = document.getElementById("order2")

if(order2.checked){
    document.getElementById('ord2').addClass("pseudo-active")
}





    $(window).scroll(function(){
    //   var margin = $('.operation-request ').height() - $('.blue').height();
      if($(this).scrollTop()>=100){
        $(".sticky").css("background", "red")
      } 
    });
