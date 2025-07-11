
let nameOk = false;
let phoneOk = false;
let mailOk = false;
let messageOk = false;


function validateName(){
    const name = document.getElementById('name');
    
    if(!name.value){
        name.style.borderColor = "var(--Wrong)";
        name.style.borderStyle = "solid";
        document.getElementById('name-error').hidden = false;
        nameOk = false;
    } else {
        document.getElementById('name-error').hidden = true;
        name.style.borderColor = "var(--Right)";
        name.style.borderStyle = "solid"; 
        nameOk = true;
    }
    
  
}

function validatePhone(){
    const phone = document.getElementById("phone");
    const phoneValue = phone.value.trim();
    
    document.getElementById('phone-error1').hidden = true;
    document.getElementById('phone-error2').hidden = true;
    
    if(!phone.value ){
        phone.style.borderColor = "var(--Wrong)";
        phone.style.borderStyle = "solid";
        document.getElementById('phone-error2').hidden = false;
        phoneOk = false; 
    } else if (!/^\d+$/.test(phoneValue)){
        phone.style.borderColor = "var(--Wrong)";
        phone.style.borderStyle = "solid";
        document.getElementById('phone-error1').hidden = false;
        phoneOk = false; 
    } else {
        
        phone.style.borderColor = "var(--Right)";
        phone.style.borderStyle = "solid"; 
        phoneOk = true;
    }
    
   
}

function validateMail(){
    const email = document.getElementById("email");
    const emailValue = email.value.trim();
    

    document.getElementById('email-error1').hidden = true;
    document.getElementById('email-error2').hidden = true;
    
    if(!email.value){
        email.style.borderColor = "var(--Wrong)";
        email.style.borderStyle = "solid";
        document.getElementById('email-error2').hidden = false;
        mailOk = false;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)){
        email.style.borderColor = "var(--Wrong)";
        email.style.borderStyle = "solid";
        document.getElementById('email-error1').hidden = false;
        mailOk = false;
    } else {
        
        email.style.borderColor = "var(--Right)";
        mailOk = true;
    }
    
    
}


function validateMessage(){
    const message = document.getElementById("message");
    const messageValue = message.value.trim();
    
    
    document.getElementById('message-error1').hidden = true;
    document.getElementById('message-error2').hidden = true;
    
    if(!message.value){
        message.style.borderColor = "var(--Wrong)";
        message.style.borderStyle = "solid";
        document.getElementById('message-error2').hidden = false;
        messageOk = false;
    } else if(messageValue.length < 10){
        message.style.borderColor = "var(--Wrong)";
        message.style.borderStyle = "solid";
        document.getElementById('message-error1').hidden = false;
        messageOk = false;
    } else {
        message.style.borderColor = "var(--Right)";
        message.style.borderStyle = "solid";
        messageOk = true;
    }
    
    console.log(`la variable messageOk esta: ${messageOk}`);
}


function checkValues(){
    if(nameOk && phoneOk && mailOk && messageOk){
        console.log('todo ok');
        
        showModal();
    } else {
        document.getElementById("general-error").hidden = false;
    }

}

function showModal(){
    const modalComponent = document.querySelector('#modal');
    if(modalComponent && modalComponent.showModal) {
        modalComponent.showModal(); 
    } else {
        console.error('Modal component not found or not implemented at all');
    }
}
function hideModal(){
    const modalComponent = document.querySelector('#modal');
    if(modalComponent && modalComponent.hideModal) {
        modalComponent.hideModal();
    }
}

