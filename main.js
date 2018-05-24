$(document).ready(function() {

  var navicon = document.getElementById('navicon')
  var navbar = document.getElementById('navbar')
  var main = document.getElementById('main')
  var acknowledgement = document.getElementById('acknowledgement')
  var content = document.getElementById('content')
  var left = document.getElementById('left')
  var right = document.getElementById('right')

  navicon.onclick =function(){
      $('#navbar').slideToggle(1000);
  }

  acknowledgement.onmouseover = function(){
    content.style.display = "block";
  }

  acknowledgement.onmouseout = function(){
    content.style.display = "none";
  }

  navbar.onmouseleave = function(){
    navbar.style.display = "none";
  }

  left.onclick = function(){
    alert('lefty');
  }

  right.onclick = function(){
    main.style.backgroundImage = "url('images/scan20.jpeg')"
  }

})
