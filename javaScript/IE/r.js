const frm=document.querySelector("#f1");
// frm.onsubmit=function(){
//     //code
// }

frm.addEventListener("submit",checkData);

function checkData(f){

    const fna=document.querySelector("#fullName").value;

    const fnaexp=/^[a-zA-Z]*$/;

    if(fnaexp.test(fna)===false  )
    {
        document.querySelector("#errfna").innerHTML=`plz enter valid name`;
        f.preventDefault();
        
    }
    else{
        document.querySelector("#errfna").innerHTML="";
    }

 //phone number 
    
 const phone = document.querySelector("#phone").value;
 const phoneRegex = /^[6-9]\d{9}$/; 

 if (phoneRegex.test(phone)===false || phone==="") {
     document.querySelector("#errph").innerHTML = "Please enter a valid phone number (10 digits starting with 6-9).";
     f.preventDefault(); 
 } else {
     document.querySelector("#errph").innerHTML = "";
 }


 //password



}











// const frm = document.querySelector("#f1");

// frm.addEventListener("submit", checkData);

// function checkData(event) {

//     const fullName = document.querySelector("#fullName").value;
//     const fullNameRegex = /^[a-zA-Z\s]+$/; 

//     if (!fullNameRegex.test(fullName) || fullName === "") {
//         document.querySelector("#errfna").innerHTML = "Please enter a valid full name.";
//         event.preventDefault();
//     } else {
//         document.querySelector("#errfna").innerHTML = "";
//     }

//     const password = document.querySelector("#password").value;
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; 

//     if (!passwordRegex.test(password)) {
//         document.querySelector("#errpw").innerHTML = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
//         event.preventDefault();
//     } else {
//         document.querySelector("#errpw").innerHTML = "";
//     }

//     const email = document.querySelector("#email").value;
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//     if (!emailRegex.test(email)) {
//         document.querySelector("#erremial").innerHTML = "Please enter a valid email address.";
//         event.preventDefault();
//     } else {
//         document.querySelector("#erremial").innerHTML = "";
//     }

//     const phone = document.querySelector("#phone").value;
//     const phoneRegex = /^[6-9]\d{9}$/; 

//     if (!phoneRegex.test(phone) || phone === "") { // Added check for empty phone number
//         document.querySelector("#errph").innerHTML = "Please enter a valid phone number (10 digits starting with 6-9).";
//         event.preventDefault();
//     } else {
//         document.querySelector("#errph").innerHTML = "";
//     }

//     const pincode = document.querySelector("#pincode").value;
//     const pincodeRegex = /^\d{6}$/;

//     if (!pincodeRegex.test(pincode)) {
//         document.querySelector("#errpin").innerHTML = "Please enter a valid 6-digit pincode.";
//         event.preventDefault();
//     } else {
//         document.querySelector("#errpin").innerHTML = "";
//     }

//     // If all validations pass, you can submit the form here
//     // e.g., 
//     // if (fullNameRegex.test(fullName) && passwordRegex.test(password) && emailRegex.test(email) && phoneRegex.test(phone) && pincodeRegex.test(pincode)) {
//     //     // Submit the form (e.g., send data to server)
//     // }
// }

