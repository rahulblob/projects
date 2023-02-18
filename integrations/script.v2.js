let teaUi = document.createElement("div");teaUi.innerHTML = `<a href="https://pay.rahul.eu.org" class="teaS" referrerpolicy="origin" target="_blank"><span>☕</span> buymeatea</a>`;
document.body.appendChild(teaUi);
document.querySelector(".teaS").style = 'background:#427eff;box-shadow: 0px 10px 10px rgba(0,0,0,.1);border:none;border-radius:20px;padding:10px 17px;color:#f3f3f3;font-size:18px;font-weight:400;font-family: "Inter", sans-serif;position:fixed;bottom:30px;right:20px;transition:all .05s;text-decoration:none;cursor:pointer;';
document.querySelector(".teaS span").style = 'margin-right:3px;';
$(".teaS").hover(function(){
  this.style.transform = "scale(0.97)";
});
