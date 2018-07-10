var clear = document.getElementById("newTweet");
var tweet = document.getElementById("newTweet");

function postar(){
  var tweet = document.getElementById("newTweet").value;
  var feed = document.createElement("p");
  feed.textContent = tweet;
  var post = document.getElementById("feed");
  var dataTweet = document.createElement("span");
  var horaPost = Date().split(" ")[4];
  dataTweet.textContent = horaPost;
  post.appendChild(feed);
  feed.appendChild(dataTweet);
  dataTweet.setAttribute("class", "hora");
  event.preventDefault();
  clear.value = "";
  document.getElementById("caracteres").innerHTML = máximo;
  document.getElementById("caracteres").style = "color: #00aced";
  document.getElementById("button").disabled = true;
  newTweet.rows = 5;
}

  var máximo = document.getElementById("caracteres").innerHTML;
  document.getElementById("newTweet").addEventListener("input", function(){
  var conteúdo = this.value;
  countChar = conteúdo.split("").length;
  var total = document.getElementById("caracteres").innerHTML = máximo - countChar;
  if(countChar >= 0 && countChar <=140){
    document.getElementById("button").disabled = false;
  } if (newTweet.value.trim() == "" || newTweet.value.length > 140){
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

function size(){
  if(event.keyCode === 13){
    document.getElementById("newTweet").rows += 1;
  }
  if(document.getElementById("newTweet").scrollHeight > document.getElementById("newTweet").offsetHeight){
    document.getElementById("newTweet").rows += 1;
    }
}