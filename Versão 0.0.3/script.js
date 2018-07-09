var clear = document.getElementById("newTweet");
var tweet = document.getElementById("newTweet");

function postar(){
  var tweet = document.getElementById("newTweet").value;
  var feed = document.createElement("p");
  feed.textContent = tweet;
  var post = document.getElementById("feed");
  post.appendChild(feed);
  event.preventDefault();
  clear.value = "";
}

  var máximo = document.getElementById("caracteres").innerHTML;
  document.getElementById("newTweet").addEventListener("input", function(){
  var conteúdo = this.value;
  countChar = conteúdo.split("").length;
  var total = document.getElementById("caracteres").innerHTML = máximo - countChar;
  if(countChar >= 0 && countChar <=140){
    document.getElementById("button").disabled = false;
  } else {
    document.getElementById("button").disabled = true;
  }
  if(total <= 30 && total > 20){
    document.getElementById("caracteres").style = "color: #00FF00";
  }
  if(total <= 20 && total > 10){
    document.getElementById("caracteres").style = "color: #FFFF00";
  }
  if(total <= 10 && total >= 0){
    document.getElementById("caracteres").style = "color: #FF8C00";
  }
  if(total < 0){
    document.getElementById("caracteres").style = "color: #FF0000";
  }
})


// var máximo = document.getElementById("caracteres").innerHTML;
// document.getElementById("newTweet").addEventListener("input", function(){
// var conteúdo = this.value;
// countChar = conteúdo.split("").length;
// var total = document.getElementById("caracteres").innerHTML = máximo - countChar;
// if(countChar >= 0){
//   if(countChar <= 20 && countChar > 10){
//     document.getElementById("caracteres").style.color = "#00FF00";
//   }
//   if(countChar <= 10 && countChar > 5){
//     document.getElementById("caracteres").style.color = "#FFFF00";
//   }
//   if(countChar <= 5 e countChar >= 0){
//     document.getElementById("caracteres").style.color = "#FF8C00";
//   }
//   if(countChar > 0){
//     document.getElementById("caracteres").style.color = "#FF0000";
//   }
//   document.getElementById("button").disabled = false;
// } else {
//   document.getElementById("button").disabled = true;
// }
// })