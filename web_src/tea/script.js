$(".bi-upload").click(function(){
  $(".tooltip1").fadeIn(300);
navigator.clipboard.writeText(window.location.href);
  setInterval(()=>{
    $(".tooltip1").fadeOut(300);
  },2000)
})


$(".t0").click(function(){
if($(".t1").css("background","3061ff").css("color","#fff") || $(".t2").css("background","#3061ff").css("color","#fff")){   $(this).css("background","#3061ff").css("color","#fff").css("box-shadow","0px 0px 10px rgba(0,0,0,.1)");
$(".t1").css("background","#fff").css("color","#212121").css("box-shadow","0px 0px 0px");
$(".t2").css("background","#fff").css("color","#000").css("box-shadow","0px 0px 0px");
  $("#donV").val("1");               $("#valT").html("50₹"); 
    $("#donV").css("border-color","rgba(0,0,0,.1)");                              
  }
});
$(".t1").click(function(){
if($(".t0").css("background","3061ff").css("color","#fff") || $(".t2").css("background","#3061ff").css("color","#fff")){   $(this).css("background","#3061ff").css("color","#fff").css("box-shadow","0px 0px 10px rgba(0,0,0,.1)");
$(".t0").css("background","#fff").css("color","#212121").css("box-shadow","0px 0px 0px");
$(".t2").css("background","#fff").css("color","#212121").css("box-shadow","0px 0px 0px");
$("#donV").val("3");
$("#valT").html("150₹");                 $("#donV").css("border-color","rgba(0,0,0,.1)");                               
  }
  
});
$(".t2").click(function(){
if($(".t1").css("background","#3061ff").css("color","#fff") || $(".t0").css("background","#3061ff").css("color","#fff")){   $(this).css("background","#3061ff").css("color","#fff").css("box-shadow","0px 0px 10px rgba(0,0,0,.1)");
$(".t1").css("background","#fff").css("color","#212121").css("box-shadow","0px 0px 0px");
 $("#donV").val("5");              $(".t0").css("background","#fff").css("color","#212121").css("box-shadow","0px 0px 0px");
 $("#valT").html("250₹");              $("#donV").css("border-color","rgba(0,0,0,.1)");                               
  }
});

$("#donV").on("input",function(){
  $("#valT").html(document.querySelector("#donV").value * 50 + "₹");
  if(document.querySelector("#donV").value <= "0" || document.querySelector("#donV").value < "1"){
    $("#donV").css("border-color","red");
  }
  else{
    $("#donV").css("border-color","rgba(0,0,0,.1)");
  }
  
})


function sendMessage(){
let currentS = document.querySelector("#valT").innerHTML;
let currentV = document.querySelector("#donV");
let message1 = document.querySelector(".name").value;
let desc1 = document.querySelector(".descp").value;
if(message1 == ""){
  console.log("please enter some text!");
  $(".name").css("border-color","Crimson");
}
 else if(desc1 == ""){
    $(".descp").css("border-color","Crimson");
  }
   else if(currentV.value <= "0" ||
document.querySelector("#donV").value < "1"){
     $("#donV").css("border-color","Crimson");
   }
else{
$.get("https://api.telegram.org/bot6058592922:AAEU90l_NGRTiUhdaRWm-1Y2fIwkoveTlvI/sendMessage?text="+"name: "+message1+" "+" message: "+desc1+" supported: "+currentS+"&chat_id=-1001564409464");
  $("#donV").css("border-color","rgba(0,0,0,.1)");
  $(".name").css("border-color","rgba(0,0,0,.1)");
  $(".descp").css("border-color","rgba(0,0,0,.1)");

let currentR = currentS.replace("₹","")  
  window.location.href = `upi://pay?pa=8108068981@paytm&pn=&cu=INR&am=${currentR}`;
}}
