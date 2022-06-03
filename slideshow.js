
$(document).ready(function() {

var timer; 
var mImage = document.getElementById('img').next();
var mTitle = document.getElementById('title').next();
var userid = document.getElementById('usid').next();
var images=Photo.where(:user_id= userid);
images=images.sort_by{|photo| photo.created_at}
images.reverse!


mImage.hover(
function() { timer=setInterval(
  function () {
    $("#title").fadeOut(1000);
    $("#img").fadeOut(1000,
      function() {
        imageCounter = (imageCounter + 1) % images.length();
        nextImage = images[imageCounter];
        $("#img").attr("src", nextImage.src).fadeIn(1000);
        $("#title").text(nextImage.title).fadeIn(1000);
      } ); },
  3000);
)}
 },
function() { clearInterval(timer); });
}

mImage.click=function(){
  clearInterval(timer);

}
mImage.dbclick=function(){
  mImage.destroy;
}



});