var ButtonRegister = document.getElementById("ButtonRegister");
var ButtonInput = document.getElementById("ButtonInput");
var buttonUpIn = document.querySelector("button");
let userNane = document.getElementById("name");
var userPass = document.getElementById("password");
var i = 0;

var span = document.createElement("span");
var span1 =  document.createElement("span");
    span.id = "span";
    span1.id = "spanEm";
    userPass.addEventListener("focusout", function () {validatePassword()})

// Clicking the SignUp button will create 2 new <input> nodes
function SignUp() {
    var elem = document.getElementById("form_sing_in");
    var pPass = document.createElement("p");
    var inputPass = document.createElement("input");
    var pEmal = document.createElement("p");
    var inputEmail = document.createElement("input");
    var spanEm = document.createElement("span");
    
    pPass.innerHTML = "Confirm Password";
    pPass.id = "pPass";

    inputPass.type = "password";
    inputPass.id = "ConPassword";
    
    pEmal.innerHTML = "Email";
    pEmal.id = "pEmal";

    inputEmail.type = "email";
    inputEmail.id = "email";

    elem.appendChild(pPass);
    elem.appendChild(inputPass);
    elem.appendChild(span);
    elem.appendChild(pEmal);
    elem.appendChild(inputEmail);
    elem.appendChild(span1);

    document.getElementById("ConPassword").onkeyup = function() {checkPass()};
    document.getElementById("email").addEventListener("focusout", function() {checkEm()});
    
    spanP.innerText = null;
    userNane.value= "";
    userPass.value = "";

    ButtonRegister.style.color = "#00112b";
    ButtonInput.style.color = "white"; 
    ButtonInput.style.backgroundColor = "#081118";
    ButtonInput.style.opacity = ".8";
    ButtonRegister.style.backgroundColor = "transparent";
    ButtonRegister.style.opacity = "1"
}
// Clicking the SignIn button deletes the 2 <input> nodes created by js
function SignIn () {
     ButtonRegister.style.color = "white";
    ButtonInput.style.color = "#00112b";
    ButtonRegister.style.backgroundColor = "#081118";
    ButtonRegister.style.opacity = ".8";
    ButtonInput.style.backgroundColor = "transparent";
    ButtonInput.style.opacity = "1"

    userNane.value= "";
    userPass.value = "";
    spanN.innerText = "";
    span.innerText = "";
    spanEm.innerText = null;
   
    document.getElementById ("ConPassword").remove();
    document.getElementById ("pPass").remove();
    document.getElementById ("pEmal").remove();
    document.getElementById ("email").remove();
    document.getElementById ("span").remove();
    document.getElementById ("spanEm").remove();


}

// checks which button is click (Sing Up or Sing In)
function clickButton(e) {
    if  (e.target.value === "Sing Up" ){
        i++;
        if (i === 1){
            buttonUpIn.innerText = "SIGN UP";
            buttonUpIn.name = "SIGN UP";
            SignUp(); 
        }
    } else if (e.target.value === "Sing In" ){
        buttonUpIn.innerText = "SIGN IN";
        buttonUpIn.name = "SIGN IN";
        SignIn ();
        i = 0 ;
    }
}

// save User data
function saveUser() {
    // let userNane = document.getElementById("name");
    let email = document.getElementById("email");
    var user = {};
    user.name = userNane.value;
    user.password = userPass.value;
    if (buttonUpIn.name === "SIGN UP")  {
    user.email = email.value;}
    return user;
    //  console.log (user);

}

// checks passwording match
function checkPass(){
    
        if (document.getElementById("ConPassword").value === userPass.value) {
            span.innerText= "Retrying password is  correct.";
            span.style.color = " rgb(97 244 93)";
            span.innerText="" 
        } else {
            span.innerText =  "Retrying password is not correct.";
            span.style.color = "rgb(241, 113, 113)";  
                
        }
}

//  validate <input> type=password
function  validatePassword() {
    if ( !userPass.value.match(/[a-z]/g) ||
    !userPass.value.match(/[A-Z]/g) ||
    !userPass.value.match(/[0-9]/g) ||
    password.length < 8) {
        return spanP.innerText = " enter the correct kind of password";
        }  else { 
           return spanP.innerText= ""; 
        }
};

// checks email match
function checkEm(){
    var em = document.getElementById("email").value;
    var spanEm = document.getElementById("spanEm");
   if (validateEmail(em) == false) {
    spanEm.innerText = "Email not correct. (example: ab@cd.com)";
   } else {spanEm.innerText = "";}
}



// validate <input> type=email
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
}

// validate Form
forms.addEventListener("submit",validateForm);

function validateForm(e){ 
       e.preventDefault();
    var userNaneValue = document.getElementById("name").value;
    var passwordValue = document.getElementById("password").value;
    var spanP = document.getElementById("spanP"); 
    spanP.innerText = "";
    if (buttonUpIn.name === "SIGN IN") {
        if (userNaneValue == "" || passwordValue == "") {
            spanP.innerText = "Login or password is not correct";
            
        return false;
        }
    } else {
        spanP.innerText = "";}
    if (buttonUpIn.name === "SIGN UP") {
        spanP.innerText = "";
        var conPassValue = document.getElementById("ConPassword").value;
        var spanCP = document.getElementById("span");
        var spanEm = document.getElementById("spanEm");
        var email = document.getElementById("email").value;
        var spanN = document.getElementById("spanN");
        if (userNaneValue == ""){
            spanN.innerText = "fill in all fields";
            return false;
        } else { spanN.innerText = "";}
        
        if (passwordValue == "" && conPassValue == "" && passwordValue === conPassValue){
            spanCP.innerText = "fill in the all fields";
        return false;
        } else {spanCP.innerText ="";}
        if (validateEmail(email) == false) {
            spanEm.innerText = "fill in the all fields";
        return false;
        } else {spanEm.innerText ="";}
        
    }
    
    let userName = document.getElementById("name");
    var user = {};
    user.name = userName.value;
    user.password = userPass.value;
    if (buttonUpIn.name === "SIGN UP")  {
    user.email = email.value;}    
  
// debugger
    let userPost = JSON.stringify(user);

 fetch("https://jsonplaceholder.typicode.com/users", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: userPost
                })
    .then(response => response.json())
    .then((response) => {
      console.log( response)
        if(confirm("Thank you, registration completed successfully")){
            window.location.href = 'https://www.w3schools.com/';
        }
    })
    .catch( error => alert (error))
};


