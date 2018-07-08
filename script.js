var tweet = document.getElementById("newTweet");

function postar(){
  var tweet = document.getElementById("newTweet").value;
  var feed = document.createElement("div");
  feed.textContent = tweet;
  var post = document.getElementById("feed");
  post.appendChild(feed);
  event.preventDefault();
}