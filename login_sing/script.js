import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
	  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
	  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

	  const firebaseConfig = {
    apiKey: "AIzaSyAErV9NTQbCsvshqnSWqhK5ts_RdX0WkG8",
    authDomain: "usersdata-97228.firebaseapp.com",
    databaseURL: "https://usersdata-97228-default-rtdb.firebaseio.com",
    projectId: "usersdata-97228",
    storageBucket: "usersdata-97228.appspot.com",
    messagingSenderId: "203025708464",
    appId: "1:203025708464:web:9b477697fceb35a8179275",
    measurementId: "G-67XJ0BMF0W"
  };

	  // Initialize Firebase
	  const app = initializeApp(firebaseConfig);
	  const analytics = getAnalytics(app);
	  const auth = getAuth();
	  console.log(app);

	  

	  //----- Registration code start	  
	  document.getElementById("form1").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("signup-btn").value = "Registering..."
		  var email =  document.getElementById("email").value;
		  var password = document.getElementById("password").value;
      
		  //For new registration
		  createUserWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert("Registration successfully!!");
        document.getElementById("signup-btn").value = "Registered!!"
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    // ..
		    console.log(errorMessage);
		    /*alert(error);*/
        document.getElementById("signup-btn").value = "An Error Occurred"

        document.getElementById("alertU").innerHTML = error;
        
		  });		  		  
	  });
	  //----- End

	  //----- Login code start	  
	  document.getElementById("form0").addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("login-btn").value = "Logging-in..."
		  var email =  document.getElementById("login_email").value;
		  var password = document.getElementById("login_password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert(user.email+" Login successfully!!!");
        document.getElementById("login-btn").value = "Logged!!"

       /* setInterval(()=>{
          window.location.href = "main.html"
        },3000) */
        localStorage.setItem("logged","true");
		    document.getElementById('logout').style.display = 'none';
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    /*alert(errorMessage);*/
      document.getElementById("login-btn").value = "An Error Occurred"
        
        document.getElementById("alertM").innerHTML = error;

        
		  });		  		  
	  });
	  //----- End

	  //----- Logout code start	  
	  document.getElementById("logout").addEventListener("click", function() {
		  signOut(auth).then(() => {
			  // Sign-out successful.
			  console.log('Sign-out successful.');
        localStorage.removeItem("logged");
			  alert('Sign-out successful.');
			  document.getElementById('logout').style.display = 'block';
			}).catch((error) => {
			  // An error happened.
			  console.log('An error happened.');
			});		  		  
	  });
    
	  //----- End
let login_f = localStorage.getItem("logged");

    if(login_f == "true"){
document.getElementById('logout').style.display = 'block';
document.getElementById('wrapper').style.display = 'none';
      document.getElementById('logout').onclick = () => {window.location.reload();}

    }
