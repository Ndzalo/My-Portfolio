const firebaseConfig = {
    apiKey: "AIzaSyCDUjGoGt8py3ok6DxPLlf1YtbrotXwZPU",
    authDomain: "taskconnect-7425c.firebaseapp.com",
    databaseURL: "https://taskconnect-7425c-default-rtdb.firebaseio.com",
    projectId: "taskconnect-7425c",
    storageBucket: "taskconnect-7425c.appspot.com",
    messagingSenderId: "560045668386",
    appId: "1:560045668386:web:4c9177752e271106b2f27b",
    measurementId: "G-N5EW7WV9SD"
  };
// initialize firebase
  firebase.initializeApp(firebaseConfig);

  //
  var FormDB = firebase.database().ref("Form");
  // Reference to the payments collection
var paymentsDB = firebase.database().ref("payments");


  document.getElementById("Form").addEventListener("submit", submitForm);


  function submitForm(e){
    e.preventDefault();
    var name = getElementByVal("name");
    var emailid= getElementByVal("emailid");
    var msgContent = getElementByVal("msgContent");

   // console.log(name,emailid,msgContent);
   saveMssages(name,emailid,msgContent);

   // enable alert
     document.querySelector(".alert").style.display = "block";

     // remove the alert 
     setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
     }, 3000);

     // resert the form
     document.getElementById("Form").reset();
  }
  const saveMssages = (name,emailid,msgContent) =>{
     var newForm = FormDB.push();
     newForm.set({
        name:name,
        emailid:emailid,
        msgContent:msgContent,
     })
  };
  const getElementByVal = (id) =>{
    return document.getElementById(id).value;
  }

  // Function to save payment details to Firebase Realtime Database
function savePayment(userId, amount, currency, status) {
    // Create a new entry under 'payments'
    var newPayment = paymentsDB.push();
    
    // Set the payment data
    newPayment.set({
      userId: userId,
      amount: amount,
      currency: currency,
      status: status,
      timestamp: new Date().toISOString() // Adding the current timestamp
    });
  }
  
  // Example usage of savePayment
  savePayment("user124", 100, "ZAR", "pending");
  


  