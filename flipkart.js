 var login=document.getElementById('login');
var model=document.getElementById('model');
var close=document.getElementById('close');

login.onclick=function(){
    model.style.display="block"; 
}
close.onclick=function(){
    model.style.display="none";
}

window.onclick=function(e){
    if(e.target==model){
        model.style.display="none";
    }
}
function MyLogin(){
    var email=document.getElementById('email');
    var pass=document.getElementById('pass');

    if(email.value=="kamdeayushree@gmail.com")
    {
        if(pass.value=="xyz123")
        {
            alert("Welcome to my page");
        }
        else{
            alert("Incorrect Password")
        }
    }
    else{
        alert("Not registered email");
    }
}


var sindex=1;

var s=document.getElementsByClassName('slide');


function goslide(n){
    slideshow(sindex=sindex+n)
}

function load(){
    s[sindex-1].style.display="block";
}

function slideshow(n){
    var i;

     var count=s.length;

    if(n>count){
        sindex=1;
    }
    if(n<1){
        sindex=count;
    }
    for(i=0;i<count;i++)
    {
        s[i].style.display="none";
    }

    s[sindex-1].style.display="block";

    setTimeout(slideshow,2000);  
   }
  