document.querySelector("form").addEventListener("submit", function(e){

let emails = document.querySelectorAll("input[type=email]");

if(emails[0].value !== emails[1].value){
alert("Emaily se neshodují!");
e.preventDefault();
}

});