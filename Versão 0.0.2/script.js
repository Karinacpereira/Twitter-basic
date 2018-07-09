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

  // function buttom(){
    if(countChar > 0 && countChar <=140){
      document.getElementById("button").disabled = false;
    } else {
      document.getElementById("button").disabled = true;
    // }
  }
})


