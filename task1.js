var home=document.getElementById("home")
var about = document.getElementById("about");
var contact=document.getElementById("contact")
var login=document.getElementById("login");
var theme=document.getElementById("theme");
var list= document.getElementsByClassName("list2")[0];

const btn = () => {
    if(list.style.display==="none"||list.style.display===""){
        list.style.display="block";
    }
    else{
        list.style.display="none";

    }
}
const about1 = () => {
    if (about.style.display === "none" || about.style.display === "") {
        home.style.display = "none";
        about.style.display = "block";
        contact.style.display = "none";
        login.style.display = "none";
    } 
}
const contact1 = () => {
    if (contact.style.display === "none" || contact.style.display === "") {
        home.style.display = "none";
        about.style.display = "none";
        contact.style.display = "block";
        login.style.display = "none";
    } 
}
const login1 = () => {
    if (login.style.display === "none" || login.style.display === "") {
        home.style.display = "none";
        about.style.display = "none";
        contact.style.display = "none";
        login.style.display = "block";
    } 
}
const home1 = () => {
    if (home.style.display === "none" || home.style.display === "") {
        home.style.display = "block";
        about.style.display = "none";
        contact.style.display = "none";
        login.style.display = "none";
    } 
}
function theme1(){
    const cur= document.documentElement.getAttribute('data-theme');

    if(cur==='dark'){
        document.documentElement.setAttribute('data-theme','light');
    }
    else{
        document.documentElement.setAttribute('data-theme','dark');

    }
}