function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        

    };

const serviceID= "service_wag5buq";
const templateID="template_5c78yb3";

emailjs
    .send(serviceID,templateID,params)
    .then((res) => {
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("message").value= "";
        console.log(res);
        alert("your message sent successfully");

    })
    .catch((err) => console.log(err));

}






var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}



var sidemenu= document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0"

}

function closemenu(){
    sidemenu.style.right = "-200px"
    
}

