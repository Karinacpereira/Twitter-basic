var clear = document.getElementById("newTweet");
var tweet = document.getElementById("newTweet");

function postar(){
  var tweet = document.getElementById("newTweet").value;
  var feed = document.createElement("p");
  feed.textContent = tweet;
  var post = document.getElementById("feed");
  post.appendChild(feed);
  var dataTweet = horário();
  event.preventDefault();
  clear.value = "";
  document.getElementById("caracteres").innerHTML = máximo;
  document.getElementById("caracteres").style = "color: #00aced";
  document.getElementById("button").disabled = true;
  newTweet.style.height = auto;
}

  var máximo = document.getElementById("caracteres").innerHTML;
  document.getElementById("newTweet").addEventListener("input", function(){
  var conteúdo = this.value;
  countChar = conteúdo.split("").length;
  var total = document.getElementById("caracteres").innerHTML = máximo - countChar;
  if(countChar >= 0 && countChar <=140){
    document.getElementById("button").disabled = false;
  } if (newTweet.value.trim() == ""){
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

function horário(){
  var date = new Date();
  var hora = date.getHours();
  var min = date.getMinutes();
  var dia = date.getDay();
  var mês = date.getMonth();
  var ano = date.getFullYear();

  var dataTweet = document.createElement("span");
  dataTweet.setAttribute("class", "hora");
  dataTweet.textContent = hora + ":" + min + "   " + dia + "/" + mês + "/" + ano;

  return dataTweet;
}