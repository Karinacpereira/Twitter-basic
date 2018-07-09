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

function alertChar(){
  var máximo = 140;
  var conteúdo = document.getElementById("newTweet").value.length;
  var total = document.getElementById("caracteres").innerHTML;
  total = máximo -conteúdo;
  if(total >= 0){
    if (total <= 20 && total > 10){
      document.getElementById("caracteres").style.color = '#00FF00';
    }
    if (total <= 10 && total >5){
      document.getElementById("caracteres").style.color = '#FFFF00';
    }
    if (total <= 5 && total >= 0){
      document.getElementById("caracteres").style.color = '#FF8C00';
    }
    if (total > 0){
      document.getElementById("caracteres").style.color = '#FF0000';
    } else {
      document.getElementById("button").disabled = true;
    }
  }  
}

//   var máximo = document.getElementById("caracteres").innerHTML;
//   document.getElementById("newTweet").addEventListener("input", function(){
//   var conteúdo = this.value;
//   countChar = conteúdo.split("").length;
//   var total = document.getElementById("caracteres").innerHTML = máximo - countChar;

//   if(countChar > 0 && countChar <=140){
//     document.getElementById("button").disabled = false;
//   } else {
//     document.getElementById("button").disabled = true;

//   }
// })


