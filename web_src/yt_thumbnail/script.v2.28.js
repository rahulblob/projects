$("form").submit(function(e){e.preventDefault();$(".m0").fadeIn(500);$("#down").show();$("#dc").show();$("#img").fadeIn(1500);let imgTag=document.querySelector("#imgs");let imgUrl=document.querySelector("input").value;let butn=document.querySelector("#down");if(imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1){let vidId = imgUrl.split('v=')[1].substring(0, 11);let ytImgUrl =`https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;imgTag.src = ytImgUrl;$("#dc").fadeIn(500);}else if(imgUrl.indexOf("https://youtu.be/") != -1){let vidId = imgUrl.split('be/')[1].substring(0, 11);let ytImgUrl =`https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`;imgTag.src = ytImgUrl;$("#dc").fadeIn(500);}else if(imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){imgTag.src = ytimgUrl;$("#dc").fadeIn(500);}else{toast("not an youtube video url!");$("#down").hide();$("#img").hide();$("#dc").hide();console.log("error");}$("#down").click(function(){window.location.href = imgTag.src;toast("success!");});});