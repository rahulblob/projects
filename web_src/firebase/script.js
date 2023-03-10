var firebaseConfig = {
        apiKey: "AIzaSyAErV9NTQbCsvshqnSWqhK5ts_RdX0WkG8",
    authDomain: "usersdata-97228.firebaseapp.com",
    databaseURL: "https://usersdata-97228-default-rtdb.firebaseio.com",
    projectId: "usersdata-97228",
    storageBucket: "usersdata-97228.appspot.com",
    messagingSenderId: "203025708464",
    appId: "1:203025708464:web:9b477697fceb35a8179275",
    measurementId: "G-67XJ0BMF0W"
      };
firebase.initializeApp(firebaseConfig);
$("#dashboard").hide();
document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)
      let provider = new firebase.auth.GoogleAuthProvider()
      function GoogleLogin(){
        console.log('Login Btn Call');
firebase.auth().signInWithPopup(provider).then(res=>{
console.log(res.user)
$("#LoginScreen").hide();
$("#showLg").hide();
$("#dashboard").show(); showUserDetails(res.user)
        }).catch(e=>{
          console.log(e)
        })
      }

      function showUserDetails(user){
document.getElementById('userImg').src = user.photoURL;
document.getElementById('popupShow').src = user.photoURL;
$("#userName").html(user.displayName);
$("#userEmail").html(user.email);
      }
      function checkAuthState(){
firebase.auth().onAuthStateChanged(user=>{
          if(user){
$("#LoginScreen").hide();
$("#showLg").hide();
$("#dashboard").show();
$("#popupShow").show();
            showUserDetails(user)
          }else{
          }
        })
      }
      function LogoutUser(){
        console.log('Logout Btn Call')
firebase.auth().signOut().then(()=>{
$("#popupShow").hide();
$("#showLg").show();          
console.log("logout successful");
        }).catch(e=>{
          console.log(e)
        })
      }
      checkAuthState();
$("#showLg").click(function(){    $(".loginPage").fadeIn(300).css("display","flex");
      });
  $(".loginPage").click(function(){
    $(".loginPage").fadeOut(300);
})
